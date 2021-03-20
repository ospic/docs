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

### Assign staff
Individual staff's works on consultation they have being assigned to them. To assign consultation service to staff in consultation view page select staff from drop down, consultation will be assigned as soon as you select to re-assign select another staff and consultation will be re-assgined to him/her. 
<c-image src="assign_staff.png" alt="Assing consultation to staff"></c-image> The staff assigned consultation will appear in their profile pages.

### Diagnoses
This list consultation diagnoses. To add new consultation diagnoses click <strong class="button"><v-icon x-small color="white">mdi-view-headline</v-icon>Add new diagnosis</strong> . Popup screen will appear to fill the diagnosis info and diagnosis date <c-image src="diagnosis_form.png" alt="Add new diagnosis information"></c-image>. Click save and it will appear on the top of diagnoses list <c-image src="diagnoses-list.png" alt="Add new diagnosis information"></c-image>.

### Services
This list medical services received by patient under this consultation. To add new medical service click <strong class="button"> Add patient service</strong> button and select a service, click save and it will appear in the list of service received by patient and its price.
<c-image src="service-tab.png" alt="Consultation medical services"></c-image>.

### Medication 
Medication part work exactly the same as services

### Laboratory reports
Display list of medical reports file. <c-image src="laboratory_reports.png" alt="Laboratory reports"></c-image> Click upload report file button to add new laboratory report file.

### Charges and Costs
This combine charges for medical service and medicines given to particular consultation services. The list update with update in medical service and medicines received. <c-image src="consultation_consts.png" alt="Consultation charges cost"></c-image>

### Admission history
Display consultation admission information the admission start and end date, ward number the patient addmitted and bed number. 
<c-image src="admission-info.png" alt="Admission infos"></c-image>

## Admission
### View admission
From admiision history click to view the admission <c-image src="view_admission.png" alt="View admission "></c-image> View admission gives three more options
- End current admission (i.e close the admission and free the bed for other admissions)
-  Visit admission (i.e add admission visits info)
- View visits (view the list of admission visits infos)
### Visit admission
Click visit admission button to add admission visits infos. The popup screen will launch to fill the patient condition infos and date of visit then save.
### End consultation 
Click end consultation button to mark this consultation as un-admitted and mark the bed as un-occupied for next admissions.
### View admission visits
Click admission visits buttons to view list of admissions visits infos by date and time of visit. <c-image src="admission-visits.png" alt="Admission  visits"></c-image>

