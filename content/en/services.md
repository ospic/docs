---
title:  Medical services
description: Management of all medical sesrvices provided by particular health institutions
image: 
alt: my first blog post
createdAt: '2020-12-16'
tags:
  - documentation
  - laboratory
  - radiology
  - others
author:
  name: Elirehema
  bio: Member (Software developer)
  image: https://avatars.githubusercontent.com/u/29277048?s=460&u=7b9129df86f037dc4fb021e22ecbf252f308e688&v=4
---


**Medical services** means medical and health care services provided to a Person, including, but not limited to, medical and health care services provided to a Person which are covered by a policy of insurance, and includes, without limitation, physician services, nurse and therapist services, dental services, hospital services, skilled nursing facility services, comprehensive outpatient rehabilitation services, home health care services, residential and out-patient behavioral healthcare services, and medicine or health care equipment provided to a Person for a necessary or specifically requested valid and proper medical or health purpose.

### Medical categories
---
In previous versions we have categorized medical service in two categories Laboratory and Radiology but this was not good approach as medical institutions differ in service depend on their sizes. So we decided to change medical service categories to customized one, i.e user can add or delete the medical service categories of their choice. 

### Add medical service category
---
From your navigaton drawer go to Medical service > Service categories, this will list all available medical services <c-image src="categories.png" alt="Medical service categories"></c-imag>

Click <strong class="button"><v-icon x-small color="white">mdi-plus</v-icon>Add new medical service category</strong> button and  fill required field in popup screen and click save. On success the service categories will be updated. From there now we can create medical services under this medical categories e.g. If we have laboratory service categories and in laboratory we provide many medical laboratory services all these services will be created in the list of medical services under category laboratory.

### Medical services
---
From your navigation drawer go to Medical services > Medical services this will give list of all medical service and their categories <c-image src="md_service.png" alt="Medical service list"></c-image>

### Create medical service
---
To create new medical service click <strong class="button"><v-icon x-small color="white">mdi-plus</v-icon>Add new medical service</strong> fill the required parts in popup screen select service type from drop down which you defined in medical service categories above. Select measure if service is measurable e.g admission is measured by days or hours or leave it if service is not measurable e.g X-ray service is not measurable.  Click save to save the service 

<c-image src="create_service.png" alt="Create new Medical service "></c-image>

### Edit medical service
Click edit button  <icon icon="pencil"></icon>  from the list and same popup screen will show up pre-populated edit and click save button.


