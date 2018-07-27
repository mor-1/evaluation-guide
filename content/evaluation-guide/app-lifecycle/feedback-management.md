---
title: "Feedback Management"
parent: "requirements-intro"
menu_order: 40
bg: "agile"
tags: ["agile", "project management", "feedback", "dashboard", "traceability"]
---

## 1 How Does Mendix Support Feedback Management? {#feedback-management}

Collecting feedback from users and other stakeholders, prioritizing the feedback, and acting on crucial items is essential to the success of application delivery projects, both during development and after go-live. Mendix provides a [Mendix Feedback Widget](https://appstore.home.mendix.com/link/app/199/) that empowers the end-users of an app to submit feedback from the context of the app itself. Feedback items are submitted through the widget into the [Feedback](https://docs.mendix.com/developerportal/collaborate/feedback) section of the app project in the Developer Portal. This allows end-users to very easily provide valuable feedback to the development team on the app under development.

<video controls src="attachments/agile/OE_FeedbackAPI_CreateFeedback-1.mp4">Provide the development team with feedback from any app</video>

The development team can review and triage feedback items in the **Feedback** section of the Developer Portal. They can communicate with the submitter of the feedback item through messages on the Buzz thread under the feedback item.

{{% todo %}}Image of buzz under feedback item{{% /todo %}}

Once the team understands the feedback, they can decide on whether or not to accept it. This is an important step in the feedback management process, because it allows the team to also immediately close feedback items, e.g. to get rid of duplicate feedback items, or close feedback items that have already been resolved, without polluting the user story backlog with low-priority items.

Once the team decides to accept a feedback item, it becomes a user story in the backlog of their app project. The Product Owner can then prioritize these stories in the context of the broader product backlog. This enables the develoment team to focus on what's truly important and schedule these user stories as part of their sprint planning.

{{% image_container width="450" %}}
![](attachments/agile/accept-feedback.png)
{{% /image_container %}}

In this way, the Mendix Platform enables development teams to fully integrate user feedback into their natural development cycle. At the end of every sprint, when the active sprint is closed and the next sprint is opened, all the feedback items that were scheduled as user stories are closed, and status change notifications are sent to the respective submitters.

End-users can keep track of submitted feedback through the Developer Portal and post updates and replies to questions. As with all Buzz activity, email notifications are sent when someone replies to your post. Users can quickly open the Developer Portal from those emails, or just reply by email to post a response.

{{% todo %}}Screenshot of email notification example{{% /todo %}}

This functionality enables a very fast feedback loop between the development team, key end-users, and other stakeholders, in turn enabling quick improvement of the app under development.

## 2 How Can I Integrate My Existing User Feedback Tracking System with Mendix?

In some scenarios, you might already have an existing User Feedback Tracking system in place that you would like to use in your Mendix apps. Through the creation and use of [custom widgets](../enterprise-capabilities/extensibility#custom-widgets), you can integrate any client-side User Feedback Tracking system into your Mendix apps. For server-side integrations, Mendix' [integration](../app-capabilities/integration) capabilities can be used, or in the rare case that total flexibility is required, [custom java actions](../enterprise-capabilities/extensibility#connector-kit) can be created.
