---
title: "Integration"
category: "App Capabilities"
notoc: true
menu_order: 30
bg: "integration"
tags: [""]
---

Mendix supports connections to other apps and services through industry-standard interfaces and protocols such as REST, SOAP and OData, offering many solutions to ensure that new applications can both consume and expose data and services in heterogeneous environments. "

{{% todo %}}[**Add video when available**]{{% /todo %}}

## How Can I Integrate with Mendix?

Connecting applications and services is simple with Mendix; there are several ways in which we enable you to integrate. Ranging from consuming and exposing REST APIs, SOAP Web Services and OData, to Connectors that use external SDKs to extend the native toolbox of the Mendix Platform with integrations such as Kafka event streams, Redis, MQTT, Slack, Twitter and Salesforce. Many connectors already exist in the Mendix App Store and can be downloaded for immediate use inside your applications. Alternatively, you can build your own with our Connector Kit. 

For details, see [How Can I Integrate with Mendix?](integration-overview#integrate-with)

## How Does Mendix Support Data Mapping?

Being able to easily map external data formats to the entities used in your application is an important aspect of integration. Mendix helps you achieve this with Data Mapper. Data Mapper will automatically map the incoming message structures, such as JSON, WSDL or XML… to create an internal map towards transient objects inside your data model. Once the message structure is mapped incoming data can then be transformed, if required, to be used inside your application models.

For details, see [How Does Mendix Support Data Mapping?](data-mappings#data-mapping)

## How Does Mendix Support REST & Web Services?

Mendix makes exposing and consuming REST and Web Services simple. To consume, map the incoming message responses from the API or service request using JSON or a WSDL for example. Once mapped, microflows actions allow you to call the desired service from your logic and process the response directly into your app.  Exposing your data and logic is also very simple, using specific microflow actions you can publish discoverable endpoints for your services or expose an APIs via a swagger definition through microflows.

For details, see [How Does Mendix Support REST & Web Services?](consuming-services#support-rest-web)

## Read More

* [Integration Overview](integration-overview)
* [Data Mappings](data-mappings)
* [Service Consumption](consuming-services)
* [Service Exposure](service-exposure)
* [External Data](importing-data)
