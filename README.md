# Registration Numbers WebApp

![Image Registration Numbers](http://backend-basics.projectcodex.co/reg_number_select_town.jpg)
* Registration number display for valid numbers in Cape Town, Paarl and Bellville.
* Displays number plates with rounded corners and a yellow background, with a black border.
* Users are able to add to the plates in the app by typing into a text input field and clicking "Add registration number".
* No numbers will be added if the field is empty..
* Newly added registration numbers are displayed at the bottom of the list.

## Getting Started
### Sections to cover

- [x] create an express server for the app
- [x] create a model (mongodb schema)
- [x] create routes file and views folder
- [x] create a public folder (css files)
- [x] create a github repository and deploy
- [x] deploy to heroku
- [x] connect to mLab

### Backend (Server side).
Clone or download this [respository](https://github.com/callumfraser/regnumbers.git) to your machine from GitHub.


##### Cloning

* Go to the terminal of your machine and navigate to your folder of choice, and copy and paste the following code;

         $ git clone https://github.com/callumfraser/regnumbers.git registration_webapp


### Prerequisites

What software do you need and how should you install it?
* NodeJS
* MongoDB
* Package.json dependencies

### Installing;
##### NodeJS

Before you try to install NodeJS open terminal and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

To install it on Ubuntu you can use the [apt-get package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions.md).

Alternatively you can use nvm, the [Node Version Manager](https://github.com/creationix/nvm#install-script.md) to manage the version of NodeJS on your PC.

##### Mongodb

How to [Install MongoDB](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04.md) - only do Part 1.

##### Package.json dependencies

```json
"dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.3",
    "mongoose": "^4.10.1"
  }
```

To install all dependencies required for the app to run, on the terminal navigate to the registration_webapp folder, and type  ``` npm install ``` .

## Running the app locally

* Open terminal and navigate to the registration_webapp directory. Once you are located in the root folder, type:

        $ nodemon or
        $ node index.js

* The following message should be displayed  ```App listening on port```

* Then open a new tab on your browser and type this ``` http://localhost:3001/reg_numbers``` and the app will open.

## Deployment

The app is deployed at Heroku and gitHub. The app also uses a MongoDB database hosted on mLab.

### Prerequisites

For this app you will need the following software and authentication:

- Node.js and npm installed.
- an existing Node.js app.
- a free Heroku account.
- the Heroku CLI (command line interface).

Start your app locally using the `heroku local` command which is installed as part of the Heroku CLI.

`$ heroku local web` Your app should now be running on <http://localhost:5000/>.

The Registration Number Generator App is deployed on [Heroku](https://regnumbers.herokuapp.com)


## Built With

* [MLAB](https://mlab.com) - Cloud MongoDB server
* [NPM](https://www.npmjs.com) - Dependency Management
* [Bootstrap](https://bootswatch.com/cerulean/) - The web framework used


## Versioning
``` "version": "1.0.0", ```


## Author

Callum Fraser

## License

This project is licensed under the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details
```   "license": "ISC" ```
