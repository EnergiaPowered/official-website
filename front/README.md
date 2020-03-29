# Energia Powered Official Webite

This is the main source code of the front of `Energia Powered` website.

## The structure of the website

- assets - here are all the images or any assets we may need
- components - here are all presentational components that has no business logic
  - ExampleComponent (e.g: Footer)
    - index.js
    - style.css
    - tests
- containers - here are all components that has business logic
  - ExampleComponent
    - index.js
    - style.css
    - tests
- pages - here are all the components that represents the react routes
  - HomePage
    - index.js
    - index.css
    - components
      - Header
        - index.js
        - style.css
        - tests
    - tests

**Tools used**

1. [Fontawesome](https://scotch.io/tutorials/using-font-awesome-5-with-react) - [Footer Component Demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/pages/HomePage/Footer)

2. [React-multi-carousel](https://www.npmjs.com/package/react-multi-carousel) - [Partners Component Demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/Partners/Partners.js)

3. [Bootstrap 4.3](https://getbootstrap.com/)

4. [react-testing-library](https://github.com/testing-library/react-testing-library)

5. [Jest](https://jestjs.io/docs/en/getting-started)

6. [React-helmet](https://github.com/nfl/react-helmet) - [HomePage component demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/pages/HomePage/index.js)

7. [React-image-enlarger](https://github.com/bmcmahen/react-image-enlarger) - [Structure component demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/pages/AboutPage/components/Structure/index.js)

8. [React-page-progress](https://github.com/nomangul/react-page-progress/) - [Demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/App.js)

**Notes:**

- Routing is already setup - Go to `/src/globals/routes.js` file and add your routes
- Add the Homepage Sections at `/src/pages/HomePage/index.js`
