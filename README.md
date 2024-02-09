# dasharo-website

## Local preview

1. Run local server: `./scripts/local-preview.sh http://localhost:1313`
1. Go to [http://localhost:1313/](http://localhost:1313/) to view the changes.

_NOTE_: Feel free to replace `http://localhost:1313` with desired IP address
and port.

## Good practices

### Broken links checker

Currently we are using [lychee](https://github.com/lycheeverse/lychee) a fast,
async, stream-based link checker written in Rust. The automatic check is
triggered on each push to the master pull request.

You can also run it locally using a docker image:

```bash
$ docker run --init -it --rm -w $(pwd) -v $(pwd):$(pwd) lycheeverse/lychee
    --max-redirects 10 -a 403,429,500,502,503,999 .
```

We also use the Lychee Log Parser, which evaluates whether the problems detected
by lychee are actual problems with the site or server. Whenever you add
changes, it is your responsibility to fix all problems (even if the erroneous
links are in a part of the code that you have not changed). In this way,
together we will maintain the quality of the links and fix the errors that
occur.

To fix an error, open the job that crashed. In the log you will find
information about which file the error is in and which link is affected:

```bash
2024-02-07 02:08:54 - ERROR - Broken links found!
2024-02-07 02:08:54 - ERROR - ---
2024-02-07 02:08:54 - ERROR - Broken links in "BROKEN.md":
2024-02-07 02:08:54 - ERROR - ---
2024-02-07 02:08:54 - ERROR - Broken link: https://use.fontawesome.com/
2024-02-07 02:08:54 - ERROR - Failed: Network error: 404
2024-02-07 02:08:54 - ERROR - ---
```

In this case, the file is `"BROKEN.md"` and the invalid link is
`https://use.fontawesome.com/`. Check whether the path has changed or the
page has expired. If the page has expired, use <https://web.archive.org/> to
restore the older version. Lychee automatically suggests url fix for the broken
links:

```shell
 2024-02-09 13:02:52 - ERROR - ---
2024-02-09 13:02:52 - INFO - Check if broken URL server is expired. If it's no longer available, you can fix broken links using the suggestions below:
2024-02-09 13:02:52 - INFO - ---
2024-02-09 13:02:52 - INFO - Suggestions for the "BROKEN.md"
2024-02-09 13:02:52 - INFO - ---
2024-02-09 13:02:52 - INFO - https://use.fontawesome.com/ - http://web.archive.org/web/20211220191310/https://use.fontawesome.com/
2024-02-09 13:02:52 - INFO - ---
```

If the page does not have a saved version in the archive, remove the link and
add an annotation.

If you think that the error that appeared is not an error of the site but
of the server you are connecting to, please open an issue and we will help
you solve the problem.

### Relative links

Please avoid using relative like:

```md
[contact](../../pages/contact/)
```

Instead, use absolute links:

```md
[contact](https://www.dasharo.com/pages/contact/)
```

### Linking to the newly created page

If you want to add internal link to the page you are creating (new page is
not deployed yet), please use:

```md
[link name](#new-page-header)
```

instead of:

```md
<https://www.dasharo.com/pages/new-page#new-page-header>
```

If you must use an absolute link, you can skip link checking by adding the
site to the `.lycheeignore` file.

### pre-commit hooks

- [Install pre-commit](https://pre-commit.com/index.html#install), if you
  followed [local build](#local-preview) procedure `pre-commit` should be
  installed

- [Install go](https://go.dev/doc/install)

- Install hooks into repo:

```shell
pre-commit install --hook-type commit-msg
```

- Enjoy automatic checks on each `git commit` action!

- (Optional) Run hooks on all files (for example, when adding new hooks or
  configuring existing ones):

```shell
pre-commit run --all-files
```

#### To skip verification

In some cases, it may be needed to skip `pre-commit` tests. To do that, please
use:

```shell
git commit --no-verify
```

### Grammarly - a must have for content verification

Grammarly is a great, free tool for all bloggers and anyone who needs to write
documentation in English.
It will let you know if you skipped a coma or made a typo, as well, as it will
check advanced grammar mistakes, too. Bear in mind, that the free version has
its limits, so you need to keep an eye on it at all times and still, you are
the one who distinguishes when to use a/an or the, as it only suggests changes.

Two versions of Grammarly are available: a plugin for Chrome/Chromium or online
application. You need to create an account (it's for free) to be able to use
Grammarly.

Visit the website [Grammarly](https://app.grammarly.com/) and create an account.

>It is a MUST-HAVE application for anyone who writes posts or documentation, so
feel obliged to use it.

### Creating titles - Emotional Marketing Value Headline Analyzer

<https://www.aminstitute.com/headline/>

The free tool, which analyze headline to determine the Emotional Marketing Value
(EMV) score. Headline is analyzed and scored based on the total number
of EMV words it has in relation to the total number of words it contains. This
will determine the EMV score of headline. Most professional copywriters'
headlines will have 30%-40% EMV Words in their headlines, while the most gifted
copywriters will have 50%-75% EMV words in headlines.
