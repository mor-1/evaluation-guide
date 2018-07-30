---
title: "Collaboration channels"
parent: "requirements-intro"
menu_order: 20
bg: "agile"
tags: ["agile", "collaboration", "requirements", "project management", "feedback", "dashboard", "traceability"]
---

## 1 How Does Mendix Enable Active Stakeholder Involvement in Requirements Management? {#stakeholder-involvement}

The Mendix Developer Portal is the starting point for the development of Mendix projects with Agile methodologies. Each app has its own central project space, where the development team and their stakeholders can collaborate. This project space provides [backlog management](requirements-management#requirements-management), sprint planning and [user feedback management](feedback-management#feedback-management), development-oriented [DevOps features](devops-overview), and a central social channel, which is the [Buzz](https://docs.mendix.com/developerportal/).

Once development is underway, it is crucial to engage stakeholders in the development process. The Mendix Platform provides various channels of engagement for different stakeholders.

### 1.1 Involvement via the Mendix Developer Portal

The [Mendix Developer Portal](https://docs.mendix.com/developerportal/) is the central hub for project management and collaboration. This is usually the place where Product Managers, Product Owners, and similar roles spend their time specifying user stories, reviewing feedback, prioritizing the backlog, and providing their input to the development team through the Buzz.

### 1.2 Involvement via the IDE

As developer are usually found working with the [Desktop Modeler](app-development#desktop-modeler) or the [Web Modeler](app-development#web-modeler), user stories from the active sprint and Buzz are available in the Modelers as well.

### 1.3 Involvement via the Mendix Mobile App

The [Mendix mobile app](https://docs.mendix.com/refguide/getting-the-mendix-app) enables development teams to closely collaborate with stakeholders on app development in general and mobile app development in particular.

The Mendix mobile app enables developers to [preview and test their app](../app-capabilities/mobile-apps#mxapp-preview) on their device. From there, they can also [share the app](../app-capabilities/mobile-apps#mxapp-share) with other developers, key end-users, and stakeholders, which can in turn provide feedback through the Feedback Widget. End-users can preview apps under development with the Mendix mobile app  as well as follow the Buzz.

Anyone collaborating on app development with Mendix—whether you are a developer, product manager, key end-user, or another stakeholder—can easily take part in the conversation around the development of the app at any time with the Buzz functionality in the Mendix mobile app.

![](attachments/agile/buzz-mobile.png)

{{% todo %}}[**Add  phone wrapper**]{{% /todo %}}

### 1.4 Involvement via Email Notifications

All the users involved in a Mendix application project receive relevant and timely email notifications for Buzz and other updates of interest. This includes responses to submitted feedback items and status changes such as feedback items that are completed.

{{% todo %}}[**Screenshot of email notificaiton for buzz update**]{{% /todo %}}

### 1.5 The Central Buzz

All of the above channels are bundled together through the central Buzz in the Developer Portal. This is where you can post messages from the context of your project activity. For example, user stories and feedback items each have their own Buzz thread. All the updates posted are visible in the Developer Portal and the Mendix mobile app in a central Buzz stream.

## 2 How Do I Invite Users & Other Stakeholders to Collaborate With the Development Team?

New team members can be easily invited to the (extended) development team. Users are authorized for this action based on their user role as part of the role-based access control model.

* Invites
* Email notification
* Signup & land on app buzz (i.e. in context)

<video controls src="attachments/agile/DO_InviteUserToProject-1.mp4">Inviting a user to your app team</video>

## 3 How Can I Manage the Access of Different Users to My App Project Resources?

App development project resources are centrally managed from the Mendix Developer Portal with an advanced role-based access control model. Users can have different roles, which can be configured to allow users different levels of access to project resources. For example, some users might be allowed to make changes to the product backlog, while others might get access to the app model in the Team Server repository.

By default, Mendix provides a set of sensible user roles, such as Scrum Master, Business Engineer, Product Owner, Application Operator, and End User. These roles can be modified to suit your particular organization's access management requirements.

For more information, see [Roles Within the Company and Apps](https://docs.mendix.com/developerportal/general/roles) in the Mendix documentation.

{{% todo %}}[**Content notes to delete **]{{% /todo %}}

* Buzz (in the Portal)
  * Communication, textual & visual
  * Polls
* Mendix app
* Web Modeler
* Desktop Modeler
* Notifications
  * Buzz updates → close micro feedback loop
  * Sprint completion → close release feedback loop
