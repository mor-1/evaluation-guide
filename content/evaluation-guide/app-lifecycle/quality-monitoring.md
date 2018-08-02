---
title: "Quality Monitoring"
parent: "devops"
menu_order: 40
bg: "devops"
tags: ["test automation", "quality assurance", "model", "AQM", "unit test", "functional test", "Selenium", "JUnit"]
---

## 1 What Tools Are Available for Quality-Monitoring Mendix Apps? {#quality-monitoring}

The Mendix [Application Quality Monitor (AQM)](https://docs.mendix.com/aqm/aqm-overview) offers a dashboard that provides instant insight into the quality of the application models you are building. This industry-first cloud service leverages the Mendix metadata-based Model API, performing static analysis of application models by a best-of-breed engine from our integration partner [Software Improvement Group (SIG)](https://www.sig.eu/) against the [ISO 25010 industry standard for maintainability](#iso).

{{% image_container width="600" %}}

![](attachments/aqm.png)

{{% /image_container %}}

Mendix AQM performs a static analysis of Mendix application models according the ISO 25010 standard for maintainability. By proactively monitoring quality on a daily basis, customers can improve maintainability and reduce lifecycle costs.

## 2 What Is the Mendix App Quality Rating & ISO Standard for Maintainability?

Mendix application models have been mapped by experts from SIG on the ISO 25010 standard for software quality. The AQM service measures key aspects of app maintainability against a set of parameters and rates your application against a database of thousands of projects on a scale of one to five.

This rating provides a quality indicator for your application model and indicates how much effort and cost can be expected with future changes to the application model. A higher rating means the application model can be changed more easily compared to application models with a lower rating.

## 3 What Are the Benefits of Automated Quality Monitoring?

There is a strong correlation between the maintainability rating of an application and the effort put forth to handle issues and implement enhancements. Issue resolution time increases exponentially as quality drops. The following charts show that issue resolution times for defects and enhancements get exponentially longer with each level of decrease in source code quality:

![](attachments/aqm-quality.png)
*Source for charts above: Bijlsma, Ferreira, Luijten, and Visser: ["Faster Issue Resolution with Higher Technical Quality of Software"](https://www.sig.eu/wp-content/uploads/2016/10/Faster_Issue_Resolution_With_Higher_Technical_Quality_of_Software.pdf). N.d. June 26, 2018.*

## 4 How Does ISO 25010 (Maintainability) Apply to Mendix? {#iso}

Mendix application models have been mapped by experts from SIG on the ISO 25010 standard for software quality. This service measures key aspects of app maintainability against a set of parameters while benchmarking your application against a database of thousands of projects on a scale of 1–5.

AQM rates your application and highlights any potential issues that should be addressed. The diagrams below demonstrate that AQM does not measure your application against Mendix standards, but rather against a true industry standard for expertly defined best practices in the execution of your development.

![](attachments/aqm-sourcec_code_to_stars.png)

![](attachments/aqm-matrix.png)
