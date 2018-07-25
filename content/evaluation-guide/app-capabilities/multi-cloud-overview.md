---
title: "Multi-Cloud Overview"
parent: "deployment"
menu_order: 10
tags: [""]
---

## 1 What Deployment Options Does Mendix Provide? {#deployment-options}

An application built with Mendix is based on a cloud-native design and conforms to 12-factor principles. The Mendix Runtime is fully optimized to run in a container technology that is compatible with most modern cloud platform offerings like Kubernetes and Cloud Foundry. Mendix apps are thus able to utilize benefits of these cloud platforms such as auto-scaling, auto-provisioning, auto-healing, low infra-overhead, CI/CD support, and cloud interoperability. For more information on these Mendix architecture principles, see [Architecture Principles](../enterprise-capabilities/architecture-principles).

Within this flexible model, Mendix supports a large variety of deployment options that allow you to run your Mendix application on a public, virtual private, private, or hybrid cloud or via a traditional (virtual) server.

### 1.1 Public Cloud

If you want to acquire the best utilization rate for your infrastructure, to maintain optimal flexibility, and to convert your capital investment into operational expenses, the public cloud is the best choice. Mendix has support for most public cloud vendors, such as Mendix Cloud, IBM, SAP, Microsoft, AWS, and Google. For Mendix Cloud, SAP, and IBM, we deliver a fully integrated experience in which you can run your app with a single click via your cloud choice.

For more information, see the section [How Can I Run Mendix in the Public Cloud?](#running-public-cloud) below.

### 1.2 Virtual Private Cloud (VPC)

If your business requires a higher data or application isolation level, a virtual private cloud (VPC) could be the best choice. You still can benefit from a high utilization rate and resource flexibility, but on dedicated hardware or within a separate network segment. A Mendix application runs fully decoupled from our public Mendix Developer Portal, which means running on a VPC can be accommodated easily.

For more information, see the section [How Can I Run Mendix in a Virtual Private Cloud?](#vpc) below.

### 1.3 Private Cloud – On-Premises

If your organization is complying with specific regulations and is not allowed to run in a third-party cloud, you must run your infrastructure on premises. This option can be based on a private cloud or on a traditional server. Mendix can run on both server-based solutions as private cloud IaaS or PaaS solutions.

For more information, see the section [How Can I Run Mendix in a Private Cloud or On Premises?](#on-prem) below.

## 2 How Do I Run and Deploy My Mendix Application? {#run-deploy}

In the Mendix Platform, the development and execution of your application are fully separated. After developing the app, you can choose where you want to run it. The sections below explore your deployment options.

### 2.1 How Can I Run Mendix in the Public Cloud? {#running-public-cloud}

Mendix applications can run on all common public cloud providers, like Amazon Web Services, Microsoft Azure, IBM Cloud, Google Cloud Platform, SAP Cloud Platform, Redhat Openshift, and Pivotal Web Services.

You can choose the methodology to use – from container-based to VM-based, every methodology is possible.

For more information, see the section [Which Cloud Providers Can I Use for Mendix?](#which-cloud) below.

### 2.2 How Can I Run Mendix in a Virtual Private Cloud? {#vpc}

A virtual private cloud is a public cloud with a dedicated infrastructure like a network, storage, and/or computing allocated to a customer. In most situations, this cloud is only accessible when connected to the customer's network. Therefore, the Mendix Developer Portal provides a set of APIs that make it possible to configure tools like Jenkins or Microsoft Visual Team services to automate deployment within a VPC. This ensures developers maintain the benefit of the one-click deployment experience when using the Mendix Platform in combination with a VPC.

For more information, see [CI/CD](../app-lifecycle/cicd).

### 2.3 How Can I Run Mendix in a Private Cloud or On Premises? {#on-prem}

If you are required to run your software on your own premises, you can choose an infrastructure abstraction level:

* Physical servers
* IaaS
* PaaS

In terms of speed, self-service, and governance, the PaaS level has significant benefits. Because of the small footprint of a Mendix application, having a 2-node (VMs) Kubernetes cluster allows you to run multiple Mendix applications (in test, acceptance, and production environments) with high availability as well as auto-scaling and auto-healing capabilities. This is also possible when running Mendix on traditional servers, but the setup time and maintenance will be significantly higher.

For more information, see the section [Which Operating Systems Do the Mendix Modelers Support?](../app-lifecycle/app-development#operating-systems) in *App Development*.

### 2.4 How Do I Select a Cloud Provider?

Mendix Multi-Cloud is a deep integration with different cloud providers that allows you to deploy your application with a single click from both the Mendix Modeler and the Developer Portal.

![](attachments/run.png)

The Mendix multi-cloud solution makes use of container-based cloud solutions. The creation of the container and the required services (like the database) is done completely automatically.

It is even possible to switch between cloud providers, so you can start developing and running your application on one cloud and, over time, move it to another cloud.

![](attachments/mutli-cloud-selection.png)

At the moment, the integrated Mendix Multi-Cloud solution is provided for Mendix Cloud, IBM Cloud, and SAP Cloud. More clouds will be added to the Mendix Multi-Cloud portfolio in the near future.

![](attachments/multi-cloud-deploy.png)

### 2.5 When Should I Use IaaS vs. PaaS?

Infrastructure-as-a-service (IaaS) is the virtualization of computing, network, and storage running on-premises or within the public cloud. A platform-as-a-service (PaaS) is an extra abstraction layer on top that allows you to work with services and applications. The abstraction layer of a PaaS will allow you to think in terms of services and applications while providing capabilities like high availability, auto-scaling, auto-healing, auto-provisioning, and user governance.

The choice of either an IaaS or PaaS in relation to Mendix is based on the amount of applications you are planning to run and who the owner is of the PaaS layer on the cloud.

If you are able to consume a PaaS on demand from a public cloud, this will always be the best fit for a Mendix hosting solution based on cost, speed, and control.

In the scenario that you have access to an IaaS and you need to choose a PaaS layer yourself (like Kubernetes or Cloud Foundry), the key factor is the amount of applications. A Kubernetes cluster can be beneficial when you are planning on running more than two applications, wherein each app contains a test, acceptance, and one or more production environments. When you are planning on running more than 10 applications, a Cloud Foundry solution could be beneficial (this has to do with the footprint and maintenance of the PaaS layer). Finally, for a single application, a traditional server-based solution will be enough.

## 3 Which Cloud Providers Can I Use for Mendix? {#which-cloud}

Mendix is compatible with all the well-known cloud providers: IBM Cloud, SAP Cloud Platform, Microsoft Azure, Amazon Web Services (AWS), Redhat Openshift, and Google Coud Platform.

In addition, Mendix has formal partnerships with IBM, SAP, Microsoft, and AWS. Both IBM and SAP are official resellers and see Mendix as an extension on their own cloud offerings.

![](attachments/CloudProvIdersLogos.png)

This table presents an overview of the deployment options for each provider:


| Provider / Deployment | Public Cloud Foundry | Public Managed Kubernetes | Docker Container Services | (Virtual) Service-based | Virtual Private Cloud  | Private Cloud (On-Premises) |
|-----------------------------|-----|-----|-------|-----|-----------|--------|
| IBM | X | X |  | X | X | X |
| SAP | X |  |  |  |  |  |
| Azure |  | X | X | X | X | X |
| AWS |  |  | X | X | X |  |
| Openshift |  | X |  | X |  | X |
| Google |  | X |  |  | X |  |

### 3.1 How Does Mendix Provide Support for Cloud Foundry?

In 2014, Mendix adopted Cloud Foundry (CF) as the fundament for the Mendix Cloud. This was also the year Mendix joined the Cloud Foundry Foundation open source project to contribute to the community.

Cloud Foundry is a platform-as-a-service (PaaS), although it is positioned by some analysts as an application-platform-as-a-service (aPaaS). Cloud Foundry provides an abstraction layer on top of an IaaS like Vmware, Openstack, Azure, or AWS. This allows you to provision services and applications without having to deal with servers, network, routing, or storage.

The key benefits of using Cloud Foundry are user governance, high control combined with self-service capabilities, auto-scaling, auto-healing, and auto-provisioning. This reduces the overall maintenance cost of running a large amount of applications and allows your DevOps team to maintain these themselves.

An application runs in a fully isolated container, consuming the specific services that are connected to this container. To deploy an application on Cloud Foundry, a compatible buildpack needs to be available that is responsible for compiling, building, and running the application on Cloud Foundry.

![](attachments/buildpack-cf.png)

As the Mendix Cloud is based on Cloud Foundry, a buildpack is available at [https://github.com/mendix/cf-mendix-buildpack](https://github.com/mendix/cf-mendix-buildpack) to deploy a Mendix application to any Cloud Foundry offering. This buildpack is part of the open-source Cloud Foundry community and is officially supported by Mendix. For more information, see [the documentation](https://github.com/mendix/cf-mendix-buildpack) provided on the GitHub repository.

The container build within Cloud Foundry contains the full runtime setup for running your application. Together with a database service and optionally a storage service, you are able to run your application on Cloud Foundry.

![](attachments/mendix-container.png)

#### 3.1.1 How Can I Use the Mendix Cloud Foundry Buildpack in Offline Mode?

The Mendix Cloud Foundry buildpack will by default download dependencies for building the container from the Mendix content delivery network. If you are running Mendix on premises without internet access, it is possible to fully run the buildpack offline. In that case, all the dependencies need to be stored on a web server in the local network. While executing the buildpack, an environment parameter will set the alternative download location for the dependencies.

####  3.1.2 How Can I Scale a Mendix Application on Cloud Foundry?

Because the Mendix Runtime is stateless, the standard scaling capability of Cloud Foundry can be used for a Mendix application. This means that adding horizontal scaling and increasing the memory of a single container for vertical scaling is as simple as adding instances of the container. For processes that need to be run on a single node (for example, scheduled events), the first container of the cluster will perform these tasks (which is also addressed as cluster ID 0). In case this container stops, Cloud Foundry automatically restarts it.

### 3.2 How Can I Make Use of Docker for My Mendix Applications?

Mendix added official support for Docker in 2017. This means it is possible to create a Docker image from your modeled Mendix application and distribute it using a Docker Hub repository so that you can run it on platforms like Docker Desktop, Swarm, Enterprise, DCOS, and Kubernetes.

Mendix provides a Docker buildpack as a generic Docker build file. This buildpack inherits from the Mendix Cloud Foundry buildpack, so it has all the capabilities that are already provided in the Cloud Foundry buildpack.

For building a Docker image, the standard `Docker build` command can be used. This will result in an image containing the full runtime setup for your application.

![](attachments/buildpack-docker.png)

Along with a database and optionally a storage service, you will be able to run your application.

For more information, see [How to Run a Mendix Docker Image](https://docs.mendix.com/deployment/docker/run-mendix-docker-image) in the Mendix documentation.

#### 3.2.1 How Does Mendix Run on Kubernetes?

Mendix added official support for Kubernetes in 2017. Kubernetes is a container orchestration layer, also positioned as an aPaaS or PaaS. It is typically used to support DevOps teams and microservices architectures. In the combination of Mendix Docker support, a Mendix application is a smooth fit for running on a Kubernetes cluster.

To run a Mendix application with high availability on a Kubernetes cluster, the app should be deployed in a StatefullSet of a minimum of two pods. This allows you to horizontally scale the application to your own needs while keeping control of single processes like scheduled events. The pods need to have access to a database. This database can also run on the Kubernetes cluster, or it can be served by an underlying cloud like Azure SQL, AWS RDS PostgreSQL, IBM Compose PostgreSQL, or IBM DB2.

If the application needs file storage, this can be attached using a standard storage classed to the StatefullSet or by using cloud services like AWS S3 storage, Azure Blob storage, or IBM Swift storage.

![](attachments/kubernetes.png)

For more details, see [How to Run Mendix on Kubernetes](https://docs.mendix.com/deployment/docker/run-mendix-on-kubernetes) in the Mendix documentation.

## 4 How Can I Run Mendix on a (Virtual) Server or IaaS?

The Mendix Runtime can be directly installed on a server. Mendix provides a service manager for both Linux-based and Windows-based servers that controls the start, stop, and deployment of an application on the server.

![](attachments/mx-service-console.png)

For Linux-based applications, this is a command-line based tool called [M2EE](https://github.com/mendix/m2ee-tools).

For details on supported operating systems and related databases, see [System Requirements](https://docs.mendix.com/refguide/system-requirements) in the Mendix Reference Guide..

In addition to a container-based solution, Mendix provides full support for a high availability configuration. For details, see [How to Configure High Availability](https://docs.mendix.com/deployment/on-premises/high-availability) in the Mendix documentation.


