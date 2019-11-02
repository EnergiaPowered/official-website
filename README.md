# Energia Powered Official Webite

This's the main source code of `Energia Powered` website.

**Tools used**

1. [Fontawesome](https://scotch.io/tutorials/using-font-awesome-5-with-react) - [Footer Component Demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/Footer.js)

2. [React-multi-carousel](https://www.npmjs.com/package/react-multi-carousel) - [Partners Component Demo](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/Partners/Partners.js)

**Notes:**

- Routing is already setup - Go to `front/src/App.js` file and add your routes
- Add the Homepage Sections at `front/src/components/HomePage/index.js`

**Tips:**

- To set the background color of the header properly:

  - First, we should look on the example structure

  ```
  HomePage (The container component)
  |-- index.js
  |-- index.css
  |-- Header
      |-- Header.js
      |-- Header.css
  |-- Supervisor
      |-- SupVis.js
      |-- sup.css
  ```

  1. Make the container component and give it `page-component` class like that in [`front/src/components/HomePage/index.js`](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/index.js) and give it the appropriate background image like that in [`front/src/components/HomePage/index.css`](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/index.css)

  2. Make the header component and give it `header-section` class like that in [`front/src/components/HomePage/Header/Header.js`](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/Header/Header.js)

  3. Make the sub header component and give it the class `bg-section` like that in [`front/src/components/HomePage/Supervisor/SupVis.js`](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/Supervisor/SupVis.js)
  4. Make the other components and give it `bg-section` and control the spaces as u like

- To set the font size of each component properly:

  1. Every main section should have the structure:

     - the title of the section should be `h2` tag with the classes `section-title text-center`
     - The rest of the content

  2. Give the root tag in the component the class `component-font` like that in [`front/src/components/HomePage/Supervisor/SupVis.js`](https://github.com/EnergiaPowered/official-website/blob/master/front/src/components/HomePage/Supervisor/SupVis.js)
