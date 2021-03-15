---
title:  Reports
description: View, upload reports
image: 
alt: my first blog post
createdAt: '2020-12-18'
tags:
  - documentation
  - reports
author:
  name: Elirehema
  bio: Member (Software developer)
  image: https://avatars.githubusercontent.com/u/29277048?s=460&u=7b9129df86f037dc4fb021e22ecbf252f308e688&v=4
---

## Upload new report

The reports part give you the option to view the system build in reports and option to upload new reports. System uses [JasperReports](https://www.jaspersoft.com/)  an open source Java reporting tool that can write to a variety of targets, such as: screen, a printer, into PDF, HTML, Microsoft Excel, RTF, ODT, comma-separated values (CSV) or XML files. It can be used in Java-enabled applications, including Java EE or web applications, to generate dynamic content. It reads its instructions from an XML or .jasper file. JasperReports is part of the Lisog open source stack initiative.

So any valid jasper files can be uploaded in the report section. After uploading the system will create report name from the file name e.g if the report file name is `example_report.jrxml` the system will create `Example report` name. Be wise in naming your report file.

## View report
From you navigation menu click Reports this will navigate to report list page. Select one report by clicking it it will open as shown below <c-image src="view_report.png" alt="View reports"></c-image>