# WOX

This is a capstone project done as part of WDI-36 at General Assembly. Warning: there is a lot of work to be done!

An app that helps inspire and form better relationships through walking. The app provides inspiration and connections through recommendations of places to walk. The app will also provide messaging ability (one users will be able to message another-- and they will be able to see these on a message page). Finally, the app will be able to "favorite" walks-- whether it be their own or another users-- they will be able to see these favorited walks on their profile page. These favorited walks will potentially be synced up with a calendar also found in the profile page.

As you can see.. there is a lot to do-- a lot more than I could have possibly done in a week. In hindsight, I probably should have used Rails because the backend for this kind of app is a huge understaking.

I will continue to refactor this project and will provide updates in this .md as I progress.

This app was made with Mongoose, Express, React, and Node.js. It will be deployed to Heroku.

The Heroku link (not currently working yet) can be found here: https://polar-citadel-43832.herokuapp.com/

## What's been done:
  - Walks
    + Users can Create, Read, and Delete Walks
    + Update has been set up but requires some debugging
    + Read also needs to pull in userName to submit walks -- will add this later
  - All pages have been set up and are ready to add individual components
  - All routes for CRUD / API have been set up
  
  
## To do:
  - Push to Heroku (soon)
  - Render Messages page -- and create the ability for one user to message another
  - Create Message seed data to render as a test  on the message page
  - Fix CRUD bugs relating to Walks
  - Test CRUD for Messages
  - Utilize authorization on a larger scale
  - Create a calendar that can pull in dates associated with walks
  - Pull in user information into the User/Profile page

## Summarization of Current Bugs
  - Create Walk
  - Update doesn't pull in userName or userID-- which means update data doesn't save
  - Render Message page-- currently, the route doesn't seem to be working (and not for obvious reasons)

    
 
