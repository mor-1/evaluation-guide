---
title: "UX & Multi-Channel Apps"
category: "App Capabilities"
menu_order: 10
notoc: true
bg: "ux"
tags: [""]
---

The Mendix Platform offers a completely integrated visual development environment for building multi-channel apps. Developers can rapidly build, visualize, and deploy multi-channel apps using the drag-and-drop interfaces of the Mendix Web and Desktop Modelers.

Users can build rich front-ends for multi-channel apps (for both web and mobile apps) from a single model that supports reuse and a consistent look and feel. In addition, Mendix’s [Atlas UI](https://atlas.mendix.com/) framework enables users to create beautiful interfaces quickly via a wealth of Mendix UX resources.

Finally, in addition to many standard components, Mendix offers several options for extending the platform via the Mendix front-end and customizing the look and feel of your applications.

{{% todo %}}[**Add video when available**]{{% /todo %}}

## How Does Mendix Support Multi-Channel Applications?

Mendix provides a single development paradigm for building multi-channel apps. You can build simple responsive user experiences, complete offline mobile apps with client-side logic and data synchronization, and everything in between.

Both business and IT developers can create multi-channel apps through Mendix's visual drag-and-drop development environment using a single model base and skill set to serve multiple use cases, including mobile backend as a service (mBaaS).  Consolidating skills, reducing complexity, and accelerating business value with Mendix will help you to meet the demands of today’s highly mobile workforce.

For more information, see [How Does Mendix Support Multi-Channel Applications?](front-end#support-multi-channel) in *Front-End*.

## How Do Mendix Mobile Apps Work?

With Mendix, users can develop, deploy, test, and manage mobile apps from a single integrated visual development environment that uses the popular [Cordova](https://cordova.apache.org/) framework to provide access to native mobile device features. Mobile applications can operate in an online or offline mode, storing data locally and synchronizing with the Mendix server, which provides a complete mBaaS.

The Mendix mBaaS provides over-the-air updates that remove the need to redeploy applications to the app stores in order to deploy new or updated functionality.

For details, see the [How Do Mendix Mobile Apps Work?](mobile-apps#mobile-apps-work) section.

## How Can I Build an Offline Mobile App?

The most important point to make here is that you build offline apps using the same tools as online and responsive apps, which helps to consolidate your skills and knowledge of reuse across the deployment landscape. By simply specifying an offline profile inside your app model and setting the data source of your required offline pages to be offline, the Mendix Platform will automatically manage both the consistency and deployment of those model artifacts that are required to be synchronized to the device to run locally.

In addition, Mendix creates and synchronizes a local SQL database to persist data between the client and server automatically, requiring no additional skills to manage data movement when on- or offline.

The default Mendix synchronization patterns can be overwritten by custom models, giving the developer full control of the synchronization in case the default patterns do not suffice. 

For details, go to [How Can I Build an Offline Mobile App?](offline-apps#build-offline).

## Read More

* [Front-End](front-end)
* [UI Design](ui-design)
* [Mobile Apps](mobile-apps)
* [Web Apps](web-apps)
* [Offline Apps](offline-apps)
