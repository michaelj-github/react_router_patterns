# Part 2: React Router Color Factory

## The goal of this exercise will be to use React Router to build an app that lets you view colors and add new colors

### Solution Notes

    For this exercise I used starter files for a prior version of React (16.14.0) for compatability.
    mkdir react_router_patterns && cd react_router_patterns && mkdir color_factory && cd color_factory
        or if react_router_patterns already exists
    cd ~/react_router_patterns && mkdir color_factory && cd color_factory
    cd ~/react_router_patterns && cd color_factory
    copy starter files from recommended download for prior version

```
https://www.springboard.com/archeio/download/7f23f4f374db4e66a4384b6e47201217/
```

    npm install
    npm install react-router-dom@5.2.1

### Execution

    npm start

### User Stories

    As a user, I can go to /colors to see a list of all available colors.

    As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.

    (The route here should be /colors/:color )

    As a user, I can click on a button to show a form that will let me add a new color.

    Note that you can give an input a type of color if you’re trying to select a color. (The route here should be /colors/new)

    As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.

    As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page.

    As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page.

Here’s an idea of what your app could look like:

[Color Factory](https://curric.springboard.com/software-engineering-career-track/default/exercises/react-router-patterns/_images/color-factory.gif)
