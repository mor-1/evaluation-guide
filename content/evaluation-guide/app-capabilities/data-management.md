---
title: "Data Management"
category: "App Capabilities"
notoc: true
menu_order: 20
bg: "data"
tags: [""]
---

The data required to build new enterprise applications is derived from many sources, such as existing SQL databases, service calls, web APIs, and local application-specific databases. Mendix applications sit on top of their own SQL database, which is created and managed by the platform and without the need for a dedicated database administrator.

![](attachments/data-management-overview.png)

{{% todo %}}[**Add video when available**]{{% /todo %}}

## What Databases Does Mendix Support?

The Mendix Platform supports the following database servers for data being managed by the Mendix Runtime:

* PostgreSQL 9.2, 9.3, 9.4, 9.5, 9.6
* Microsoft SQL Server 2008, 2008 R2, 2012, 2014, 2016
* Microsoft Azure SQL Database
* Oracle Database 11g Release 2, 12c Release 1
* IBM DB2 11.1
* MariaDB 5.5, 10.0, 10.1
* MySQL 5.5, 5.6, 5.7

For integration purposes, Mendix supports integration with any database via the JDBC protocol.

For more information, see [What Databases Does Mendix Support?](data-storage#database-support) in *Data Storage*.

## How Does Object-Relational Mapping (ORM) Work in Mendix?

ORM in Mendix enables developers to concentrate on the creation of domain models using our visual domain modeling editor. Developers drag and drop entities, configure attributes, and map associations across entities to create the required data model visually. Once complete, the Mendix Platform will turn this domain model into an underlying SQL database, automatically creating and maintaining the desired tables, data types, joins, and constraints.

For details, see the [How Does Object-Relational Mapping Work in Mendix?](data-storage#object-relational-mapping) section.

## How Does Mendix Ensure Data Security?

Mendix provides a comprehensive security DSL that enables your team to create fine-grained security controls across your application's navigation, UI, logic, and data. At the database level, access can be either granted or denied against specific attributes and entities, while server-side rules can be built to constrain data before leaving the server. 

For details, see [How Does Mendix Ensure Data Security?](data-security#ensure-data-security) in *Data Security*.

## Read More

* [Data Storage](data-storage)
* [Data Integrity](data-integrity)
* [Data Security](data-security)
* [Data Querying & Management](querying-managing-data)
