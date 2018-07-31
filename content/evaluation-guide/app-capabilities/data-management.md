---
title: "Data Management"
category: "App Capabilities"
notoc: true
menu_order: 20
bg: "data"
tags: [""]
---

## {Intro Text}

DRAFT OR NEW PAGE (How Does Data Management Work in Mendix)? VERIFY: Application data can be derived from many sources, such as existing systems, SQL databases, service calls, Web APIs, and local application-specific databases. In most cases, an application combines multiple sources of data to deliver new systems of differentiation and innovation. A Mendix application is able to sit on top of disparate sources of data as well as store new amalgamated data in a local SQL database.

In Mendix, you define your data using a domain model, which is a graphical representation of all the data aspects of your application. You can define names, descriptions, data types, validation rules, and security rules for your data. Mendix also offers easy ways to convert external data to the data required by your application and vice versa.

The Mendix Platform automatically handles persistent storage of your data in a database. This includes creating and updating the database and the required creation of tables and database constraints. Mendix also automatically generates all queries and data manipulation statements to retrieve and modify your data.

A Mendix app project includes a local database for development and provisions a "sandbox" environment using a PostgreSQL database. The Mendix Platform automatically provisions your test, acceptance, and production environment databases on the Mendix Cloud or a platform of your choice. Data is secured at both the platform- and application-level, which ensures that access to data is constrained to permitted users only. The migration of data is handled within the platform, and existing databases can be queried using our [Database Connector](https://appstore.home.mendix.com/link/app/2888/) add-on, which is available in the Mendix App Store.

## {Video}

## What Databases Does Mendix Support?

{Brief answer}

For details, see [What Databases Does Mendix Support?](data-storage#database-support)

## How Does Object-Relational Mapping Work in Mendix?

{Brief answer}

For details, see [How Does Object-Relational Mapping Work in Mendix?](data-storage#object-relational-mapping)

## How Does Mendix Ensure Data Security?

{Brief answer}

For details, see [How Does Mendix Ensure Data Security?](data-security#ensure-data-security)

## Read More

* [Data Storage](data-storage)
* [Data Integrity](data-integrity)
* [Data Security](data-security)
* [Data Querying & Management](querying-managing-data)