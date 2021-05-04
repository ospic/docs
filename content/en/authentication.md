---
title: Authentication 
description: Authentication is required for each user to make sure the individual using the system is recognized by the system.
img: first-blog-post.jpg
alt: my first blog post
createdAt: '2020-12-13'
subtitle: Users authentication and authorization
badge: beta
tags:
  - documentation
  - authentication
author:
  name: Lightness
  bio: Member
  image: https://thumbs.dreamstime.com/b/beautiful-girl-female-programmer-occupation-jobs-programming-laptop-screen-code-behind-vector-75659699.jpg
---

### Login page
---
To access the system information one need to login using their username and password.  The logged-in user authentication information are valid for 24hrs or as long as user is not logged out. <icon icon="power"></icon>.  For authentication the login screen will appears as below.
<c-image src="authentication_screen.png" alt="Index"></c-image>
For demonstration purpose you can try to login into our [Demo server](https://app.ospicx.com/) with
 - `Username: demo`
 - `Password: password`. 


### Create new user
--- 
In your navigation drawer select [Settings and configurations](/setting-and-config). This will give you a list of system users. Click <strong class="button">CREATE NEW user</strong> button, fill the required fields.
NOTE: the username and password will be used later for login, select the role of user in the system if no [role](/setting-and-config#roles--authorities) provided the user with be have 
<strong >USER ROLE</strong> by default. Checking Is staff checkbox will mark this user as member of perticular department and open drop down menu for selecting department where you want to assign this user and automatically assign this user as member of that department. Now the user can login with provided username and password. <c-image src="create_user.png" alt="Create user screenshot"></c-image>



### Edit user
--- 
Most of create and edit operation in the system shares the same form with one difference behaviour. The create forms are blank forms while edit forms are pre-populated  with entity data's you want to edit. To edit existing user in your users list click the edit icon <icon icon="pencil"></icon> you will be provided with popup screen with information already filled for editing.  <c-image src="create_user.png" alt="Edit user screenshot"></c-image>

### Delete user
--- 
In your users list click trash-can <icon icon="trash-can"></icon> icon, The dialog screen will popup to ask if you real mean to delete this user. <c-image src="delete_user.png" alt="Create user screenshot"></c-image> Confirming by yes or no the operation will succeed as you asked only if the one logged in is administrator or have permission to delete user. 

### Default database user
--- 
Ospic deals with human confidential information. With this understanding we have implemented strict [Authorization and Authentication](/security) methods just to make sure that the one using the system is exactly who is pretending to be and is allowed to perform what operation is trying to perfom. Soon after installation the database comes with default user for testing
 - Username: demo 
- Password: password
The system admin can navigate to [Settings and configurations](/a/#settings-and-configurations) to create a new user, assign them roles then login.

### Logout
After your day activities you may want to call it a day,  just click a button with power icon <icon icon="power"></icon> in your toolbar as shown in dashboard [Toolbar section](docs/homepage#tool-bar) on logout success the [login screen](/authentication#login-page) will appear.
