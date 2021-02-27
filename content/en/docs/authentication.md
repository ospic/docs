---
title: Authentication and authorization
description: Learning how to ospic authentication works to access the system informations
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
To access the system information one need to login using their username and password. The login screen appears to look like the screenshot below.
<c-image src="authentication_screen.png" alt="Index"></c-image>
For demonstration purpose you can try to login into our [Demo server]() with `Username: demo, Password: password`. 

### Create new user
In your navigation drawer select [Settings and configurations](/docs/a/#settings-and-configurations). This will give you a list of users. With administrator priviledge you can now create a new user by clicking <strong class="button">CREATE NEW user</strong> button. Fill the required fields NOTE: the username and password will be used later for login, select the role of user in the system if no role provided the user with be have 
<strong >USER ROLE</strong> by default. Checking Is staff checkbox will open selection for department where you want to assign this user and automatically assign this user as member of that department. Now the user can login with provided username and password. <c-image src="newuser.png" alt="Create user screenshot"></c-image>


### Edit user


### Users authentication
Ospic deals with human confidential information. With this understanding we have implemented strict Authorization and Authentication methods just to make sure that the one using the system is exactly who is pretending to be and is allowed to perform what operation is trying to perfom. Soon after installation the database comes with default user for testing `username = demo` and `password=password`. The system admin can navigate to [Settings and configurations](/docs/a/#settings-and-configurations) to create a new user, assign them roles then login.

