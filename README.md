# Autocomplete-Search-Backend

Build using Express and Node.js as API endpoint for the [front-end](https://github.com/edsonha/Autocomplete-Search-Frontend) app.
The [web application](https://autocomplete-search-frontend.herokuapp.com/) is hosted on Heroku.

## To run on local environment

```
  1. npm install
  2. Create new .env file
  5. Put these two lines in .env file
     GITHUB_PERSONAL_TOKEN=token ${YOUR_PERSONAL_GITHUB_TOKEN}
     PORT=3001
  4. npm start
  5. Run http://localhost:3001/ on your website and get welcome message "Welcome to Express REST API"
```

## How to get your PERSONAL GITHUB TOKEN

```
  1. Go to your Github. On your profile picture at top right, click and select "Settings"
  2. Select "Developer settings"
  3. Select "Personal access tokens"
  4. Select "Generate new token"
  5. Fill in the note with any description and checkbox the "public repo". Click "Generate token"
  6. Copy the generated token into the .env file
```

![Github Token](https://user-images.githubusercontent.com/37479186/79455543-9b88d980-801f-11ea-9849-88d42e368104.jpg)

## Run test

```
  npm test
```

## Run test coverage

```
  npm run test:coverage
```
