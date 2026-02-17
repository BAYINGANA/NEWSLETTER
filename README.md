# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge]

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

**Desktop — Default**

<img width="651" height="483" alt="image" src="https://github.com/user-attachments/assets/142d6b73-f00b-4cbc-adab-02d152dce218" />

**Desktop — Error state**

<img width="669" height="569" alt="image" src="https://github.com/user-attachments/assets/8c79dd4d-0ba9-4e34-b20a-0a4ae9c60909" />

**Desktop — Success**

<img width="669" height="569" alt="image" src="https://github.com/user-attachments/assets/e63bc0da-318b-4567-9132-e6d8f1150431" />

**Mobile — Default**

<img width="188" height="415" alt="image" src="https://github.com/user-attachments/assets/dfa8d0c0-c047-4cd1-bcc8-4de075a7e4ae" />

**Mobile — Success**

<img width="190" height="414" alt="image" src="https://github.com/user-attachments/assets/6f52328a-9cef-4ad8-8ecc-1f47dbdc6060" />

### Links

- Solution URL: [Frontend Mentor solution](https://your-solution-url.com)
- Live Site URL: [https://bayingana.github.io/NEWSLETTER/](https://bayingana.github.io/NEWSLETTER/)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first responsive design
- Vanilla JavaScript (form validation, success state)

### What I learned

**Responsive layout with CSS Grid and Flexbox**  
The desktop layout uses a two-column CSS Grid, while mobile switches to a full-screen flex column. Managing the cascade between the `900px` and `768px` breakpoints taught me to always explicitly override properties in the narrower breakpoint rather than relying on inheritance.

**Form validation without a library**  
A simple regex handles email validation client-side. The error state is toggled by adding/removing a class on the input, which drives both the red border and background tint through CSS alone.

```js
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
```

**Mobile image swap via JavaScript**  
The `content: url()` CSS trick for swapping SVG sources is unreliable across browsers. Swapping `src` directly in JS on load and resize proved far more consistent.

```js
function updateHeroImage() {
  heroImg.src = window.innerWidth <= 768
    ? 'assets/images/illustration-sign-up-mobile.svg'
    : 'assets/images/illustration-sign-up-desktop.svg';
}
updateHeroImage();
window.addEventListener('resize', updateHeroImage);
```

**Button active/hover states**  
Both the subscribe and dismiss buttons use a coral gradient on hover and active, with a matching box-shadow glow — applied identically so the interaction feels consistent.

```css
button:hover,
button:active {
  background: linear-gradient(135deg, var(--tomato), var(--tomato-hover));
  box-shadow: 0 8px 24px hsla(4, 100%, 67%, 0.45);
}
```


## Author
- Live Site — [https://bayingana.github.io/NEWSLETTER/](https://bayingana.github.io/NEWSLETTER/)
