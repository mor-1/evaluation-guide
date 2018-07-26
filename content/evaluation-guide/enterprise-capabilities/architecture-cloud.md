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

Within Mendix Cloud we make use a logical term called App Container to describe the Application isolation within Mendix Cloud. Each Application is fully separated from each other on both compute, memory and storage. A Mendix application runs in 1 or more containers, where a container can only support a single application. Also, for each application a dedicated database and s3 bucket is provisioned to have full isolation on data level as well.

![](attachments/figure-11-mendix-app-scaling.png)


### 4 Does the Mendix Cloud Offers High Availability, Scaling, or Auto-Recovery?

The Mendix Cloud offers high availability for all app environments, ensuring zero downtime in the case of a Mendix Runtime outage. Users are able to scale Mendix app environments using the Cloud Portal.

![Mendix app scaling](attachments/figure-11-mendix-app-scaling.png)

Mendix Cloud architecture automatically applies failover between availability zones. Database containers and file storage buckets are automatically replicated across multiple availability zones. All backups are copied to other data centers, but the data will not leave the region, should your company require this.

The Mendix Cloud enables auto-recovery and failover within the same availability zone, and the user load is balanced over two runtime containers. In the rare occurrence that a single runtime container crashes, the other runtime container automatically takes over all user requests while the Cloud Foundry Health Manager automatically replaces the crashed runtime container with a new runtime container. Because of the stateless architecture of Mendix, end-users will not be impacted in this scenario.

![Auto recovery in Mendix Cloud](attachments/figure-13-auto-recovery-in-mendix-cloud.png)
