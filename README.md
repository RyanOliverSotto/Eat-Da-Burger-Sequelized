# Sequelized Burger Logger

### Overview
This application is a MVC "burger logger" that utilizes MySQL, Sequelize, Node, Express and Handlebars.  Node, MySQL, and Sequelize are used to query and route data into the app, and Handlebars is used to generate the HTML.

### Purpose
Burger is a restaurant app that lets users input the names of burgers they would like to eat.  When a user submits a new burger in the add burger section, the burger will be added to either the "Burgers to Eat" or the "Devoured" section depending on which option is selected.

Each burger in the "Burgers to Eat" section has a "DEVOUR IT!" button next to it.  When the user clicks the button, the burger moves to the "Devoured" section with a "MAKE ANOTHER!" button next to it.  When the "MAKE ANOTHER!" button is clicked the burger moves back to the "Burgers to Eat" section.  Every burger is stored in a database with a value of 1 if the burger is devoured and 0 if not.


#### Model setup
The database schema is created on the fly using sequelize and the model exported from burger.js in the models folder.

#### Controller setup
The controller routes are saved in burger_controller.js and exported as router. The burger_controller.js file links to the model file burger.js which links to the database.
* The get ("/") route grabs all the burgers from the database.  
* The post ("/") route creates a new burger in the database with the name and devoured value of the added burger.  The page is then redirected to the get route to display all burgers including the new addition.
* The put ("/burgersmake/update") route updates the devoured value of the burger to false in the database when the button next to it is pushed.  The page is then redirected to the get route to display all burgers including the changed position of the updated burger.
* The put ("/burgerseat/update") route updates the devoured value of the burger to true in the database when the button next to it is pushed.  The page is then redirected to the get route to display all burgers including the changed position of the updated burger.


#### View setup
The views folder contains the handlebar files.  The information is rendered to index.handlebars which is then sent to main.handlebars via Handlebars.  Buttons are rendered by index.handlebars which relay information to the database through the controller and model files.

This application has been uploaded to Heroku and can be viewed here: [corey-burger-logger](https://corey-burger-logger.herokuapp.com/)
