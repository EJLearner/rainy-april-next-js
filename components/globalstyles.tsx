import  {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --accent-yellow: rgb(255,153,0);
    --white: rgb(240, 240, 240);
    --black: rgb(12, 12, 12);
    --blue: rgb(0, 112, 192);
    --gray: rgb(127, 127, 127);
    --gutter-width: clamp(35px, 8vw, 70px);
    --arrow-space-from-edge: 3px;
    font-family: 'Segoe UI', 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
  }

  /* css reset rules start here */
  ng rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// rainy april day rules start here
body,
html {
  color: #111;
  background-color: rgb(240, 240, 240);
  height: 100%;
}

a {
  // keep links the same color as the surroundings by default
  color: inherit;
  // show underline on hover, not all the time
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
`;

export default GlobalStyle;
