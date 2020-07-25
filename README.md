# Table of contents
* [General info](#general-info)
* [Used Stack](#used-stack)
* [Development decisions](#development-decisions)
* [Folder Structure](#folder-structure)
* [Setup](#setup)
* [Demo](#demo)
* [Future Enhancement](#future-enhancement)

# General Info 

Next.js App example for admin dashboard


# Used Stack
  - Next.js
  - React
  - ES6
  - ReactStrap
  - Auth0
  - Sass( css preprocessor )
  - React hook form
  - npm


# Development decisions

<b>Why next.js</b>
while we developing a dashboard which no need to SSR or SEO enhancment but here is some next features which make it better choice

#### Automatic Routing
Any URL is mapped to the filesystem, to files put in the pages folder, and you don't need any configuration (you have customization options of course).

#### Single File Components
Using styled-jsx, completely integrated as built by the same team, it's trivial to add styles scoped to the component.

#### Ecosystem Compatibility
Next.js plays well with the rest of the JavaScript, Node, and React ecosystem.

#### Automatic Code Splitting
Pages are rendered with just the libraries and JavaScript that they need, no more. Instead of generating one single JavaScript file containing all the app code, the app is broken up automatically by Next.js in several different resources.


<b>Why Auth0</b>

Easy to setup and already have all the features for signup and signin with high secuity level.


# Folder Structure 

```
├── actions                 # All actions needed for requests       
├── components              # HOC, BaseLayout Component, Shared component
├── pages
│   ├── api                 # creating the api as a proxy to Node server
│   ├── _app.js             # wrap all the pages here so they can have the same look
│   └── index.js            # Home page
│   └── parcel              # handle parcels ( list, create )
│   └── tractors            # handle Tractors ( list, create )
│   └── processing          # handle Tractors ( list, create )
├── lib/api                 # A classes to handle Api request and prepare data
├── public                  # all static content ( images, fonts, ...etc )
├── utils                   # Mainly contain the auth0 setup
├── styles                  # All styling needed for the app
└── README.md
```

# Setup

install dependencies:

```sh
npm install 
```

build app

```sh
npm run build 
```

Run built 

```sh
npm start
```

Run localy

to run localy you need to create `.env.development.local` file first and add two variables 
```
AUTH_DOMAIN=<Auth0_Domain>
AUTH_CLIENT_ID=<Auth0_client_id>
AUTH_CLIENT_SECRET=<Auth0_client_secret>
AUTH_REDIRECT_URI=<Auth0_Callback_URL>
AUTH_POST_LOGOUT_REDIRECT_URI=<Localhost_URL>
AUTH_COOKIE_SECRET=<Any_Random 32 character>
AUTH_NAMESPACE=<Auth0_Namespace>
AUTH_AUDIENCE=<Auth0_audience>
API_URL=<Local Api path>
```

```sh
npm run dev 
```


# Demo
https://dashboard-admin.vercel.app/

# Node.js Api Repo
https://github.com/HanyRabah/dashboard-admin-api

# Future Enhancement

- Better UI/UX
- Dashboard charts for the homepage

Thanks.
