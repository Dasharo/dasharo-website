---
title: Dasharo Learn
description: Discover and see how it works
layout: learn
url: pages/learn

banner:
  title: Dasharo <br> <span>LEARN</span>
  description: Discover and see how it works

  page_content_list:
  - title: How Dasharo <span> works</span>
    icon: images/icons/knight-grey.png
    link: "#how-dasharo-works"
    
  - title: Dasharo <span>modules</span>
    icon: images/icons/rook-grey.png
    link: "#dasharo-modules"
    
  - title: DI<span>Y</span>
    icon: images/icons/bishop-grey.png
    link: "#dasharo-diy"
    
  - title: FA<span>Q</span>
    icon: images/icons/queen-grey.png
    link: "#dasharo-faq"


how_dasharo_works:
  title: How Dasharo <span>works</span>

  how_dasharo_works_details:
    dasharo_graph_image : images/img/dasharo-graph.svg
    title: Let’s us briefly explain what exactly Dasharo stack consists of

    content_block_1: <span>The first layer is a target platform.</span>
      Most clients have it already chosen when starting a journey with Dasharo,
      however sometimes the platform is only adapted to a pre-selected set of
      features. With the knowledge about it’s specification we can proceed
      further.

    content_block_2: <span>The next step is about the firmware layer.</span>
      The most common is coreboot due to its strong focus on boot speed,
      security and flexibility, however the choice depends on targeted users of
      the platform. Further, depending on the chosen firmware, integration of
      Intel FSP or AMD AGESA is set. Having it all confirmed, the payload and
      the operating system may become the next layer – The stack may differ at
      this point. For example, UEFI firmware doesn't need payload to be
      implemented, due to its compatibility with UEFI specification.

    content_block_3: <span>Followingly, selected set of features is implemented.
      </span> The choice depends on platform specification and it's overall
      destination. The list of the sample features is available below. The
      process of creating dedicated Dasharo firmware is performed with the
      constant support of our team, from the early advisory steps to the
      constant maintenance process.

dasharo_modules:
  title: Dasharo <span>Modules</span>
  description: Below are sample Dasharo features that can be added to your
    Dasharo product.

  modules_category:
  - title: Security Module
    icon: "images/icons/rook-white.png"
    modules_list:
    - title: Static Code Root of Trust for Measurement (S-CRTM)
      features:
      - To establish trust anchor for all integrity measurements gathered during
        boot process.

    - title: Dynamic Root of Trust for Measurement (D-RTM)
      features:
      - To reestablish trust in a compromised environment without reboot.

    - title: Secure, verified and measured boot integration
      features:
      - To make sure your platform boots only trusted code.

    - title: Firmware Recovery
      features:
      - To recover the firmware image in any situation.

    - title: Firmware re-ownership
      features:
      - To complete the ownership transfer and verification of the software
        delivered with hardware.

    - title: Trusted Platform Module 2.0 (TPM)
      features:
      - To make your platform tamper resistant, with secure chip that carries
        out cryptographic operations.

    - title: Secure firmware update
      features:
      - To mitigate supply chain attacks and provide secure system firmware
        update.

    - title: Security Features Automatic Report
      features:
      - To raise awareness of the security features implemented and the level of
        protection offered by platform firmware.

    - title: OPAL integration
      features:
      - To enhance the safety of the data on the disk by leveraging its security
        features.

    - title: Intel STM or AMD SMM Supervisor
      features:
      - To allow only controlled access and harden the level of isolation.

    - title: Hypervisor as payload
      features:
      - To increase the security of the running target software to the highest
        possible level.

  - title: Compatibility Module
    icon: "images/icons/bishop-white.png"
    modules_list:
    - title: Regression Test Results (RTR)
      features:
      - To prove the Dasharo generic and customer-specific features for your
        platform with a powerful set of automated suites integrated with Dasharo
        CI and results visualization.

    - title: Documentation
      features:
      - To make users self-sufficient with explicit, user-dedicated manuals of
        released binaries, installation steps and best practices guidelines.

    - title: Continuous Integration
      features:
      - To handle faults, isolate and resolve them in a reasonable time,
        including emergency releases.

    - title: USB boot
      features:
      - To easily and quickly change the stuff the platforms boot into,
        including OS or any bootable tool.

    - title: Support for implementation of the Preboot eXecution Environment
        (iPXE).
      features:
      - To boot from a network using the open source network boot firmware that
        provides full PXE implementation.To retrieve data through protocols
        other than TFTP (HTTP, iSCSI and more).

    - title: Continuous Deployment with fwupd/LVFS
      features:
      - To have an insight into the continuous delivery process for the embedded
        firmware in hardware products and faster release rate.

    - title: Operating Systems Compatibility
      features:
      - To improve the product accessibility.

    - title: Industry Standards Compliance Testing
      features:
      - To gain an insurance on the product operability.

    - title: Legacy support
      features:
      - To maintain backward compatibility.

    - title: USB BIOS Recovery Dongle
      features:
      - To recover BIOS even in offline environment.

  - title: Performance Module
    icon: "images/icons/knight-white.png"
    modules_list:
    - title: CPU Boost
      features:
      - To increase significantly performance of the processor.

    - title: Boot time optimization
      features:
      - To improve the boot time of the bootloader.

    - title: Power consumption optimization
      features:
      - To reach a lower power consumption.


  - title: Marketing
    icon: "images/icons/queen-white.png"
    modules_list:
    - title: Newsletter
      features:
      - To allow your clients to be up-to-date with product release notes and
        events, rising strong interest around the product.

    - title: Blog
      features:
      - To make your product visible with blog posts based on release notes with
        implementation examples marketing means.

    - title: Website
      features:
      - "To create a Dasharo product dedicated source base that may contain all
        crucial aspects of the product: RTR results, CI, Blog, binaries,
        releases and more according to your choice."

    - title: Dedicated firmware release site with changelogs
      features:
      - To place all the binaries in one place with detailed changelogs.

dasharo_diy:
  title: Dasharo <span>DIY</span>

  coreboot_yourself:
    title: coreboot YOURSELF
    logo: images/logo/cb-logo.png
    content: >-
      <span>coreboot source-code is available in the official repository.</span>
      That means you can port coreboot and adjust payload with chosen features
      providing that you are deeply experienced in firmware engineering and have
      a sufficient amount of time. Step-by-step procedures do not exist yet, so
      in case of any issue or bug, it is challenging to find a solution or at
      least a guide. Furthermore, integration, validation, emergency releases
      and maintenance may cause a problem without the constant support of an
      experienced firmware team.

      <br><br>
      <span>Are we trying to tell you that it is not a good idea to port and
      adjust coreboot by yourself?</span> No.

      <br><br>
      If you are experienced and porting coreboot will serve your purposes, you
      can fully manage it by yourself and we encourage you to do so! For OEM/ODM
      vendors, the need for time, quality and stability measures makes Dasharo
      the best choice. Let all the effort involved in porting, adjusting,
      maintenance and validation be on us – experienced firmware experts.

  coreboot_with_dasharo:
    title: coreboot with Dasharo
    logo: images/logo/dasharo-logo.png
    content: >-
      For OEM/ODM vendors the need for time, quality and stability measures
      Dasharo solution as the best choice. Let all the effort involved in
      porting, adjusting, maintenance, and validation be set on us – experienced
      firmware expert.

    what_can_you_gain:
      title: What can you gain?
      features:
      - Full coreboot integration compatible with your specification
      - Implementation of preferred Dasharo features available for your platform
      - Graphical User Interface that will let you modify your features
      - Maintenance support including emergency releases
      - Transparent validation with regression tests results
      - Marketing support with technical writing, documentation releases, blog
        posts and newsletters

dasharo_faq:
  title: Dasharo <span>FAQ</span>

  faq_category:
  - title: General
    icon: images/icons/rook-grey.png
    icon_white: images/icons/rook-white.png
    faq_list:
    - title: What is Dasharo?
      content: >-
        Dasharo is a complete ecosystem of tools and products that are used in
        the process of creating a binary. It offers the components that are
        needed to develop and maintain a high quality, scalable, and modular
        firmware, for the stability and security of your platform. It is the
        common effect of R&D effort, transparent validation, heavy attestation,
        smart components, reference OS, long maintenance, and enthusiasm for
        security and open source solutions.

    - title: What is firmware?
      content: >-
        Firmware is a set of instructions created to provide low-level control
        over a hardware device. Firmware provides information on how the device
        should operate. A good example of a firmware are embedded systems like
        traffic lights and consumer appliances. Computers with the most
        recognized firmware, commonly known as BIOS firmware, used during the
        booting process of a computer.

    - title: What is the difference between Dasharo and traditional UEFI/BIOS
        firmware development provided by IBV?
      content: >-
        Dasharo relies on open-source components with, as much as possible, a
        transparent supply chain. IBV-driven UEFI/BIOS development doesn’t
        reveal the firmware components supply chain details, so the customers
        don't know what components binary consists of and where the components
        come from. Dasharo enables the revenue model extension, but also
        cooperation with the community, crowdsourcing and organizations.
        UEFI/BIOS business model is dedicated to IBV / OEM customers only.
        Dasharo delivers transparent validation results, on the contrary IBV
        UEFI/BIOS development process doesn’t reveal testing results, so the
        changes cannot be tracked. This also leads to low quality release notes
        and poor communication with end customers and users. Dasharo by design
        gives you the opportunity to differentiate through firmware and maximize
        hardware features utilization, where the most basic UEFI/BIOS provided
        by OEM/ODM with their platforms focus on crucial features and building
        margin through volume sales . Dasharo focus, strategy, and goals are
        targeting into domain-specific computing instead one size fits all.

    - title: Can I port coreboot to the chosen platform myself since it is
        open-source?
      content: >-
        coreboot source-code is available in the official repository. That means
        you can port coreboot and adjust payload with chosen features providing
        that you are deeply experienced in firmware engineering and have a
        sufficient amount of time. Step-by-step procedures do not exist yet, so
        in case of any issue or bug, it is challenging to find a solution or at
        least a guide. Furthermore, integration, validation, emergency releases
        and maintenance may cause a problem without the constant support of an
        experienced firmware team. Are we trying to tell you that it is not a
        good idea to port and adjust coreboot by yourself? No. If you are
        experienced and porting coreboot will serve your purposes, you can fully
        manage it by yourself and we encourage you to do so! For OEM/ODM
        vendors, the need for time, quality and stability measures makes Dasharo
        the best choice. Let all the effort involved in porting, adjusting,
        maintenance and validation be on us – experienced firmware experts.

    - title: Can I request any demo?
      content: >-
        [Visit dasharo.com/products](/products/) where product line
        implementations and details will be available soon.

    - title: Why do I need Dasharo?
      content: >-
        To gain transparent validation, heavy attestation, smart components,
        reference OS, long maintenance and marketing support. Dasharo brings
        solutions to many of the problems of the traditional UEFI/BIOS firmware
        development provided by IBV, for example:
        
        - Existing BIOS firmware products leaves burden of responsibility for
        optimization to end user <br/>

        - Lack of security-focused BIOS firmware product which can seamlessly
        leverage advanced hardware security features <br/>

        - Maintaining compatibility and compliance of BIOS firmware is a very
        complex task <br/>

        - Even in the light of competitive advantage OEMs/ODMs usually do not
        have time and/or resources to increase brand awareness and customer
        value through BIOS firmware solutions  <br/>  <br/>

        If you don’t have a solution yet, let Dasharo become your answer.
        [Contact us](/#get-a-quote)

    - title: What consulting services can Dasharo Team provide beyond online courses?
      content: >-

        We offer a wide range of consulting services at all stages of the
        hardware life cycle. These include open-source firmware feasibility
        analysis, proprietary to open-source transition plans, firmware
        porting, custom development and debugging, automated firmware
        validation, and maintenance through Dasharo open-source firmware
        distribution. We also provide firmware incident response, Trusted
        Computing consulting and development, Root of Trust implementation and
        integration, and more. If you are interested in our services, feel free
        to [contact us](/pages/contact).

    - title: Where can I find your GitHub repository to raise an issue/question
        as an active supporter/user?
      content: >-
        - Visit [github.com/Dasharo/dasharo-issues](https://github.com/Dasharo/dasharo-issues) 
        where you can find details on how to raise an issue or question.

        - Optionally, use our [Matrix Dasharo Space](https://matrix.to/#/#dasharo:matrix.org)
        where you can discuss the problem with our community that will gladly
        help in troubleshooting firmware questions.

    - title: Can I get the Dasharo as an individual user?
      content: >-
        Yes, Dasharo firmware is publicly available for free, therefore please
        go through steps below to make sure that you will get the recent news
        and find the desired support for your hardware:

        - Join the newsletter with the latest firmware realeases and news -
        [Dasharo External newsletter](https://newsletter.3mdeb.com/subscription/wwL90UkXP)

        - Find "Supported hardware" tab in our documentation database - [Docs
        Dasharo](https://docs.dasharo.com/) where all downloadable firmware
        binaries for the target platform are linked. Also, check the unique
        mailing lists for chosen platforms:

          * [Dasharo KGPE-D16](https://newsletter.3mdeb.com/subscription/ozes4Jxuo)

          * [Dasharo open-source firmware compatible with MSI PRO Z690-A release](https://newsletter.3mdeb.com/subscription/aKgTJjYEA)

          * [Dasharo OSF vPub](https://newsletter.3mdeb.com/subscription/0_K65I7ro)

          * [Dasharo Tools Suite](https://newsletter.3mdeb.com/subscription/ttzqCq9fy)

          * [Dasharo Trustworthy Computing](https://newsletter.3mdeb.com/subscription/w2Y2G4Rrj)

          * [Dell OptiPlex 7010/9010 Dasharo Release](https://newsletter.3mdeb.com/subscription/8dp1vv5mR)

          * [NovaCustom Dasharo Release](https://newsletter.3mdeb.com/subscription/T61MyO2sP)

          * [NovaCustom NS5x/7x 11th Generation Dasharo](https://newsletter.3mdeb.com/subscription/4X0c3e5Y6)

          * [NovaCustom NS5x/7x 12th Generation Dasharo](https://newsletter.3mdeb.com/subscription/RJrTXDhWR)

          * [NovaCustom NV4x 11th Generation Dasharo](https://newsletter.3mdeb.com/subscription/S5ze5u_qN)

          * [NovaCustom NV4x 12th Generation Dasharo](https://newsletter.3mdeb.com/subscription/ZkbNv4qdO)

          * [PC Engines Open Source Firmware Release](https://newsletter.3mdeb.com/subscription/ReBpt3IZY)

        - There is also posibility to build it yourself, visit
        [github.com/Dasharo](https://github.com/Dasharo) where you can find more
        information about coreboot build process.

  - title: Product Info
    icon: images/icons/knight-grey.png
    icon_white: images/icons/knight-white.png
    faq_list:
    - title: What are Dasharo modules?
      content: >-
        Dasharo consists of four modules. Each covers a wide range of features
        from which the client can build up their own Dasharo firmware:
        
        * Security Module - hardware protection features, eg. S-CRTM/DRTM

        * Performance Module - hardware performance optimization features, eg.
          CPU Boost
        * Compatibility Module - maintenance features, eg. CI/CD

        * Marketing Module - brand awareness and customer value features, eg.
          Newsletter campaigns
        
        For the full list of features visit ["Dasharo
        Modules"](#dasharo-modules).

    - title: How long does it take to deliver Dasharo?
      content: >-
        Dasharo is created from ready-to-implement components, but the time to
        implement depends on many factors, such as the amount of features,
        platform amount and specification, needed standard.</br></br>
        [Contact us](/#get-a-quote) to get more detailed information.

    - title: How open is Dasharo?
      content: >-
        We are strong believers in Freedom and Open Source Software (FOSS), but
        we also have to deal with reality. Silicon Vendors and other providers
        in the firmware supply chain try to monopolize the ecosystem by
        including NDA procedures and binary blobs. Because of that, Dasharo has
        to provide seamless integration of Intel FSP, AMD AGESA and other binary
        components. Dasharo is needed for liberating the firmware ecosystem,
        because it is the only product that transparently leverages the Open
        Source Firmware. Dasharo promotes best practices that can prove that a
        non-closed approach is financially feasible and can lead to an equally
        effective business model. Concluding, our mission is to make Dasharo
        product lines as open as possible under existing market circumstances
        and invest in liberating remaining pieces of the ecosystem. For the
        Dasharo ecosystem we always use OSS and OSHW.

    - title: Who makes Dasharo?
      content: >-
        Dasharo is created by experienced embedded firmware engineers from
        3mdeb. The team of world-class experts in creating secure firmware,
        publicly recognized by industry leaders (for more information check our
        Press Release [website](https://3mdeb.com/press-releases)). The
        significant amount  of code of the Dasharo ecosystem comes from the Open
        Source Firmware community of which we are proud members always
        evangelizing about FOSS and giving back as much as we can.

    - title: How can I learn more about Dasharo?
      content: >-
        * If you want to know more about how Dasharo works, visit ["How Dasharo
        works"](#how-dasharo-works).

        * If you want to get details about particular features, ["Dasharo
        Modules"](#dasharo-modules).

        * If you want to see, where Dasharo can be already found, check our [use
        cases](/products#use-cases).

        * If you want to talk and ask questions, contact us or book a [meeting
        online](https://calendly.com/3mdeb).

    - title: What is the difference between Dasharo and coreboot?
      content: >-
        coreboot is an open source, extended firmware framework dedicated to
        embedded systems and modern computers. While is increasingly popular due
        to its adoption (e.g. Chromebook series), its availability is still
        limited. coreboot in Dasharo may play the role of a main component,
        implemented along with chosen Dasharo features, payloads, OS and CI/CD
        support. But coreboot is only a framework and does not produce a
        fully-featured BIOS firmware solution.For example, Dasharo easily can
        work well with LinuxBoot, UEFI/edk2, oreboot and others.

    - title: What in case of potential sudden vulnerabilities during maintenance
        period?
      content: >-
        In case of any suddenly discovered vulnerabilities, according to Dasharo
        Maintenance Agreement, we will provide you with emergency release to
        prevent your platform from the potential threat. If you want to know
        more – [contact us](/pages/contact/).

    - title: What OS do I have to choose for my Dasharo Platform?
      content: >-
        You can choose any OS you wish to. The most common are Windows and Linux
        distributions. Please note Dasharo supports also various hypervisors and
        embedded operating systems.

    - title: What about the ownership rights?
      content: >-
        We do believe that taking ownership of firmware and passing it on when
        needed is critical to platform security. Existing BIOS firmware
        solutions make this process difficult— or impossible — to perform.
        Dasharo helps hardware vendors and their customers in making the
        firmware re-ownership process secure and trustworthy by providing
        required cryptographic primitives. We believe that there are two
        state-of-the-art solutions of the problem:

        - [root of trust OCP](https://www.opencompute.org/blog/ocp-security-announces-version-10-specs-for-root-of-trust) <br/>

        - [IBM firmware re-ownership](https://www.opencompute.org/documents/ibm-white-paper-ownership-and-control-of-firmware-in-open-compute-project-devices) <br/>

    - title: Is there a Dasharo community?
      content: >-
        Users demand more communication and interaction with vendors.
        Communication standards that worked in the past—for presenting
        incremental changes in firmware—are insufficient now. When it is not
        provided, informal and unofficial channels will emerge. We direct and
        coordinate support through communication channels e.g. vendor, OS and
        firmware forums, Github/Gitlab issue trackers, social media,
        Slack/Gitter, and similar real-time media.

    - title: What will be the difference in user experience between Dasharo and
        traditional firmware?
      content: >-
        The average user doesn’t know how to update their BIOS firmware. This is
        because of lack of support, lack of long-term, regular releases, and
        finally, lack of explicit documentation with clear manuals. Firmware is
        considered part of hardware and this is the paradigm which is changing
        right now. Innovations around the releases are summarized, but without
        information concerning maintenance details. Dasharo's primary focus is
        features set, but long term we plan to offer customers product-dedicated
        GUI, continuous integration with regular releases supported by
        user-friendly documentation, support channels and video manuals.
        Additional information about your Dasharo product releases, features,
        development and news can be provided in the form of newsletter campaigns
        and blog posts created directly by our specialists. The development of
        your Dasharo firmware can be tracked through Dasharo Regression Test
        Results website.

    - title: Do I need to have my platform already chosen to request Dasharo?
      content: >-
        No, you don’t. Dasharo is a complete ecosystem of tools and components
        that are crucial to create, adapt and maintain firmware. Platform
        architecture and microarchitecture largely determines which components
        can be implemented. If you have a platform you can [get a
        quote](/#get-a-quote) or, if not you can [contact us](/pages/contact/),
        to gain detailed information about the possible solutions.

    - title: What Dasharo consists of?
      content: >-
        Dasharo is the common effect of R&D effort, transparent validation,
        heavy attestation, dedicated components, reference OS, long maintenance,
        marketing support and enthusiasm for security and open source solutions.

    - title: How can I provide my clients with detailed release information?
      content: >-
        - Each Dasharo release contains a binary file, a SHA256 hash of a binary
        file and a signed hash with a Dasharo release key <br/>
                  
        - Each Dasharo release includes a test report <br/>
        
        - Dasharo generic test procedures from a given segment are described in
        the documentation <br/>
        
        - Dasharo specific test procedures are delivered in the form of a PDF
        document with a release <br/>
        
        - Each Dasharo release includes an integrity and signature verification
        procedure <br/>

    - title: How can I know about the quality of Dasharo firmware?
      content: >-
        - Each release of Dasharo includes a version compatible with [Semantic
        Versioning 2.0.0](https://semver.org/) <br />
                  
        - Each Dasharo release includes a release note compliant with the [Keep
        A Changelog 1.0.0](https://keepachangelog.com/en/1.0.0/) specification
        <br />
        
        - Each Dasharo release contains a detailed description of the components
        version and a link to the scope of changes introduced since the last
        release
      
  - title: Payment
    icon: images/icons/bishop-grey.png
    icon_white: images/icons/bishop-white.png
    faq_list:
    - title: How much does Dasharo cost?
      content: >-
        [Get a quote](/#get-a-quote), to get some detailed information.

    - title: How can I buy Dasharo?
      content: >-
        [Contact us](/pages/contact/) to set the details of your Dasharo
        product. Book a call or leave a message so we will call you back.

    - title: What is the payment policy and who pays for Dasharo?
      content: >-
        Typically, firmware solutions are sold through royalty payment or
        subscription-based models. The first option relies on the volume of
        offered products, what effectively eliminates industries with low volume
        but high-value platforms e.g. medical robots. Subscription-based models,
        although better, are still tied to firmware solution providers and
        similarly lead to all the scope of negative effects of vendor lock-in.

        Also, there is no license fee. For example, if client chooses the
        support package for a half a year to maintain Dasharo releases for
        chosen platform, the monthly payment depends on the Senior's Time
        Equivalent (STE) that was utilized during the development or monthly
        STE budget enforced by the client.

    - title: What pricing model do you offer?
      content: >-
        Dasharo can be purchased by OEM/ODM providers, community crowdfunding
        support, individuals, companies that are looking for dedicated or
        confidential firmware solutions. To get more detailed payment
        information, please fill [Get a quote](/#get-a-quote).

  - title: Platforms
    icon: images/icons/queen-grey.png
    icon_white: images/icons/queen-white.png
    faq_list:
    - title: How are Dasharo firmware updates requested?
      content: >-
        Firmware release cycle is set at the early product development stage and
        according to the individual case. Updates can vary widely, but one
        common schedule would be delivering updates to users every three to six
        months depending on the Open Source Core Framework Software release
        cycle. We also support emergency releases occurring in case of sudden
        vulnerabilities as well as customer on-demand builds.

    - title: What platforms/microarchitectures are supported?
      content: >-
        Dasharo is not limited by the processor architecture or hardware
        platform. We support any platform with the architecture x86, ARM/Arm64,
        POWER or RISC-V.

    - title: What Dasharo features are supported on my platform?
      content: >-
        Features that are supported on your platform mostly depend on the
        architecture, microarchitecture and hardware platform design. We need to
        get this basic information to provide you with the list of supported
        features on your platform. If you don’t know this information or you
        don’t know what platform would be the best choice for you – contact us,
        we will help you in either case.

    - title: How are Dasharo firmware updates requested?
      content: >-
        Firmware release cycle is set at the early product development stage and
        according to the individual case. Updates can vary widely, but one
        common schedule would be delivering updates to users every three to six
        months depending on the Open Source Core Framework Software release
        cycle. We also support emergency releases occurring in case of sudden
        vulnerabilities as well as customer on-demand builds.

    - title: Are there any Dasharo product lines that support the latest
        hardware?
      content: >-
        Yes, you can check our roadmap through [Dasharo GitHub
        Announcement](https://github.com/Dasharo/dasharo-issues/discussions/categories/announcements)
        forum and [Supported Hardware] tab, where you can find our latest
        releases for the newest architectures. Dasharo Team aims to support the
        latest processor families available in the market, therefore our next
        big project will be related to Raptor Lake generation.

    - title: Can I introduce custom firmware feature into my existing platform?
      content: >-
        Yes, Dasharo Team is very flexible in the terms of preparing the ideal
        solution for the client needs. For example, we can prepare project
        charter that contains coreboot port for target platform with UEFI
        payload, iPXE support, security hardening (e.g. Intel's Boot Guard) and
        on top of that, with full verification of the platform stability through
        a wide scope of automated regression testing.</br></br>
        Example Dasharo stack and how to build custom solution can be found
        [here](/pages/learn/#how-dasharo-works).

    - title: Can Dasharo Team develop, maintain and support software for common
        laptops or desktops produced by well-known OEMs?
      content: >-
        Yes, the answer for such request is [Dasharo Support
        Package](https://docs.dasharo.com/osf-trolling-list/jsm_documentation/#dasharo-support-package).
        Details of such project should be discussed beforehand on the
        dedicated meeting, therefore feel free to book a matching time in our
        [calendar](https://calendly.com/3mdeb/consulting-remote-meeting).
---
