---
title:  Inventory management
description: Spending on assets efficiently and make better business decisions
alt: my first blog post
createdAt: '2020-12-16'
tags:
  - documentation
  - inventory
  - medicine
  - wards
  - beds
author:
  name: Elirehema
  bio: Member (Software developer)
  image: https://avatars.githubusercontent.com/u/29277048?s=460&u=7b9129df86f037dc4fb021e22ecbf252f308e688&v=4
---

Spending on assets efficiently and make better business decisions
## Pharmacy
## Medicine 
## Blood bank
The blood bank section is a simple Blood Bank Management System (BBMS) to track blood types and blood bank stock. The aim is to minimize the manual work for Blood bank and  [Blood groups](https://www.nhs.uk/conditions/blood-groups/) management. All blood groups were defined in the system and its definition considered blood groups and their RH factor as explained [here](https://www.nhs.uk/conditions/blood-groups/).  The blood bank give the list of available blood groups and their stock and option to edit.  Go to Navigation drawer > Inventory > Blood bank <c-image src="blood_bank.png" alt="Blood bank list"></c-image>
### Update blood group stock
To update blood group stock click the edit button <icon icon="pencil"></icon>  in action section. The popup screen will appear with group name filled, and a field Count(i.e the number of bags you want to add to the stock), On adding any value to this field another field Counts(In total) will display total number of bags(i.e current available + new added).  <c-image src="update_blood_bank.png" alt="Update Blood bank list"></c-image>
## Wards 
According to [Collins dictionary](https://www.collinsdictionary.com/dictionary/english/hospital-ward) A ward is a room in a hospital which has beds for many people, often people who need similar treatment. From your Navigation drawer > Inventory > Wards this gives you the list of hospital available wards with total numbers of available beds in particular ward and option to create a new ward. <c-image src="wards_list.png" alt="Wards list"></c-image> 
### Create new ward 
To create a new ward click <strong class="button">+ CREATE NEW ward</strong>  button the popup screen will shows up <c-image src="create_ward.png" alt="Wards list"></c-image> add ward name an click save button. The same when you want to edit a ward click edit button the same popup screen will shows up but with ward name already filled edit and click save.
### View ward 
To view a ward click ward name from the list of wards and the ward screen will open. But this time the ward will show the numbers of beds available and their status (Occupied or Un-occupied) <c-image src="view_ward.png" alt="View ward"></c-image> For the occupied bed i.e there is patient actively admitted in one othe ward bed the bed will have geen filled color  and on-hover the dialog screen will display the patient admitted informations. <c-image src="view_occupied_bed.png" alt="Wards list"></c-image>
## Beds