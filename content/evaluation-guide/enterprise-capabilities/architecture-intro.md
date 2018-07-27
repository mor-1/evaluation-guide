---
title: "Architecture"
category: "Enterprise Capabilities"
menu_order: 10
notoc: true
tags: [""]
---

Mendix is a high productivity aPaaS environment built on a modern, open cloud-native architecture for scalability and the freedom to deploy to virtually any infrastructure, including Docker, Kubernetes and Cloud-Foundry. The platforms statelsss server architecture supports on-demand vertical and horizontal scaling, while our public cloud provides self-service scaling and is highly available (HA) by default. 

Openness and extensibility hooks are available across the platform, from the client and server-side APIs for custom model extensions to the platform APIs and our open-source Model SDK, which allows you to integrate Mendix with your existing tools (CICD/ Dev Ops) and build scripts to manage/monitor and modify the core metadata of your apps.

## {Video}

## Which Technologies Are Behind the Mendix Platform?

{{% todo %}}[**Question no longer available - what to replace with?**]{{% /todo %}}

Mendix uses best-of-breed standard technologies to run your applications. When choosing the technologies for the Mendix Platform, we made decisions based on the following guiding principles:

* **Fit for cloud architecture** – To support the HA, scalability, and agility technologies used in the Mendix Platform, the technology should be a good fit for cloud architecture.
* **Portability** – The technology should fit well within any organization and be portable across different deployment platforms. Whether you choose to run on premises, in a private cloud, or in a public cloud, Mendix should not be limiting.
* **Future-focused** – We want you to benefit from new innovations, not be stuck in the past. You should be able to use any channel available to connect to customers, deploy to containers, organize your development using microservices, and use the latest cognitive technologies to bring your users the best applications.

Your apps are run by a runtime that is compatible with the Twelve-Factor App methodology and that uses industry-standard Java and Scala technologies. Web pages use one of the most popular and innovative web technologies, which is React. Mobile applications use a combination of React and Cordova to deliver fast and user-friendly mobile experiences. What is more, your data can be stored in a large number of relational databases.

The Mendix Runtime supports deployment on plain Windows or Linux OS, but preferably on Docker, Kubernetes, and Cloud Foundry. The Mendix Cloud uses Cloud Foundry on AWS to run your applications.

For more details, see [Which Technologies Are Behind the Mendix Platform?](architecture-principles#technologies).

## What Does the Mendix Cloud-Native Architecture Look Like?

{{% todo %}}[**Question no longer available - what to replace with?**]{{% /todo %}}

The Mendix cloud-native architecture enables you to scale your applications and nodes while supporting the speed and flexibility required to deliver new functionality. Built-in Agility and DevOps combine with our Cloud-Foundry (PaaS) support to allow small cross-functional teams to deploy highly portable, microservices based applications in containers. 

Read more in [What Does the Mendix Cloud-Native Architecture Look Like?](architecture-principles#cloud-native).

## How Does the Mendix Architecture Enable Scalability & Performance?

{{% todo %}}[**Question no longer available - what to replace with? The Statelessness point in Architecture Principles? **]{{% /todo %}}

At its core, the Mendix Platform architecture has a stateless runtime engine. Being stateless means that new resources can be added dynamically to support the growing demands of your applications, such as increasing user populations or processing requirements. 

Multiple runtimes instances seamlessly handle any requests picking up the load automatically should an instance fail or become overloaded to provide an HA environment, with instances managed at the PaaS layer. 

For details, see [How Does the Mendix Architecture Enable Scalability & Performance?](architecture-principles#scalability-performance).

## Read More

* [Architecture Principles](architecture-principles)
