---
title:  Consultations
description: The medical consultation is best understood as a two-way social interaction for a doctor to elicits information from the patient
alt: my first blog post
createdAt: '2020-12-16'
tags:
  - documentation
  - patient
  - consultations
author:
  name: Elirehema
  bio: Member (Software developer)
  image: https://avatars.githubusercontent.com/u/29277048?s=460&u=7b9129df86f037dc4fb021e22ecbf252f308e688&v=4
---


## Consultations 
In the client profile you can create new service instance for client each time the client visit the health organization after the first day of registration the client will be served as consultation instance. All medical procedures, consts and reports will be under this consultation instance. From the profile select the Consultation tab it will display the list of consultation ever received by particular client in that organization.   <c-image src="concultations.png" alt="Consultations list"></c-image>The consultation list also have  <strong class="button">new consultation</strong> button to initiate client consultation. But this button only appears if client has no any other active consultation service.  Soon after intiating the consultation this consultation will appear in the list  [OPD department](/docs/patients#opd-department) consultations. And if the patient under the consultation get addmitted then it will appear under the list of [IPD department consultations](/docs/patients#ipd-department) 

### View consultation
From the [list of consultations](/docs/patients#consultations) click one consultations. This will open a new page to view a consulation. 
  <c-image src="consultation.png" alt="View Consultation"></c-image> The consultation page currently have 6 tabs
- Diagnoses (i.e for patient diagnoses informations)
- Services (i.e for other medical services provided under this consultation)
- Medication (i.e for list of medicine provided)
- Laboratory reports (i.e to keep record of laboratory reports uploaded in for this consultation)
- Costs (i.e this list all service and medication received, their price of each and total price, the same list will appear in finance for bill payment)
- Admissions (i.e patient admission historical records)