---
title: "Data Management"
category: "App Capabilities"
notoc: true
menu_order: 20
bg: "data"
tags: [""]
---

{{% todo %}}[**Content from Nick - use this or answer to question below?**]{{% /todo %}}

Data required to build new enterprise applications is derived from many sources, such as existing SQL databases, service calls, Web APIs and local application-specific databases. These data sources need to combine, often with newly captured data, to deliver better insights, improve processes and launch new products and services. The Mendix platform is designed to sit on top of your existing data using open integration standards such as web services, REST APIs and SQL integrations to help rapidly build new applications that integrate and amalgamate new and existing data.  

{{% todo %}}[**Answer to "How Does Data Management Work in Mendix" - use this or content from Nick above? **]{{% /todo %}}

Application data can be derived from many sources, such as existing systems, SQL databases, service calls, Web APIs, and local application-specific databases. In most cases, an application combines multiple sources of data to deliver new systems of differentiation and innovation. A Mendix application is able to sit on top of disparate sources of data as well as store new amalgamated data in a local SQL database.

In Mendix, you define your data using a domain model, which is a graphical representation of all the data aspects of your application. You can define names, descriptions, data types, validation rules, and security rules for your data. Mendix also offers easy ways to convert external data to the data required by your application and vice versa.

The Mendix Platform automatically handles persistent storage of your data in a database. This includes creating and updating the database and the required creation of tables and database constraints. Mendix also automatically generates all queries and data manipulation statements to retrieve and modify your data.

A Mendix app project includes a local database for development and provisions a "sandbox" environment using a PostgreSQL database. The Mendix Platform automatically provisions your test, acceptance, and production environment databases on the Mendix Cloud or a platform of your choice. Data is secured at both the platform- and application-level, which ensures that access to data is constrained to permitted users only. The migration of data is handled within the platform, and existing databases can be queried using our [Database Connector](https://appstore.home.mendix.com/link/app/2888/) add-on, which is available in the Mendix App Store.

{{% todo %}}[**Add video when available**]{{% /todo %}}

## What Databases Does Mendix Support?

The Mendix Platform supports the following database servers:
* PostgreSQL 9.2, 9.3, 9.4, 9.5, 9.6
* Microsoft SQL Server 2008, 2008 R2, 2012, 2014, 2016
* Microsoft Azure SQL Database
* Oracle Database 11g Release 2, 12c Release 1
* IBM DB2 11.1
* MariaDB 5.5, 10.0, 10.1
* MySQL 5.5, 5.6, 5.7

For details, see [What Databases Does Mendix Support?](data-storage#database-support)

## How Does Object-Relational Mapping Work in Mendix?

ORM in Mendix enables developers to concentrate on the creation of domain models using our visual domain modeling editor. Developers drag and drop entities, configure attributes and map associations across entities to create the required data model visually. Once complete the Mendix Platform will turn this domain model into an underlying SQL Database, automatically creating and maintaining the desired tables, data types, joins and constraints.

For details, see [How Does Object-Relational Mapping Work in Mendix?](data-storage#object-relational-mapping)

## How Does Mendix Ensure Data Security?

Mendix provides a comprehensive security DSL that enables your teams to create fine-grained security controls across your application's navigation, UI, logic and data. At the database level access can be either granted or denied against specific attributes and entities, while server-side rules can be built to constrain data before leaving the server. 

For details, see [How Does Mendix Ensure Data Security?](data-security#ensure-data-security)

## Read More

* [Data Storage](data-storage)
* [Data Integrity](data-integrity)
* [Data Security](data-security)
* [Data Querying & Management](querying-managing-data)
