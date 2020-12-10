# M3 - `README.md` Example



# Quick Compo

<img src="/Users/enriquecoscarelli/Downloads/minilogo.png" alt="minilogo" style="zoom:75%;" />

## Description

***dataBASE*** is the resource for all BASE jumpers around the world to check the weather conditions of different jumps across the world cross referencing latitude and longitude of exit points and the Windy API

***dataBASE*** has been developed as a part of the final project in [Ironhack](https://www.ironhack.com/es/desarrollo-web/barcelona?utm_source=google-sea&utm_medium=cpc&utm_campaign=BCN_app_campus_brand_GA_ES&utm_term={keywords}&gclid=Cj0KCQjwo6D4BRDgARIsAA6uN19LKsx0pvTH-iUz-RfrGakzau9RGdhJaixWuX32X92njICzz66RYbAaAncuEALw_wcB) Web Developement bootcamp with the [Windy](https://api.windy.com/) API.

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
- **Login:** As a user I can login to the platform so that I can log my exit points
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add Exit Points** As a user I can add an exit point
- **Edit Exit Points** As a user I can edit an exit point
- **Add PreOpp Checklist** As a user I can add players to a tournament
- **Edit PreOpp Checklist** As a user I can edit a player profile to fit into the tournament view
- **View Tournament Table** As a user I want to see the tournament table
- **Edit User** As a user I can edit my profile, add or substract exit points

## Backlog

User profile:

- see my profile
- see exit point
- Add weather widget
- add geolocation



# Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | SplashPage           | public `<Route>`           | Home page                                                    |
| `/signup`        | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/exitpoint`     | TournamentListPage   | user only `<PrivateRoute>` | Shows all exit points in a list                              |
| `/exitpoint/add` | TournamentListPage   | user only `<PrivateRoute>` | Edits a exit points                                          |
| `/exitpoint/:id` | TournamentDetailPage | user only `<PrivateRoute>` | Details of a exit points to edit                             |
| `/exitpoint/:id` | n/a                  | user only `<PrivateRoute>` | Delete exit points                                           |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |

## Components

- LoginPage
- SplashPage
- ProfilePage
- SignupPage
- EditProfilePage
- EditExitPointPage
- ExitPointPage
- EditProfilePage
- Navbar

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Exit Point Service
  - exitPoint.list()
  - exitPoint.detail(id)
  - exitPoint.add(id)
  - exitPoint.delete(id)
- User Service
  - user.detail(id)



# Server / Backend

## Models

User model

```
{
  user: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [{type: Schema.Types.ObjectId,ref:'Exit'}]
  userAgreement: {type: boolean, required: true, default: false}
}
```

Exit model

```
 {
   name: {type: String, required: true},
   img: {type: String},
   aproachLat: {type: Number, required: true}
   aproachLong: {type: Number, required: true}
   aproachDescription: {type: String}
   exitLat: {type: Number, required: true}
   exitLong: {type: Number, required: true}
   exitDescription: {type: String}
   landiZoneLat: {type: Number, required: true}
   landingZoneLong: {type: Number, required: true}
   landingZoneDescription: {type: String}
   loggedByUser: {type: Schema.Types.ObjectId,ref:'User'}
   altitud: {type: number}
   
 }
```



## Backend routes

| HTTP Method | URL             | Request Body            | Success status | Error Status | Description                                                  |
| ----------- | --------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile` | Saved session           | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`  | {name, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`   | {username, password}    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`  | (empty)                 | 204            | 400          | Logs out the user                                            |

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com/)

Wireframe

The url to your presentation slides

[Figma Link](http://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88)

https://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88