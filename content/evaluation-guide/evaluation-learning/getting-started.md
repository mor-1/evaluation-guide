---
title: "Getting Started"
parent: "evaluation"
menu_order: 10
tags: [""]
---

{{% todo %}}[**Restructure all tables: put ino text?**]{{% /todo %}}

## 1 How Can I Quickstart My App Development Project? {#starter-apps}

The Mendix Platform provides several starter apps as part of the onboarding process for [creating new applications](#can-i-build).

Starter apps are complete app frameworks that can be used as a starting point when building a new app on the Mendix Platform. Starter apps provide the scaffolding required to massively accelerate app development, as they include basic design patterns such as branding, design assets, page templates, navigation, and security models.

<video controls  src="attachments/OE_StarterApps.mp4">VIDEO</video>

You can also upload your own starter apps to your [Private App Store](https://docs.mendix.com/community/app-store/share-app-store-content#private-app-store) to make them available as starting points for your whole organization. This way, they can be used to create the root model of all new apps. In addition to basic design patterns, they will often include complete functional building blocks, such as user onboarding workflows, integration frameworks, document management, business rules, and processes.

## 2 What App Development Process Should I Follow with Mendix?

Mendix adopts a DevOps methodology with a high focus on business and IT collaboration, also known as a BizDevOps or DevOps 2.0. Mendix has optimized the BizDevOps approach for the low-code uses. This combination of changing the process to [BizDevOps ](#bizdevops) and using [low-code](#low-code) in this process results in a shorter feedback loop and [changes the roles](#changing-roles) within the software development process.

The sections below go deeper into this Mendix process.

### 2.1 The BizDevOps Process {#bizdevops}

This section explains the concept of the BizDevOps process and compares this with other software development processes.

#### 2.1.1 BizDevOps

BizDevOps encourages developers, operations staff, and business teams to work together so the organization can develop software more quickly, be more responsive to user demand, and ultimately maximize revenue. In this approach, not only does the business team set the requirements, they also work directly with the development team to set priorities for Agile software development sprints and backlogs. The development team becomes partners with the business side and works with business managers to solve problems and achieve business goals.

#### 2.1.2 DevOps

Compared to DevOps, the BizDevOps approach knocks down the silos between the DevOps teams (meaning, the development teams and operations staff) and the business management teams.

#### 2.1.3 Agile

Before the DevOps approach, the Agile methodology changed traditional Waterfall projects from a linear approach (in which feedback could only be given on full working applications) to an iterative, team-based approach to software development. This approach emphasizes the rapid delivery of an application in complete functional components per “time-boxed” phases called sprints. Each sprint has a defined duration with a running list of deliverables, planned at the start of the sprint. The Agile approach enables the business to review a minimal viable product (MVP), which is a product with just enough features to satisfy and enable the business to provide feedback for future development.

#### 2.1.4 Traditional App Development

In traditional app development projects, development teams, operation teams, and business management teams all operated in silos. The development team worked on the app (or better said, worked on the code before the introduction of low-code platforms), the operations team maintained the app after it was released, and the business management team reviewed the app, gave feedback, and set the requirements for new app development projects.

### 2.2 The Low-Code Addition to BizDevOps {#low-code}

Mendix has optimized the BizDevOps approach for the use of low-code, resulting in a feedback loop of less then a month on the app under development. This section will explain how this is done.

On a high level, the 1-month-feedback loop is ensured due to four factors of the Mendix Platform:

* **An integrated feedback mechanism** – The business can provide their feedback on the live app (minimal viable product) through a user friendly feedback mechanism, which is integrated with the Mendix Platform.
* **Team synergy **– The business analyst in the development team speaks the language of the business, can translate the requirements and feedback into user stories, and builds the functionality with the professional developer.
* **1 visual model** – With the Mendix low-code platform, the business analysts is enabled to visually build apps and work together with the professional developer's work on a common model, in a shared environment with ongoing real-time feedback. Any issues are quickly detected and resolved ensuring apps meet business and customer expectations with the first release.
* **1-click deployment** – The one-click deployment to the cloud ensures that the MVP can be released in minutes to enable the business to provide their feedback on the next iteration.

#### 2.2.1 The Evolution of the Feedback Loop

This section will explain how the combination of the evolving processes and the involvement of low-code decreased the feedback loop process from an average of 12 months in traditional Waterfall projects to less than 1 month in low-code BizDevOps projects.

* **12 months, Waterfall** – Due to the bigger teams, the linear approach, and the fact that feedback could only be given on full working applications, the feedback loop in Waterfall projects reached up to 12 months.
* **6 months, Agile** – The iterative process—with providing feedback on an MVP instead of on a full working application—resulted in a 6-month feedback loop for Agile software development projects.
* **3 months, low-code DevOps** –  Instead of working on a big team with specialties in silos, the smaller size of development teams and the use of one-click deployment enables the business to give feedback on the MVP of features instead of the MVP of full applications (as is done in Agile). This results in a 3-month feedback loop.

* **1 month, low-code BizDevOps** – The involvement in the development team of the business analyst who understands the business and the integrated feedback mechanism (which pulls the business directly into the development process) enables the business to directly share their ideas with a development team who understand the requirements without having to first build the feature. This results in a 1-month feedback loop in low-code BizDevOps projects, saving 2 months compared to low-code DevOps projects.

### 2.3 Changing Roles in Low-Code and BizDevOps {#changing-roles}

There are just three roles involved in a core development team in Mendix low-code BizDevOps projects. The other roles that were traditionally part of the development process moved to enablers of the project, and they are often more involved over the complete program/portfolio of apps that are under development.

#### 2.3.1 Three Roles in the Core Development Team

First of all, the business user (who Mendix calls the product owner) has a key role in the BizDevOps process, responsible for providing the input from the business in requirements or feedback on the app, and translating them into user stories.

Next, the business analyst (who talks to the business) works together with a more technical developer to run the entire application delivery lifecycle, including the operations. The involvement of the business analyst is key in interpreting the requirements and feedback from the business correctly. In other words, they speak the same language to verify the UX/UI (pages) and business rules (logic). The technical developer is key to helping build the app and deliver tangible results.

This small development team runs the entire application delivery lifecycle without the direct help of a database expert, Java programmer, UX/UI expert, test engineer, project manager, or operations staff. All these roles are still important, especially in an enterprise-scale delivery of multiple applications. However, they are part of a higher level Center of Excellence, which is often spread between multiple Mendix application development teams.

#### 2.3.2 Roles in Center of Excellence (CoE)

The roles in the Center of Excellence can be seen as enablers of the core development team, delivering the specific knowledge needed to align the development of multiple apps from a performance, UX/UI, integration, architecture, or process perspective.

{{% todo %}}[**Note from Leon to Roald, please validate section 4 - this was a pretty complex part and the messaging on the slides is making it even more complex ;)**]{{% /todo %}}

![](attachments/Mendix_RAD_process.png)

## 3 Where Do I Start with the Mendix Platform? {#where-do-i-start}

Mendix's rapidly growing community consists of a wide range of people, from citizen developers and business analysts who can build Mendix apps without any coding experience, to hardcore developers who build all kinds of apps and extend the Mendix Platform with custom code.

In order to onboard this variety of users, Mendix provides a [guided product introduction tour](#tailored-guidance) based on the user profile and preferences. Next to that, Mendix users can use two Mendix Platform IDEs (the [Web Modeler](../app-lifecycle/app-development#web-modeler) and [Desktop Modeler](../app-lifecycle/app-development#desktop-modeler)) as well as [external IDE's](../enterprise-capabilities/extensibility#external-ides) that integrate with Mendix. The Web Modeler can be used as a no-code development IDE for citizen developers. In the Desktop Modeler, you can build complex integrations and extend your app with custom code and more advanced features. This low-code development IDE enables everyone from business users to experienced professional developers to build advanced apps.

The [free online training materials](https://gettingstarted.mendixcloud.com/link/home) that Mendix provides is built in a modular fashion. This means that you can skip modules depending on your knowledge, or only complete the knowledge checks to see if you need more information about a specific topic.

In addition to Mendix being free to try and evaluate, the Mendix Community Edition gives all users unlimited access to the platform and community environments. see the section [Can I Evaluate Mendix Before I Buy?](#evaluate-before) for more details, and then check out section [5.3 How Do I Create an App?](../app-capabilities/web-apps) when you are ready to create your first app with Mendix.

### 3.1 How Does Mendix Onboard New Users? {#tailored-guidance}

Visual development is fast and easy to understand for all type of users, which means that Mendix onboards users with different knowledge levels and goals on the platform. During the signup, users have the option to share their preferences and goals for using the platform. Based on that information, Mendix tailors the guided product introduction tour to their preferences while providing other help methods, links to our online [Mendix Academy](https://gettingstarted.mendixcloud.com/link/path) material, supplementary content, and suggestions for your next steps. This guidance helps users to understand and navigate the extensive and powerful Mendix Platform.

<video controls  src="attachments/guidance.mp4">VIDEO</video>

### 3.2 Can I Evaluate Mendix Before I Buy? {#evaluate-before}

No problem! Anyone can [sign up](https://signup.mendix.com/link/signup/?source=techevaluationguide) on the Mendix Platform. This will create a Mendix account for you, and you will have access to the Mendix Community Edition. The Community Edition is free, meaning no credit card is required, and there are no setup fees.

#### 3.2.1 What Does the Community Edition Offer?

The Mendix Community Edition includes everything you need to design, build, and deploy demos, prototypes, or small applications. All the features in the Mendix IDEs are available without restriction. This edition includes a deployment environment for each application to the Mendix Cloud for up to 10 internal users with no charge.

The Community Edition is designed to provide developers and business users with a rapid cloud deployment option for prototyping and testing new applications, without having to provision a full cloud node.

##### 3.2.1.1 When Should I Upgrade from the Free Edition to a Paid Edition?

The Community Edition is designed for prototyping and testing new applications, and it is not meant as a professional testing or production environment. The cloud environment of the Community Edition is called a Sandbox environment, where you can test the full capabilities of the platform. Due the restrictions on limited users, the lower CPU, and the fact that the app goes into sleep mode after a longer period with no activity, the Community Edition cannot be used for professional app development projects.

When you start a professional app development project, you need more enterprise-level features and services (for example, more deployment options or formal service-level agreements). In that case you need to upgrade your app to a paid cloud environment. Upgrading is easy, as you will keep your user account and all the apps that you have already built.

##### 3.2.1.2 What’s the Definition of an Application? How Big Can It Be?

The short answer is, you decide, there are no limitations. You need to focus on the business need without having to work around artificial limitations to make your app fit into a licensing model or risk big upcharges. At Mendix, you do not have any of these limitations. Technically, an “app” is the complete application as it is set up and organized in the Mendix Platform. It can contain any combination of screens, database entities, processes, and functional components. You will determine the size of an application based on your use case and desired user experience, as well as the app design, model complexity, and maintenance considerations.

It is important to note that the architecture of your app is very important. Speed and flexibility typically drop when an application becomes too big or complex. The Mendix [Application Quality Monitor](../app-lifecycle/model-consistency#aqm) provides insight on  the right granularity of apps and microservices.

##### 3.2.1.3 How Many Applications Can I Build and Deploy?

There is no limitation to the number or the complexity of applications you can build and deploy using the platform when you select the Mendix Community, Pro, or Enterprise Platform Editions.

### 4.3 What Are the Mendix Training Options? {#options}

The Mendix Academy is integrated into the platform and provides both classroom and online training options.

For all the details on learning Mendix and getting certified, see the section [What Are the Mendix Training Options?](skills-training#training-options) in *Skills & Training*.
