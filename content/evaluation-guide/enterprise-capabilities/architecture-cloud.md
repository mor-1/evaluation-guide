---
title: "Cloud Architecture"
parent: "architecture-intro"
menu_order: 30
tags: [""]
---
## 1 What Does the Mendix Deployment Architecture Look Like?

Mendix Cloud is the infrastructure that Mendix operates to run the Mendix Platform and the applications built on the platform. Mendix Cloud offers MxID as well as a Cloud Portal for managing users and for deploying, monitoring, and managing apps across environments.

![Mendix deployment architecture](attachments/figure-7-mendix-cloud-deployment-architecture.png)

## 2 Where Does Mendix Host My Application?

The Mendix Cloud can provide hosting facilities in the US, APAC, and the EU.

Mendix guarantees that the data will not leave the region, should your company require this.

For details, see the [Multi-Cloud Overview](../app-capabilities/multi-cloud-overview).

## 3 How is Application isolution organized?

Within Mendix Cloud we use use a logical term App Container to describe the Application isolation within Mendix Cloud. Each Application has is fully seperated from each other on both compute, memory and storage. A Mendix application runs in 1 or more containers. A container can only support a single application. Also for each application a dedicated database and s3 bucket is provisioned.  This to have full isolation on data level as well. 

![](attachments/mx-app-container.png)
