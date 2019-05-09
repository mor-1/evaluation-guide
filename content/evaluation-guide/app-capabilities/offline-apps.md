---
title: "Offline Apps"
seo_title: "Building Offline Native Applications in Mendix"
seo_description: "Learn how Mendix offline apps work, how they handle data, and how data conflicts are reconciled."
parent: "ux-multi-channel-apps"
menu_order: 50
bg: "ux"
tags: ["mobile app", "offline", "offline-first"]
---

## 1 How Can I Build an Offline-first Mobile App? {#build-offline}

Mendix offers all the functionality to build rich offline-first mobile apps that always work, regardless of the network connectivity status. An offline-first approach is adopted in which data is stored and handled locally on the device, so that the app always works smoothly and users can perform their tasks. No connection is needed, except for synchronizing and updating. An offline-first approach increases the reliability and performance of the apps.

Your apps remain fully supported via consistency checks and data synchronization while you maintain the ability to fine-tune the apps and synchronization process.

## 2 How Do Mendix Offline-first Apps Work?

Mendix makes it easy to add offline capabilities to an existing model, allowing for the reuse of UI components, logic, and domain models. Offline capabilities are exposed as a separate channel that can be enabled by adding an offline navigation profile. For more information, see the section [How Does Mendix Support Multi-Channel Applications?](front-end#support-multi-channel) in *Front-End*. Note that Native mobile apps are always offline-first.

<video controls  src="attachments/create-offline-profile.mp4">VIDEO</video>

Mendix Studio Pro automatically analyzes the model of the app to determine what needs to be synchronized with the device, which relieves the developer from thinking about this. The user interface components, styling, logic, and data are all stored on the device so that the app can run without a connection. By adding rules to the model, the developer can control and specify which data needs to be synchronized to the device.

When the user starts the application and there is a connection, the app checks if there is a newer version of the application model deployed. If so, the app is automatically updated to the device and the data is synchronized.

Data is stored in a local SQLite database, which is only accessible by the app. All the (unsynchronized) data is persisted, even if the app is closed, the device is rebooted, or the power is lost. There are no size limitations of the database (other than the device storage). However, in practice, it is good to think about what data needs to be available on the device, which can be controlled (for details, see [What Data Is Stored on the Device](#what-data-is-stored-on-the-device) below).

The synchronization of data can be triggered automatically on event (for example when the device gets a connection), via logic, or manually via buttons, gestures, or when the saving of data. If an error occurs while synchronizing, the app tries to sync the data again later. For more information about offline mobile apps, see [Offline First](https://docs.mendix.com/refguide/offline-first) in the *Mendix Studio Pro Guide*.

## 3 What Data Is Stored on the Device? {#what-data-is-stored-on-the-device}

Mendix knows what data should be available offline based on automatic analysis of the application model (while respecting access control settings). The result is that the end-user only sees the data they are assigned to and allowed to access. The data to which the user is assigned is synced and can be filtered and controlled on a fine-grained level by applying xpaths constraints or assigning it to a specific user in a specific context via microflow logic. All the data and resources are automatically removed when the user logs out.

{{% image_container %}}
![Example for configuring the data that is synchronized](attachments/customsync2.png)
{{% /image_container %}}

## 4 How Are Data Conflicts Handled?

Mendix supports the standard [conflict resolution](https://appstore.home.mendix.com/link/app/66614/) patterns **first wins** and **last wins** as well as the possibility to trigger a human workflow to handle conflicts. These mechanisms can easily be extended by visually modelling the resolution with microflows.

For more information about offline first apps, see the [documentation](https://docs.mendix.com/refguide/offline-first).

**COMMENT: videos below are outdates, and should be removed in my opinion **
This video shows you how to edit the automatic sync feature:

<video controls src="attachments/Eval_Mobile_OfflineSaveSync-1.mp4">VIDEO</video>

And this video shows you how to configure the first-wins and last-wins actions:

<video controls src="attachments/Eval_Mobile_SyncConflictApplyFirst.mp4">VIDEO</video>