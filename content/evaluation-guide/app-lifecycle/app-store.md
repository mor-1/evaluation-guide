---
title: "App Store"
parent: "developing-in-mendix"
menu_order: 70
bg: "developing"
tags: ["app store", "reusable component", "widget", "module"]
---

## 1 What Are the Platform Capabilities of the Mendix App Store?

The Mendix Platform is integrated with the [Mendix App Store](https://appstore.home.mendix.com/index3.html), which is full of items built both by Mendix and the Mendix community. There is a public marketplace for apps and application components, and a private part where companies can internally share apps and application components.

The Mendix App Store is fully integrated in both the Web and Desktop Modelers. Users can both directly search for and implement reusable components in their applications.

For more information, see [App Store Overview](https://docs.mendix.com/community/app-store/app-store-overview) in the Mendix documentation.

{{% image_container width="600" %}}

![](attachments/app-store.png)

{{% /image_container %}}

## 2 What Types of Reusable Components Are Available in the Mendix App Store?

For developers, the Mendix App Store offers a rich repository of reusable components that can significantly accelerate development productivity. These components are shared in the Mendix community as open-source items or commercial products.

The Mendix App Store is directly accessible from the Mendix Desktop Modeler, where app store components can be loaded into the project model with a single click. The components are presented in the categories described below.

### 2.1 Connectors {#connectors}

A connector is a Mendix App Store component that contains microflow activities that can directly be used in your app logic to connect to external systems. For example, the [IBM Watson Connector Suite](https://appstore.home.mendix.com/link/app/2860/) contains microflow activities to translate text to speech or to analyze an image, or the [SAP OData Connector](https://appstore.home.mendix.com/link/app/74525/) to connect to any SAP system.

{{% image_container width="500" %}}

![](attachments/appstore_connector_grid.png)

{{% /image_container %}}

### 2.2 Widgets

A Mendix widget is a part of the user interface in your Mendix app that enables functionality and interaction with the users of the app. Widgets are page elements that are used to display (visual) information on a page and to provide additional page interactions like swipe controls or form-based fields.

The Mendix Platform provides several dozens of widgets out of the box and additional ones from the Mendix App Store. A full overview of Mendix supported widgets is shown on the [Mendix Atlas UI site](https://atlas.mendix.com/p/widgets).

In addition to the widgets provided by Mendix, any Developer can build additional custom widgets and upload these to the Mendix App Store. A custom widget can alter the interface, data, and images of the app as well as the way the app works. For details on creating a custom widget, see the [Custom Widget Development How-to's](https://docs.mendix.com/howto/custom-widget-development/) in the Mendix documentation.

### 2.3 Modules

A module is a self-contained application component that can be reused in multiple applications. Modules can be downloaded from the Mendix App Store into a project as a local copy. By doing this, the module becomes part of the project scope and will be maintained through its lifecycle as part of the application project.

A module typically consists of a domain model, user interfaces, and microflows. Although technically identical, the following types of modules can be distinguished:

* Functional business modules (for example, [PostalCodeHousenumber](https://appstore.home.mendix.com/link/app/105751/) for discovering street addresses)
* Integration connectors (for example, the [Excel Importer](https://appstore.home.mendix.com/link/app/72/))
* Technical module (for example, [Audittrail](https://appstore.home.mendix.com/link/app/138/) for audit logging)

## 3 How Can I Share Private Reusable Components in My Company?

The Mendix App Store can also be used as a private enterprise app store so that project teams can discover the reusable components (like connectors, widgets, styling, and starter apps) that are accessible to them within their organization.

![](attachments/private-app-store.png)

The Mendix App Store supports the distribution of private company app store content. Any other user in your company can search for and use this private content from the Mendix App Store. Private content is always marked as "Private" so that it is clear what is publicly and privately available.
