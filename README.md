# Portfolio

This website was made to be used as my portfolio. Some of the design elements used in this project can be found on my github.


# Documentation
## nodemon 
To start the server on another port configure the script in package.json like this
```
"devstart": "PORT=3001 nodemon ./bin/www"
```

## Installing and configuring sass

I started the project by installing nodemon and scss. I will skip the explanation for the nodemon part.

To install scss do 
```
$ npm i node-scss --save-dev
```

In this case scss is only needed as dev dependency because the code needs to be compiled only once to css locally then it will get pushed to github.

Now you need to setup the script to make scss compile the code into css. Into `package.json` add the script
```
"scss": "node-sass --watch src/stylesheets/style.scss public/stylesheets/style.css"
```
(don't forget to make the directories and files mentioned in the script).

Now when you run:
```
$ npm run scss
```
Your css file should be updating automatically while you write your scss.

The scss file is outside the public folder, because the public folder is meant to be accessible by anyone, that's why only the compiled css file is here.

## Installing and configuring bootstrap icons

[Here is a video](https://www.youtube.com/watch?v=DPnJldwv22o) that explains how to use bootstrap icons.

For this project since I'm going to need very few icons, I will just copy and paste the svg without installing bootstrap-icons package.

## Installing and configuring Terser
We have to put our javascript inside the "public" folder, which means that it is accessible by anyone. Terser is an alternative for Uglify js that supports ES6.

We are going to use Terser js for 2 reasons:
1. To minify our code, so it takes less time to downlaod by the end user.
2. To "hide" our javascript by making it hard to read by humans.

```
$ npm i terser --save-dev
```

To start, create inside /src/javascript a file named `terser.js`.

Add inside of it all the config files, go and see the file.

After that go into package.json and add the script so we can easily run the file whenever we need.
```
"runterser": "node ./src/javascript/terser.js"
```

The uglified code will be saved inside public/javascripts.

# The design

## Navigation menu
The navigation menu is made entirely with CSS using a checkbox as the button that makes the menu pop up. 

It is good practice to use as little javascript as possible for important elements of the website because there may be some users on the web that have disabled javascript.
