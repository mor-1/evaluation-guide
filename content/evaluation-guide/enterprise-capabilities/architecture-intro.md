---
title: "Architecture"
category: "Enterprise Capabilities"
menu_order: 10
notoc: true
bg: "architecture"
tags: [""]
---

Mendix is a high productivity aPaaS environment built on a modern, open cloud-native architecture for scalability and the freedom to deploy to virtually any infrastructure, including Docker, Kubernetes and Cloud-Foundry. The platforms stateless server architecture supports on-demand vertical and horizontal scaling, while our public cloud provides self-service scaling and is highly available (HA) by default.Openness and extensibility hooks are available across the platform, from the client and server-side APIs for custom model extensions to the platform APIs and our open-source Model SDK, which allows you to integrate Mendix with your existing tools (CICD/ Dev Ops) and build scripts to manage/monitor and modify the core metadata of your apps.

{{% youtube yR5WA6qHByw %}}

## What Are the Key Architectural Principles Behind the Mendix Platform?

The Mendix Platform is architected for the demands of enterprise-ready applications, meaning they are maintainable, highly performant and scalable, and can cope with the complex nature of enterprise systems and integration, achieved through the application of the following architectural principles:

* Model Driven Development
* Model interpretation over code generation
* Microservices, Containers and Deployment Standardization
* Stateless
* Open and Extensible
* Twelve-Factor App Principles

For details, see [What Are the Key Architectural Principles Behind the Mendix Platform?](architecture-principles#key-principles)

## What Are the Key Components of the Mendix Platform Architecture?

The Mendix platform is an integrated Applications Platform as a Service (aPaaS) for the design, build, test and deployment of enterprise applications. It comprises a Sophisticated Developer Portal for App Portfolio Management, Requirements Gathering, Monitoring and Operations, a Desktop and Web Modeling environment for Rapid Visual App Development, and a comprehensive App Stores complete with hundreds of reusable components, connectors and a building block to accelerate development.   

For details, see [What Are the Key Components of the Mendix Platform and Their Architecture?](architecture-platform#key-components).

## How Does the Mendix Runtime Support 12-Factor Cloud-Native Apps?

While not strictly a set of architectural principles, the [Twelve-Factor App](https://12factor.net/) methodology is a set of best practices for cloud-native applications covering: -

* **Codebase** – Scale via processes
* **Dependencies** – All dependencies are part of the App Model
* **Configuration** – Defined in App Model via constraints
* **Backing Services** – Configurable at deployment time
* **Build, Release, Run** – Separate build and run
* **Processes** - Stateless
* **Port Binding** - App should be self-contained
* **Concurrency** – Scale via processes
* **Disposability** - Runtime instances can be stopped and started as required
* **Development/Production Parity** – Consistent environments across tests and prod
* **Logs** – Collect logs via CF Firehose
* **Admin Processes** – Ship Admin and App Code in one Model

For details, see [How Does the Mendix Runtime Support 12-Factor Cloud-Native Apps?](architecture-12-factor#12-factor)

## Read More

* [Architecture Principles](architecture-principles)
* [Platform Architecture](architecture-platform)
* [Cloud Architecture](architecture-cloud)
* [Runtime Architecture](architecture-runtime)
* [Twelve-Factor Architecture](architecture-12-factor)
