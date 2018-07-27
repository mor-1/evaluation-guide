---
title: "Integration Overview"
parent: "integration"
menu_order: 10
tags: [""]
---

## How Can I Integrate with Mendix? {#integrate-with}

Integration has always been an important part of application development, but the topic has not received much attention in the marketplace for developing apps until now. The maturation in cloud-native and as-a-service software options has increased the need for APIs that connect disparate applications together to exchange data, trigger events, and orchestrate workflow processes.

At Mendix, we have made investments in the platform to make it easy to connect applications and services with each other in a variety of ways, most recently with REST. And while REST has become a standard for building APIs and web-services for applications to talk, it’s important to recognize that other web service protocols, standardized frameworks, and APIs remain valid options, depending on the problem you are trying to solve.

Mendix offers you an extensive array of tools to handle integrations:

{{% todo %}}[**Hyperlink each term to individual questions/sections**]{{% /todo %}}

* **Message definitions** – specify what messages you exchange with external systems
  * These can be based on XML schemas, JSON snippets, or entities defined in your domain models
* **Mappings** – use visual specifications of how to translate external messages to and from entities in your Mendix applications
* **Web services** – publish microflows as web service operations and call external web services from your microflows
* **REST services** – publish microflows and entities as REST resources and operations and call external REST APIs from your microflows
* **OData** – publish data in your application in a standardized REST format for easy use in business analytics tooling
* **Connectors** – implement purpose-built connector modules that provide easy-to-use microflow activities integrated with third-party services
  * Examples include SAP, Kafka, Redis, and third-party services like Slack, Twitter, and Salesforce
* **Connector Kit** – the Mendix Connector Kit enables adding any custom integration using Java to Mendix in an easy, generic, and reusable way
* **Database integration** – 

{{% todo %}}[Need content for last point]{{% /todo %}}
