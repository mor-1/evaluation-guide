---
title: "Vendor Lock-In"
parent: "openness-extensibility"
menu_order: 10
tags: [""]
---

{{% todo %}}[**Roald to look at headings with Andrej**]{{% /todo %}}

## 1 How Can I Avoid Being Locked In to the Mendix Platform? {#avoid-lockin}

At Mendix, we have put a lot of effort into ensuring you are not locked into the platform.

The key here is the model of your application that you create in the Mendix Modeler.  You own all of your app models, and you are free to do with them as you wish. Mendix helps you in the ways described below.

### 1.1 Opening Your App Models

You can always open your app models with the free edition of the Mendix Modeler. This means that in case you end your subscription with Mendix, you can still open your models. Considering that you will most likely want to move to another model-driven or low-code platform, having your old app models available even just as documentation will be very valuable.

### 1.2 Accessing Your App Models {#accessing}

By using the [Mendix SDK](https://developers.mendix.com/sdk/), you can programmatically access your models. Of course, the SDK comes with [full documentation](https://apidocs.mendix.com/modelsdk/latest/index.html) of the models used to define your app. This enables you to automate steps like migration to alternative (model-driven) platforms as well as to 3GL languages like Java. By using the SDK, you can generate Java classes or SQL DDL statements from your domain models or Java code from your microflows. This means you can convert your models to any technology stack you wish.

![](attachments/platform-openness-web-chart-1.png)

## 2 Are There Other Project Resources I Can Reuse?

Next to the application model, Mendix app projects consist of a number of other resources. These resources use technologies like HTML5, CSS, Sass, Bootstrap, and Java. The main goal of using these resources is to allow you to extend the platform as required, (for example, by implementing custom microflow activities). Because these resources are based on commonly accepted modern technologies, they can be used by most developers. For example, they can be used as documentation when moving to another platform or as code to be included in a new solution.

## 3 What About the Data?

The data is the most valuable part of your application projects. You can always export your data, and there are different ways to do this. In the Mendix Cloud, you can download a backup of all the data in your app, including all the files that form the app. This means you can store the files somewhere else, or you can create a new database with your data. You can then convert the data to other databases or file formats.

To summarize, you own both your application models and your data, and you can always use these as you please. Mendix provides you with all the tooling and documentation you need.
