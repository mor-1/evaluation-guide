---
title: "Use Cases"
parent: "introduction"
menu_order: 50
bg: "mendix"
tags: [""]
---

## 1 What Can I Build with Mendix? {#can-i-build}

With Mendix, you can build a wide range of transactional, event-driven, and adjacent applications for all kinds of industries, regardless of complexity, [resilience](../enterprise-capabilities/architecture-principles##statelessness), or [scale](../enterprise-capabilities/architecture-principles##statelessness).

The [Mendix App Gallery](https://gallery.mendix.com) showcases all kinds of applications built using the Mendix Platform. These applications are there to present you with the art of the possible.

{{% todo %}}[**Make more level 1 questions**]{{% /todo %}}

### 1.1 What Types of Projects Are a Good Fit for Mendix?

Based on Gartner’s [Pace-Layered Model](https://www.gartner.com/binaries/content/assets/events/keywords/applications/apn30/pace-layered-applications-research-report.pdf), an organization’s application landscape is made up of three distinct layers with a corresponding rate of change. This rate of change is dictated by the uniqueness of the solutions and how concrete the requirements are.

![](attachments/blog-in-post-pace-payer-model-02.png)

At the bottom of the model, you have the system of record, which is the foundation of the business. This a structurally solid system with a slow rate of change and well-defined requirements. In the middle, you have the system of differentiation, which focuses on fostering outside-in and customer-centric thinking, accelerating the rate of change, and developing unique approaches to sustain differentiation. At the top, you have the system of innovation, which represents brand new ideas for the organization and thus has fuzzy requirements and a high rate of change.

Mendix helps most in projects where the requirements are not completely defined up front and in projects that have a high rate of change. In line with Gartner’s Pace-Layered Application Strategy, a system of differentiation or innovation matches these criteria. For a system of record, Mendix is only a good fit if one of the following points is applicable:

* The application is not available off the shelf
* The off-the-shelf solution is too complex and/or or too expensive
* The customer needs more customization
* The customer needs to differentiate against competitors
* The customer wants more control over future capabilities

There are three types of projects that are a good fit for Mendix:

*  **Systems of innovation projects** that are built to create new ways of working
   *  Often customers do not know exactly what they need, so they need to experiment before and after the app's go-live
*  **Systems of differentiation projects** that extend on core systems projects
   *  In this case, customers have an idea of what they would like to have, and it needs to be different from their competitors
*  **Unique systems of records projects** that modernize legacy systems
   *  Here, customers typically know exactly what they would like to have and the solution is not available off the shelf, since it is a unique system


With fluid requirements and a high rate of change, these types of projects require small cross-functional teams, rapid iteration and releases, and a unified innovation platform like Mendix.

### 1.2 What Are Common Use Cases for Mendix Applications?

Based on the experience of Mendix's hundreds of enterprise customers, there are four common use cases that are perfect fits for developing with a low-code platform like Mendix. These are the four use cases mapped to the Gartner's Pace-Layered Model:

![](attachments/blog-in-post-pace-payer-model-use-cases-03.png)

The sections below describe these common use cases in more detail.

#### 1.2.1 Innovation Applications

Innovation applications stem from ideas for new digital business models, products, and channels to help grow and differentiate the organization. Often, they leverage emerging technologies like IoT, AI, and machine learning to unlock new sources of value. Because innovation apps start as ideas (with loose and fuzzy requirements and a high rate of change), they require a high degree of business involvement throughout the entire development process.

This section will highlight some features that enable you to build innovation apps in Mendix along with some examples.

| Challenge                                                    | Need                                                         | How Mendix Helps                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| Innovation projects are difficult to get started because of the length, cost, and risk of traditional approaches. | Remove impediments to experimentation,   enabling a test-and-learn approach where new ideas can be vetted quickly and   inexpensively. | <ul><li>The [Mendix licensing model](#evaluate-before) encourages a test-and-learn approach</li><li>The Web Modeler enables business users to build prototypes that development teams can continue to enhance via the Desktop Modeler</li></ul> |
| Traditional development processes make it difficult to translate innovative ideas into successful apps. | Minimize the need for specialized skills, empowering business users to build prototypes and leverage advanced technologies and core systems. | <ul><li>Web Modeler enables business users to build prototypes</li><li>Out-of-the-box [connectors](../app-lifecycle/app-store#connectors) simplify integrating with third-party databases or applications, handling complex XML messages, and utilize IoT and cognitive services, which enables developers to leverage emerging technologies and legacy systems with minimal dependencies on IT</li></ul> |
| It is difficult to know all requirements up front, which can lead to unsuccessful apps because the wrong functionality is built. | Implement an iterative design and delivery approach with feedback loops to ensure apps deliver their intended   business value. | The easy-to-use Mendix [Developer Portal](../app-lifecycle/requirements-management) with built-in Agile project management features encourages iterative development while actively including the business and incorporating their feedback. |
| Many innovative apps never leave the prototype stage and do not get operationalized at scale. | Ensure new apps can move seamlessly from prototype to large-scale production once success is proven. | <ul><li>Enterprise-grade platform with cloud-native architecture</li><li>Pluggable DevOps build chain for [CI/CD](../app-lifecycle/cicd) with integration of enterprise-specific [ALM testing](../app-lifecycle/test-automation-qa) and [monitoring](../app-lifecycle/monitoring-alerts) tools</li><li>Web-scale architecture, out-of-the box, performance, and [app quality monitoring](../app-lifecycle/devops-overview#modeling-phase)</li></ul> |

Some great examples of innovation apps built with Mendix are AntTail’s [medicine tracking app](https://www.mendix.com/blog/anttail-ensures-quality-medicines-iot/), Solomon Group’s [RFID wristband event access app](https://www.mendix.com/blog/solomon-group-iot-solution/), KLM’s [IoT equipment tracking app](https://www.mendix.com/blog/comes-building-iot-apps-klm-says-just/), and Heijman’s [IoT-based smart building management app](https://www.mendix.com/our-customers/heijmans/).

#### 1.2.2 Customer Engagement Applications

Customer engagement applications enable customers and partners to better interact and/or transact with the business, improving satisfaction, retention, and revenue. With these apps, the business has a fairly well-defined idea of the app, but the development team must adapt to issues revealed during the application lifecycle. Customer-facing applications often encounter high expectations from unforgiving users in terms of both usability and seamless, multi-channel access. There are often underlying operational improvements required to support customer-facing processes, and integration with systems of record is required to support the experience layer and existing processes.

This section will highlight some features that enable you to build customer engagement apps in Mendix along with some examples.


| Challenge                                                    | Need                                                         | How Mendix Helps                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| Delivering an engaging user experience with limited budget and UX skills. | Make it easy for individuals without UX backgrounds to build highly usable multi-channel apps with great UIs. | <ul><li>The [WYSIWYG page editor](../app-lifecycle/user-interfaces#build-pages) and [Atlas UI framework](../app-capabilities/ui-design#atlas-ui) enable users without front-end development or UI design skills to create beautiful, engaging, and highly usable multi-channel apps</li><li>The Web Modeler bi-directionally syncs with the Desktop Modeler, allowing the business to   participate in the design process to ensure app usability and success</li><li>Atlas UI enables your company's UI/UX team to create a package containing the organization’s design language for use across development teams, ensuring consistency while broadly leveraging the skills of what could be a small UI/UX team</li></ul> |
| Integrating with systems of record to implement the required process enhancements / automation. | Enable business analysts to automate and optimize business processes by easily incorporating systems of record. | <ul><li>Connectors built using the [Connector Kit](../enterprise-capabilities/extensibility#extend-functionality) and provided through a [Private App Store](../app-lifecycle/user-interfaces#private-templates-styling) allows less technical developers to orchestrate core systems,  thus automating workflows</li><li>Loose coupling prevents integrations from breaking when changes are made in core systems</li></ul> |
| Apps delivered quickly often do not scale or deliver the performance users expect. | Marry rapid development with a   web-scale runtime architecture. | Cloud-native architecture enables elastic scaling for large user bases and automatic failover for continuous operation of critical apps and portals. |


Some examples of customer engagement app built with Mendix are agent/broker portals, customer portals, [self-service policy administration apps](https://www.mendix.com/our-customers/texas-life/), claims management apps, and student service applications for universities.

#### 1.2.3 Operational Efficiency Applications

Operational efficiency applications are employee- or partner-facing applications designed to lower costs by reducing or automating manual or paper-based processes. These apps may support departmental, cross-departmental, or company-wide processes, and they are often driven by compliance needs, particularly in regulated industries. This type of app almost always integrates with core systems. The closer the app is to the core systems of the business, the more critical the operational robustness becomes.

| Challenge                                                    | Need                                                         | How Mendix Helps                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| Not realizing the project’s intended complete value because the requirements  are misinterpreted. | Harness the knowledge and feedback of the business from the start through delivery and beyond. | <ul><li>The easy-to-use Developer Portal allows business users to create and track their own user stories</li><li>The Web Modeler allows business analysts to build their own apps as well as automate and optimize business processes</li><li>Visual models provide a shared language between business and IT when more technical developers are involved</li><li>Built-in Agile project management encourages iterative development while including the business and incorporating their feedback</li></ul> |
| Dependencies on core systems and core-IT gate app delivery.  | Make it easy to incorporate systems of record with minimal IT involvement. | <ul><li>Connectors built using the Connector Kit and provided through a Private App Store allow less technical developers to integrate systems of record</li><li>[Visual data mapping](../app-capabilities/data-mappings) allows business analysts and developers to map data of records to the optimal data model for the app</li></ul> |
| The high cost of managing an ever-increasing (and ever-evolving) app portfolio | Apply appropriate governance   without compromising time to value | <ul><li>The Mendix Platform provides logging and controls (preventative, detective, and corrective) out of the box to ensure compliance and quality across the entire portfolio</li><li>The [Mendix Cloud Portal](../app-capabilities/mendix-cloud#cloud-portal) provides DevOps capabilities to both business analysts and developers, while spanning multi-cloud deployments</li></ul> |

Some examples of operational efficiency applications include [claims processing](https://www.mendix.com/blog/ced-repair-agile-customer-centric-business-model-future-proof-platform/), supply-chain management, invoice processing, device tracking, [university registration](https://www.mendix.com/our-customers/north-carolina-state-university/), and [order management](https://www.mendix.com/our-customers/kao/) apps.

#### 1.2.4 Legacy Migration Applications

Most legacy migration Mendix application projects are business-driven transformation initiatives. That is, rather than a pure lift-and-shift of existing functionality, these new apps are meant to replace legacy apps that cannot support new processes or provide the right user experience. As such, they require new functionality, but they should also support current processes.

| Challenge                                                    | Need                                                         | How Mendix Helps                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| Need to build a system that remains flexible to adapt to changes. | Employ a modern app architecture that promotes agility by leveraging microservices. | Easily create a microservices architecture with an autonomous app and services that can be recombined and shared. |
| Mission-critical apps fail to deliver the required performance at scale. | Ensure the new solution can be deployed with the required resiliency and high availability for mission-critical use. | Cloud-native architecture enables automatic failover for continuous operation of business-critical apps (out of the box with the Mendix Cloud). |
| Inadequate oversight of quality due to the size and complexity of the solution. | Embed the automated quality measurement and testing within the development lifecycle. | The Mendix [Application Quality Monitor](../app-lifecycle/model-consistency#aqm) provides benchmarks into the maintainability of apps based on the ISO 25010 standard. |
| Usability is often an afterthought, blunting ROI.            | Take a user-first approach when designing the new solution.  | <ul><li>The Mendix Web Modeler allows the business to participate in the design process to ensure app usability and success</li><li>The visual data mapping allows you to create the optimal data model for the new solution (with traceability back to systems of record), not simply recreate the legacy systems’ model</li></ul> |

Examples of legacy migrations include transferring legacy [Lotus Notes](https://www.mendix.com/blog/how-one-customer-is-using-mendix-for-legacy-application-migration/), Microsoft Access, SharePoint, or Excel applications to an updated system.

## 2 What Shouldn't I Build in Mendix? {#should-not-build}

While there are endless possibilities for what apps can be built with the platform, we at Mendix do have some advice on what you should not build in Mendix.

If your application can already be bought off the shelf and provides 100% of the requirements you need, then Mendix suggests buying that off-the-shelf product. Buying such a solution is often more cost-effective (based on best practices) and it is faster to implement. Typically, these off-the-shelf solutions are available for traditional system-of-record applications (which have a low rate of change), because the processes are well-established, common to most organizations, and often subject to regulatory requirements.

However, there are situations when the Mendix platform is a good fit even if the app that needs to be built is a traditional system of record. These are situations in which the off-the-shelf solution is too complex and/or too expensive, you need more customization, you need to differentiate against your competitors, or you would like to have more control over future capabilities. Mendix can extend any application or stay stand-alone.

In addition to such systems of records, the Mendix Platform is not a good fit for building games or replacing full ESB solutions.

The Mendix Platform allows you to build web, mobile, and tablet applications; therefore, it’s not suitable if you are looking to build apps that are not browser- or mobile-based.
