# Portfolio

This website was made to be used as my portfolio. Some of the design elements used in this project can be found on my github.


# Documentation

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

## Installing and configuring bootstrap icons

[Here is a video](https://www.youtube.com/watch?v=DPnJldwv22o) that explains how to use bootstrap icons.

For this project since I'm going to need very few icons, I will just copy and paste the svg without installing bootstrap-icons package.

