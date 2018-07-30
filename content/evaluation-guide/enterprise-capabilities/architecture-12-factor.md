---
title: "Twelve-Factor Architecture"
parent: "architecture-intro"
menu_order: 50
bg: "architecture"
tags: [""]
---

## 1 How does the Mendix Runtime Support Twelve-Factor Cloud-Native Apps {#12-factor}

While not strictly a set of architectural principles, the [Twelve-Factor App](https://12factor.net/) methodology is a set of best practices for cloud-native applications. The sections below describe how Mendix conforms to these requirements.

## 2 Codebase

By default, the source code for every app you create with Mendix is stored in the Mendix Team Server code repository. When you deploy an application, a package is created based on your model as stored in the Team Server. This package is then deployed to your different environments like test, acceptance, and production.

## 3 Dependencies

All the dependencies (like modules and libraries) used by your app's modules are part of the app model. This means that no implicit dependencies to tools exist in your environment. This ensures reliable deployments.

## 4 Configuration

Configuration needs are defined in your application model through constants. These values can be specified at deployment time in your environment, or through APIs called in your CICD pipeline. The actual configuration values are never part of your model, which means that the same deployment package can be deployed in any test, acceptance, or production environment without changing the app model.

## 5 Backing Services

All external requirements (like the database to store your application data) and services to be called from your application can be configured at deployment time. Like the previous requirements, this ensures that the same tested deployment package can be used in any situation, with any backing service, without model changes.

## 6 Build, Release, Run

If it was possible to change code in a production environment, the scaling of your application would become unpredictable and unreliable. It would also make debugging and problem-solving harder. To avoid this problem, the Mendix Platform clearly separates the build and run stages.

In the Mendix Developer Portal, you first have to build a package from your model, which can then be deployed to your environments. If you want to make a code change in production, you have to modify your model then build a new package. Mendix also provides APIs to build and deploy your applications, so you can incorporate this approach in your custom CICD pipeline.

## 7 Processes

The Mendix Runtime is designed to be completely stateless. It shares data through a database, ensuring easy scalability and resilience.

## 8 Port Binding

To ease the scaling and running of the same app in different environments, the app should be self-contained (meaning, where it listens for client requests should be configurable). Mendix apps can be configured in this way, enabling the underlying PaaS (for example, Cloud Foundry) to easily scale the number of containers hosting your app.

## 9 Concurrency

Mendix uses a combination of Java threads and processes to scale to the demand of your end-users. The Twelve-Factor Methodology stresses the need to scale via processes; otherwise, you will be limited in your scaling requirements to the maximum of what one Java virtual machine (JVM) can support (vertical scaling). By also supporting process scaling, extra resources can always easily be added (horizontal scaling).

## 10 Disposability

Mendix Runtime instances can be stopped and started as required. In a multi-instance environment, users will usually not notice if one runtime instance is restarted. The benefit of this is that horizontal scalability is simpler and faster, and deployment of new versions or new configuration becomes faster.

## 11 Development/Production Parity

To guarantee quality, apps deployed in testing environments should behave similarly in production environments. In the Mendix Cloud, all environments are provisioned in the same way. The only differences are configuration, data, and your application. Data can be moved between environments through backup and restore to ensure testing with representative data.

## 12 Logs

Mendix Cloud uses the Cloud Foundry firehose to collect all the log events from all your applications. This can be viewed and filtered in the Mendix Cloud Portal.

## 13 Admin Processes

To avoid synchronization issues, the Twelve-Factor Methodology advises shipping admin code with application code. Mendix enforces this practice, so the only code that will run in your app environment is code that is part of your app. This means that you need to make admin code part of the model. Users often implement this with admin logic in an admin page by either implementing a microflow to run after the app has started or creating APIs to trigger admin actions.
