---
title: "App Builds"
seo_title: "Creating Application Builds & CI/CD Pipeline Support"
seo_description: "Learn how to create a build for an app, support for on-premise build streets & how to integrate CI/CD pipelines. Visit for more!"
parent: "devops"
menu_order: 20
bg: "devops"
tags: ["version control", "branching", "consistency", "monitoring"]
---

## 1 How Do I Create a Build for My App? {#build-my-app}

Mendix applications are easily built from their models, as the models are stored under version control in the Mendix Team Server on the platform. There are two ways to build a Mendix Deployment Archive for an app.

With the Mendix Desktop Modeler, you can create a deployment package by simply selecting the option from the menu, and a fully functional deployment package is created on your disk.

For full control, you can leverage the Mendix Developer Portal, which allows DevOps teams to manage model versions in the Team Server and create versioned deployment packages from those model versions. These versioned deployment archives are stored in the Mendix Deployment Package Repository in the Mendix Cloud and can be staged with a few clicks to any environment.

<video controls src="attachments/DO_BuildingRevisionFromCloudPortal.mp4">VIDEO</video>

While building deployment packages, Mendix always executes a full consistency check of the app model before completing the build process successfully. This guarantees that app models are checked for many common issues and the deployment packages do not contain errors. For more details, see the section [Consistency Checks](model-consistency#consistency-checks) in *Model Consistency*.

It is important to note that you do not need to create a build for your application before publishing from the Web Modeler. All you have to do is click **Publish** for single-click deployment!

## 2 How Does Mendix Support On-Premises Build Streets?

Regardless of where the Team Server is hosted (by default in the Mendix Cloud, or alternatively, with an [on-premises Team Server implementation](version-control#ts-on-prem)), Mendix supports full automation of the build process.

For almost all customers, the fully managed Mendix Team Server is the optimal solution for the version control of Mendix application models. In this scenario, the Mendix Developer Portal and Mendix Modeler provide user interfaces to easily create versioned deployment archives. Platform APIs enable development teams to fully automate this process.

In some specific cases, an on-premises Team Server implementation can be used. In this scenario, Mendix provides an on-premises solution for the build process. You can use the [MxBuild](https://docs.mendix.com/refguide/mxbuild) command-line tool to automate the build process. MxBuild provides the same model consistency guarantees mentioned above in the section [How Do I Create a Build for My App?](#build-my-app) as when the Mendix Modeler, Developer Portal, or platform APIs are used to create a deployment package.

## 3 How Can I Integrate the Mendix Build Process in My CI/CD Pipeline?

The Mendix Platform provides APIs to automate the build process so that development teams can integrate the build process into their CI/CD pipeline tools and services of choice.

With the [Team Server API](https://docs.mendix.com/apidocs-mxsdk/apidocs/team-server-api) and [Build API](https://docs.mendix.com/apidocs-mxsdk/apidocs/build-api), development teams can create a versioned deployment package for any revision of the app model stored in the Mendix Team Server. These deployment packages are automatically stored in the Mendix Deployment Package Repository. These deployment packages are usable for deployments to any environment through both the Mendix Developer Portal and the [Deploy API](https://docs.mendix.com/apidocs-mxsdk/apidocs/deploy-api).

For more details on how to integrate the Mendix build process in third-party CI/CD pipeline tools and services, see the section [How Can I Use My Own CI/CD Tooling with Mendix?](cicd#cicd-other-tools) in *CI/CD*.
