# WEBPACK
    CRA is built on top of "Webpack", a JS utility that:
        - Enables modules importing/exporting
            - Packages up all CSS/images/JS into a single file for browser
            - Dramatically reduces # of HTTP requests for performance
        - Hot reloading: when you change a source file, automatically reloads
            - Is very  clever and tries to only reload relevant files
        - Enables eary testing and deployment

# Modules
    CRA uses ES2015 "modules"
    This is a newer, standardized version of Node's require()
    You use this to export/import classes/data/functions between JS files

# To Default or Not?
    - Conventionally, default exports are used when there's a "most likely" thing to exporting.
    - For example, in a React component file, it's common to have the component be the default export.
    - You nevr need to make a default export, but it can be helpful to indicate the most important thing in a file.

# CRA & Components
    Good Style:
        - Each React component goes in separate file
            - src/Car.js for Car component
            - src/House.js for House component
        - Components extends Component (imported from React)
            - Export the component as the default object
        - Skeleton assumes top object is App in App.js
            - Best to keep this

# Assets and CRA
    CSS
        - Make a CSS file for each React component
            - House.css for House component
        - Import it at the top of House.js
            - Create-React-App will automatically load that CSS
        - Conventional to add className="House" onto House div
            - And use that as prefix for sub-items to style

    Images
        - Store images in src/folder with the components
        - Load them where needed, and use imported name where path should go