# Documentation for starting the app

## Step1: Get API KEYS

- make a .env file in your local
- make a `LOCAL_POSTGRES_DATABASE` key and get the key from your local postgres database

It should look like this
```
LOCAL_POSTGRES_DATABASE=postgresql://<user>:<password>@localhost:<port>/<database_name>
```

## Step2: Start Project

1. Install all the node_modules
$ `npm install`


2. Start Proect with nodemon
$ `npm run dev`

your project should start on localhost:5001

3. Start Coding!
