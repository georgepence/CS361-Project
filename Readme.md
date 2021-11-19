# RVA Museums Readme

Website: http://flip3.engr.oregonstate.edu:17776`   `(vpn required)

This is a React app, with the following overall structure:

# Roadmap/Directory Structure:

## Directory Overview
- Top level: server.js, database & routes directories.
- **mac-app**: React app code.

## mac-app Directory Overview
- public: some static files. The index.html file that the site gets injected into.
- **src**: React files. This is where the UI gets built.
- **App.js**: This is the Component that wraps everything else.
- Routes/**Home**.js: This is the Container for RvaMuseum.js and Museum 'views'. Various components exist here or in a sub-Component, but only selected Components are visible at a time. This allows different views / pages
- Routes/**Exhibitions**: View all Richmond exhibitions
- src/**Components**: React components, i.e. pre-built elements. This is where most stuff happens.
    - **RvaMuseums**.js: 'home page' view / page
    - **Museum**.js: view one museum's information
    - **Exhibition**: view all Richmond exhibitions
- src/DataAccess: fetch (GET) functions.
- Routes/Credits.js: Web developer credits.
