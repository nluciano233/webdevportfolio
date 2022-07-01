# Portfolio

This website was made to be used as my portfolio. Some of the design elements used in this project can be found on my github.


# Documentation

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

Now when you run
```
$ npm run scss
```
Your css file should be uptading automatically while you write your scss.
