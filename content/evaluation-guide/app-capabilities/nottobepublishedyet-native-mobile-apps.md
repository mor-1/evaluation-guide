---
title: "NOT TO BE PUBLISHED YET - Native Mobile Apps"
parent: 
menu_order: 50
tags: [""]
---

{{% todo %}}**[TO DO: when going public, merge with Hybrid mobile apps, combine offline?] **{{% /todo %}}

{{% todo %}}**[Note from Adam: Danny, I've removed all parts that are duplicated from 5.4. We need to decide where to put all of this final content.]**{{% /todo %}}

{{% todo %}}**[Note from Adam: Danny, can you think of a screenshot/video/diagram we can insert here? I have tried to think of something but no idea]**{{% /todo %}}

## 1 How Do Mendix Native Mobile Apps Work?

For building true native mobile apps that offer excellent user experience and run both on Android and iOS, Mendix leverages the popular [ReactNative](https://facebook.github.io/react-native/) framework. 

## 2 How Can I Leverage Device Capabilities in My Native Mobile Apps?

Native Mendix mobile apps leverage various native capabilities for navigations (like gestures and animations), and more capabilities can be used via nanoflow actions that access the device capabilities. These actions can be added via drag-and-drop to your mobile apps and configured in the Modeler. 

## 3 How Can I Extend My Native Mobile App? {#extend-native-mobile}

To extend your native mobile app, you can configure nanoflows with custom activities written in JavaScript. These custom activities have access to the [Mendix Client API](https://apidocs.mendix.com/7/client/) and can access device capabilities.

It is also possible to define additional ReactNative modules in order to access other device capabilities. If a third-party does not provide a ReactNative module, it is possible to [build your own module](https://facebook.github.io/react-native/docs/native-modules-ios.html) and access that from a custom nanoflow action.

{{% todo %}}**[TO DO: mention widgets?]**{{% /todo %}}

## 4 How Can I Build an Offline Native Mobile App?

All Mendix native mobile apps are offline-first apps. For details about this, see the section [How Can I Build an Offline Mobile App?](mobile-apps#build-offline) of *Mobile Apps*.

## 5 How Can I Integrate My Native Mobile App with EMM/MDM/MAM Solutions?

Authentication is part of the model, making it easy to integrate other products. Mendix native mobile apps are based on ReactNative, and because this framework is very popular, there are many products that support it that can be integrated easily. If there is nothing supported out of the box, it is often possible to build a module and integrate that, as discussed in section [3 How Can I Extend My Native Mobile App?](#extend-native-mobile) above. By using a product like [MobileIron](https://www.mobileiron.com/) or [AppConfig](https://www.appconfig.org/), a service is enabled that merges the security solution with the binary, so the end-user is relieved of having to do that.