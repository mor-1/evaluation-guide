---
title: "Architecture"
category: "Enterprise Capabilities"
menu_order: 10
notoc: true
tags: [""]
---

Mendix is a high-productivity aPaaS environment built on a modern, open, and cloud-native architecture that provides for scalability and the freedom to deploy to virtually any infrastructure, including Docker, Kubernetes, and Cloud Foundry. The platform's stateless server architecture supports on-demand vertical and horizontal scaling, while the Mendix public cloud provides self-service scaling and is highly available (HA) by default.

Openness and extensibility hooks are available across the platform. This includes client and server-side APIs for custom model extensions as well as platform APIs. In addition, the open-source Mendix Model SDK allows you to integrate Mendix with your existing tools (for CI/CD and DevOps) as well as build scripts to manage, monitor, and modify the core metadata of your apps.

## {Video}

## Which Technologies Are Behind the Mendix Platform?

{Brief answer}

Mendix uses best-of-breed standard technologies to run your applications. When choosing the technologies for the Mendix Platform, we made decisions based on the following guiding principles:

* Fit for cloud architecture – To support the HA, scalability, and agility technologies used in the Mendix Platform, the technology should be a good fit for cloud architecture.
* Portability – The technology should fit well within any organization and be portable across different deployment platforms. Whether you choose to run on premises, in a private cloud, or in a public cloud, Mendix should not be limiting.
* Future-focused – We want you to benefit from new innovations, not be stuck in the past. You should be able to use any channel available to connect to customers, deploy to containers, organize your development using microservices, and use the latest cognitive technologies to bring your users the best applications.

Your apps are run by a runtime that is compatible with the Twelve-Factor App methodology and that uses industry-standard Java and Scala technologies. Web pages use one of the most popular and innovative web technologies, which is React. Mobile applications use a combination of React and Cordova to deliver fast and user-friendly mobile experiences. What is more, your data can be stored in a large number of relational databases.

The Mendix Runtime supports deployment on plain Windows or Linux OS, but preferably on Docker, Kubernetes, and Cloud Foundry. The Mendix Cloud uses Cloud Foundry on AWS to run your applications.

For more details, see [Which Technologies Are Behind the Mendix Platform?](architecture-principles#technologies).

## What Does the Mendix Cloud-Native Architecture Look Like?

The Mendix cloud-native architecture enables you to scale your applications and nodes while supporting the speed and flexibility required to deliver new functionality. Built-in agility and DevOps features combine with our Cloud Foundry (PaaS) support to empower small cross-functional teams to deploy highly portable and microservice-based applications in containers.

Read more in [What Does the Mendix Cloud-Native Architecture Look Like?](architecture-principles#cloud-native).

## How Does the Mendix Architecture Enable Scalability & Performance?

At its core, the Mendix Platform architecture has a stateless runtime engine. Being stateless means that new resources can be added dynamically to support the growing demands of your applications, such as increasing user populations and processing requirements. Multiple runtimes instances seamlessly handle any requests, and if an instance should fail or become overloaded, the load is picked up automatically in order to provide an HA environment with instances managed at the PaaS layer.

For details, see [How Does the Mendix Architecture Enable Scalability & Performance?](architecture-principles#scalability-performance).

## Read More

* [Architecture Principles](architecture-principles)
