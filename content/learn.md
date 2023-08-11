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

---
