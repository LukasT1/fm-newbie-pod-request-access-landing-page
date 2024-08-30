# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

  - [Useful resources](#useful-resources)

- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/LukasT1/fm-newbie-pod-request-access-landing-page]
- Live Site URL: [https://lukast1.github.io/fm-newbie-pod-request-access-landing-page/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Not really proud of this one. Fought it would be a quick one, but I really struggled with the layout. Maybe relaying too much on grids was a mistake in this one. In the end it felt like I needed way too much code for my media queries. Positioning the image and the pattern was very tedious. Tried it as a background image but in the end I decided to use it just as a plain img element.

In the end it works and I tested this on various viewports and looks allright.

### Useful resources

- [https://unused-css.com/tools/clip-path-generator] - Tried several online clip path tools, this one helped a lot and did exactly what I needed - allowed me to create unique shape.
- [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox] - This took me a while to figure out. Actually Chat GPT pointed this out. I was not able to make the SVG's responsive, turned out they had a predefined width and height. Replacing this with a viewbox attribute was the solution. -[https://blisk.io/] This tool helped me to test the website on various different devices. Good addition for using development tools in the browser.

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/LukasT1]
