---
title: Authentication and authorization
description: Learning how to ospic authentication works to access the system informations
img: first-blog-post.jpg
alt: my first blog post
createdAt: '2020-12-13'
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


### Users authentication
Ospic deals with human confidential information. With this understanding we have implemented strict Authorization and Authentication methods just to make sure that the one using the system is exactly who is pretending to be and is allowed to perform what operation is trying to perfom. Soon after installation the database comes with default user for testing `username = demo` and `password=password`. The system admin can navigate to [Settings and configurations](/docs/a/#settings-and-configurations) to create a new user, assign them roles then login.

