---
title: "Architecture Principles"
parent: "architecture-intro"
menu_order: 10
bg: "architecture"
tags: [""]
---

## 1 What Are the Key Architectural Principles Behind the Mendix Platform? {#key-principles}

Within the entire Mendix Platform, we have embedded (technical) principles to guarantee enterprise-ready applications. For Mendix, "enterprise-ready" means that the apps  are maintanable, performing, and scalable. It also means that the apps can cope with all the functional complexity of back-end enterprise systems so that they can be integrated into any enterprise landscape.

## 2 How Does Mendix Enable Model-Driven Development?

Model-driven development (MDD) has emerged as one of the leading approaches for enabling rapid application development. Because it uses visual models for defining application logic, process flows, and user interfaces, MDD empowers both developers and business users to rapidly build applications without the need for labor-intensive low-level coding. Consequently, it is significantly faster than traditional programming languages like C# and Java. In order to involve business users in the design and development of applications to a level where they can actively participate, we have fully adopted a visual MDD approach. MDD provides an excellent communication mechanism to align business and IT stakeholders, thereby ensuring greater quality and more successful outcomes.

## 3 How Does Mendix Prioritize Model Interpretation Over Code Generation?

The Mendix Runtime directly executes models, which means that the model is literally the application, not an intermediary. As opposed to approaches where a visually-modeled design would actually generate code (for example, Java or .NET), Mendix's model interpretation approach has a number of [unique characteristics and advantages](architecture-runtime#model-execution).

For more information, see the [Model Driven Development: Code Generation or Model Interpretation?](http://www.theenterprisearchitect.eu/blog/2010/06/28/model-driven-development-code-generation-or-model-interpretation/) blog post.

## 4 How Does Mendix Utilize Microservices, Containers & Deployment Standardization?

Microservices offer a software architecture that is best aligned with small Agile DevOps teams. This architecture is best capable of benefitting from the qualities of containers. Containers enable you to deploy your application in any cloud, in an automated fashion, and to ensure quality, repeatability, and speed. Deployment standardization enables a small DevOps team to handle anything related to operations.

## 5 How Does Statelessness Work in Mendix? {#statelessness}

Modern web-scale apps leverage stateless architectures as a means for supporting greater scalability and resilience. Statelessness supports horizontal scalability by allowing additional resources to be easily added as required to support increasing user or processing loads. Every user request and every transaction can be handled by any one of the runtime instances available. If your performance needs require you to handle more transactions or user requests, you can simply add another runtime instance to handle part of the processing. As the state is managed outside the runtime, resiliency can also be increased by more readily failing over from one runtime instance to another.

## 6 What Openness & Extensibility Does Mendix Offer?

Openness is a fundamental architectural requirement of any modern app platform, meaning that the platform should allow apps to readily coexist and leverage other apps and app services. This also means that the platform itself should fit within your IT landscape and support your core development processes and standards.

Enterprise functional and non-functional requirements are extremely hard to deal with from a purely model-driven development approach, because of the leaky abstractions that occur. Extensibility is essential for coping with all the practical functional and non-functional requirements of enterprise applications. Where model interpretation does not allow you to change the generated code, extensibility is a must.

For more details on this important topic, see [Openness & Extensibility](openness-extensibility).

## 7 How Does Mendix Follow Twelve-Factor App Principles?

While not strictly a set of architectural principles, the [Twelve-Factor App](https://12factor.net/) methodology (originally developed by the Heroku team) is a set of best practices, the purpose of which is to help you avoid a set of common systemic mistakes involved in the building of cloud-native apps.

For details on how this methodology is applied to Mendix, see [How Does the Mendix Runtime Support Twelve-Factor Cloud-Native Apps?](architecture-12-factor).
