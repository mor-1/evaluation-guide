---
title: "Architecture Principles"
parent: "architecture-intro"
menu_order: 10
tags: [""]
---

## 1 What are the key architectural principles behind the Mendix platform?

### 1.1 Model-Driven Development

Model-driven development (MDD) has emerged as one of the leading approaches for enabling rapid application development. Because it uses visual models for defining application logic, process flows, and user interfaces, MDD empowers both developers and business users to rapidly build applications without the need for labor-intensive low-level coding. Consequently, it’s significantly faster than traditional programming languages like C# and Java. In order to involve business users in the design and development of applications to a level where they can actively participate, we have fully adopted a visual MDD approach. MDD provides an excellent communication mechanism to align business and IT stakeholders, thereby ensuring greater quality and more successful outcomes.

### 1.2 Model interpretation over code generation

The Mendix runtime directly executes models, meaning that the model literally is the application—not an intermediary. As opposed to approaches where a visually-modeled design would actually generate code (for example, Java or .Net), our model interpretation approach has a number of [unique characteristics and advantages](architecture-runtime#model-execution).

### 1.3 Microservices, Containers and Deployment Standardization

Microservices offer a software architecture that is best aligned with small Agile DevOps teams. This architecture is best capable of benefitting from the qualities of containers. Containers enable you to deploy your application in any cloud, in an automated fashion, and to ensure quality, repeatability, and speed. Deployment standardization enables a small DevOps team to handle anything related to operations.

### 1.4 Statelessness

Modern Web-scale apps leverage stateless architectures as a means for supporting greater scalability and resilience. Statelessness supports horizontal scalability by allowing additional resources to be easily added as required to support increasing user or processing loads. Every user request and every transaction can be handled by any one of the runtime instances available. If your performance needs require you to handle more transactions or user requests, you can simply add another runtime instance to handle part of the processing. As state is managed outside the runtime, resiliency can also be increased by more readily failing over from one run-time instance to another.

### 1.5 Openness

Openness is a fundamental architectural requirement of any modern app platform, allowing apps to readily coexist and leverage other apps and app services, as well as to allow the platform itself to fit within your IT landscape and support your core development processes and standards.

### 1.6 Twelve-Factor App Principles

While not strictly a set of architectural principles, the [Twelve-Factor App](https://12factor.net/) methodology (originally developed by the Heroku team) is a set of best practices whose purpose is to avoid a set of common systemic mistakes involved in building cloud-native apps. How this applies to Mendix is described in [How does the Mendix Runtime support Twelve-Factor Cloud-Native Apps](architecture-12-factor)
