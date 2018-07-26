---
title: "Openness (API & SDK)"
parent: "openness-extensibility"
menu_order: 20
tags: [""]
---

## 1 Where Can I Use the Openness and Extensibility Provided by the Mendix Platform? {#where}

There are many use cases that benefit from the openness and extensibility of the Mendix Platform. The next sections present examples grouped into three main categories.

### 1.1 Increasing Productivity & Quality via Automation

These are some examples of how you can increase productivity and quality using the openness and extensibility of the Mendix Platform:

* Using the [Mendix SDK](https://developers.mendix.com/sdk/), you can make bulk changes to one or more application models (for example, to change the icons in a number of app projects).
* The Mendix SDK also enables doing static analysis of an application model. One example of this is found in the [Mendix Application Quality Monitor](https://www.mendix.com/security-and-quality/#quality) (AQM). This tools measures the quality of your app models and rates them compared to other models for a number of aspects identified by the ISO standard for maintainability.
* You can also use the Mendix SDK to generate documentation from your app models, ensuring that you always have the correct documentation that is up to date. For more details, see the section [Accessing Your App Models](vendor-lockin) in *Vendor Lock-In*.
* The [SAP OData Connector](https://appstore.home.mendix.com/link/app/74525/) provided by Mendix use the SDK to automatically generate the parts of your application needed to build on top of SAP services. For every data item defined in the SAP service (as specified using OData metadata), the connector will generate entities in a domain model in your Mendix application. This saves you a lot of time, and also ensures that the entities are a 100% correct.
* The [Build API](https://docs.mendix.com/apidocs-mxsdk/apidocs/build-api) and [Deploy API](https://docs.mendix.com/apidocs-mxsdk/apidocs/deploy-api) for the Mendix Platform can be used to define custom continuous integration and continuous deployment (CI/CD) automation. This will increase productivity and quality in case of complex deployment landscapes, as you can include validation and test steps.

### 1.2 Extending the Platform with New Functionality

These are some examples of how you can extend the Mendix Platform with new functionality:

* The [Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/) enables creating custom integration and connectors. You can create a set of visual reusable microflow activities to handle integration with all sorts of services and existing applications. The Mendix App Store contains connectors for services like [Slack](https://appstore.home.mendix.com/link/app/2978/) and [Twitter](https://appstore.home.mendix.com/link/app/2922/). Using these services becomes as simple as dragging a microflow activity from your Modeler toolbox into a microflow.
* Since connectors are written in Java, they can use any Java library available. That means you can seamlessly integrate existing scientific libraries into your Mendix application, for example. And via the [Mendix Runtime API](https://docs.mendix.com/refguide/runtime), a connector can utilize all the functionality in your application model, including entities, data sets, microflows, pages, and configurations.
* The Mendix Runtime API is also used to provide integration for Mendix apps with existing identity management systems like Microsoft Active Directory. To see how this is done, check out the [SAML](https://appstore.home.mendix.com/link/app/1174/Mendix/SAML) module in the Mendix App Store.
* You can extend the way data is stored and retrieved in Mendix. Through the SQL API for example, it is possible to use database-specific functionality like indexes that can improve performance for specific situations. Integrations with alternative databases (for example, NoSQL databases) are also possible. For details, see the [Redis Connector](https://appstore.home.mendix.com/link/app/3087/Appronto/Redis-connector) and [Cassandra Connector](https://appstore.home.mendix.com/link/app/66289/TimeSeries/Cassandra-Connector) in the App Store.
* As a last example, the [Stories & Sprints API](https://docs.mendix.com/apidocs-mxsdk/apidocs/stories-api) enables you to create integrations with third-party bug-tracking and project management tools like Jira.

### 1.3 Modernizing by Moving Between Platforms

The openness and extensibility of the Mendix Platform also helps you migrate existing applications to Mendix and to migrate existing Mendix apps out of the platform.

The Model SDK can be used to take existing end-of-life applications (like Lotus Notes applications) and automatically generate the basis for a Mendix alternative. This can save significant time when re-platforming old software to Mendix.

If you no longer want to use Mendix for your application, you can use the Model SDK to access every part of your application model. This can be used to generate the application using a different technology or platform. For more information, see [Vendor Lock-In](vendor-lockin).

## 2 What Kind of APIs Does Mendix Expose? {#apis}

Mendix [APIs](https://docs.mendix.com/apidocs-mxsdk/apidocs/) are available on most levels and for most components of the Mendix Platform.

### 2.1 Runtime APIs

Each application built using the Mendix platform has powerful API options. Every element of the application model can be easily provided as part of the API through REST, OData, or SOAP services. You can use [Java to extend the runtime](https://apidocs.mendix.com/7/runtime/https://apidocs.mendix.com/7/runtime/), [JavaScript to provide custom Widgets](https://apidocs.mendix.com/7/client/), and SQL to extend the data storage.

### 2.2. Platform APIs 

The core platform functionality is accessible through APIs, which allows developers to access and integrate Mendix with other tools and applications (for example, to build and deploy APIs to support continuous integration). The platform provides APIs to create [application projects](https://docs.mendix.com/apidocs-mxsdk/apidocs/projects-api) as well as to manage [sprints, stories](https://docs.mendix.com/apidocs-mxsdk/apidocs/stories-api), and [user feedback](https://docs.mendix.com/apidocs-mxsdk/apidocs/feedback-api). You can also [build](https://docs.mendix.com/apidocs-mxsdk/apidocs/build-api) and [deploy](https://docs.mendix.com/apidocs-mxsdk/apidocs/deploy-api) your applications through APIs.

For managing users and security, you can use APIs to [manage user profiles](https://docs.mendix.com/apidocs-mxsdk/apidocs/profile-api), [invite users to your app](https://docs.mendix.com/apidocs-mxsdk/apidocs/invite-api), [manage user permissions](https://docs.mendix.com/apidocs-mxsdk/apidocs/permissions-api), and [hande SSO based on OpenID](https://docs.mendix.com/apidocs-mxsdk/apidocs/single-sign-on-api).

For more information on utilizing the Mendix Platform APIs, see this video:

{{% youtube MIUGYJnjrqw %}}

### 2.3 Model APIs

{{% todo %}}[**Needs more content, use that Googled page for Model SDK content – David & Andrej to discuss how to merge this content with Eval Guide; link to Model SDK page in ref guide and not to RN**]{{% /todo %}}

Application models can be read and manipulated using the [Model SDK](https://docs.mendix.com/releasenotes/model-sdk/index).

For more information on the Mendix Model SDK, see this video:

{{% youtube xGDPJt9PFeg %}}

