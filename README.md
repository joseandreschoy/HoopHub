# HoopHub

A web application for basketball lovers to engage with each other around the latest news in basketball!

The application at present only allows you to post - the code for commenting has not yet been finalised. Furthermore, although working before, I seem to have broken the code for login, which after registering should immediately take you to home so you can post as desired. Sometimes it functions, sometimes it doesn't. The same applies for the login section.

There is no content as of yet in explore, messaging and notifications, they will soon be implemented, along with other stylistic features.

## Lessons Learned

I had an issue building out the components as I could not parse the logged in users. I found a function called useContext which allowed me to pass state throughout my application based on the logged in users session, and managed to pass that through so that the user would be able to post.

I used NextUI for this project which I had never used before, so it took some adjusting from having SCSS files for styling to directly imported it into the jsx. It did make some things easier, as I it was technically easier to style components directly in the javascript, but made some components quite messy. I suppose there is a caveat with this in terms of would I rather have had an easier styling path or better readability? I have had a lot of fun creating this application, and will continue to polish and work on this - hopefully once I have fixed login and authentication, I can move onto a messaging feature between users in the application.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

#RAPID API

To generate a key for the external API visit - https://rapidapi.com/api-sports/api/api-nba/

Remember to put the key in the .env file.
