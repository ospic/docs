---
title:  Patients
description: Create, update, delete patients, initiate patient consultations and create appointment. View assigned and un-assigned patient consultations
image: 
alt: my first blog post
createdAt: '2020-12-15'
tags:
  - documentation
  - patients
  - consultation
author:
  name: Elirehema
  bio: Member (Software developer)
  image: https://avatars.githubusercontent.com/u/29277048?s=460&u=7b9129df86f037dc4fb021e22ecbf252f308e688&v=4
---

## Appointments
This shows the list of an assigned and un-assgined consultation. Assigned consultation list all active created consultations and assigned to any medical specialist or staff, but un-assigned work the opposite.
- Un-assigned patient consultations list
<c-image src="un-assigned-consultation.png" alt="Assigned and un assigned consultation"></c-image>

- Assigned patient consultations list
<c-image src="assigned-consultation.png" alt="Assigned and un assigned consultation"></c-image>

## Patients
This section list available patients and their status i.e Active or Inactive. 
<c-image src="patients.png" alt="List of patients"></c-image> You can also create new patient, view patient, edit patient information, add patient contacts informations, upload patient profile image, Initiate patient consultation service to be attended

### Create new patient
The patient/client registration can be done only once. To create a new patient in you patients list click <strong class="button">+ Add new patient</strong> button, this will navigate you to a new page to fill out some new client information like Fullname, age, weight, height etc. All fields are mandatory except fot Note. After you fill the information click save button. <c-image src="create-patient.png" alt="List of patients"></c-image> 

### View client
After succesfully submit you will be redirect to the created client profile. In the list of clients you can also select one to view his/her details. Currently client profile shows Biography and Consultation history.  <c-image src="profile.png" alt="Client po"></c-image> 

### Edit client
To edit patient click edit button <icon icon="account-edit"></icon> it will give you the edit option click save after you have editted.

### Upload client image
To upload client image for later refferences click upload button <icon icon="progress-upload"></icon> the popup screen with image select option will appear select image and click save to persist.  The selected image will appear on client profile. <c-image src="profile-image-upload.png" alt="upload profile image"></c-image>  

### Add patient contacts
Click <strong class="button">add contacts</strong> button. The new page to fill contacts information appear after you have filled the contacts information click submit button. Then the contacts information will appear below client profile image. <c-image src="contact-profile.png" alt="Profile display contacts"></c-image>

### Consultations 
In the client profile you can create new service instance for client each time the client visit the health organization after the first day of registration the client will be served as consultation instance. All medical procedures, consts and reports will be under this consultation instance. From the profile select the Consultation tab it will display the list of consultation ever received by particular client in that organization.   <c-image src="concultations.png" alt="Consultations list"></c-image>The consultation list also have  <strong class="button">new consultation</strong> button to initiate client consultation. But this button only appears if client has no any other active consultation service.  Soon after intiating the consultation this consultation will appear in the list  [OPD department](/docs/patients#opd-department) consultations. And if the patient under the consultation get addmitted then it will appear under the list of [IPD department consultations](/docs/patients#ipd-department) 


## OPD department
## IPD department