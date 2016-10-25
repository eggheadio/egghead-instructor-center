# egghead.io Instructor Center

---

# Getting started

## Dependencies

- Git
- Node
- Yarn
- Run `yarn` to install dependencies
- Set up [egghead-systems](https://github.com/eggheadio/egghead-systems)

## Connecting to egghead.io endpoints

You need to obtain a JWT and create a `.env` file in the root of this project. `.env_template` shows an example to 
follow. `REACT_APP_EGGHEAD_BASE_URL` is the api you are targeting and `REACT_APP_EGGHEAD_JWT` is **your** JWT.

Login isn't fully implemented, so if you wanted to get a token from `egghead.dev:5000` (my local server is this), you
would follow:

`http://egghead.dev:5000/users/jwt?return_to=http://localhost:3000`

or for production you can do:

`https://egghead.io/users/jwt?return_to=https://instructor.egghead.io`

and grab the value of the `jwt` url param for the `.env` file.

Ghetto for now 😄

## Scripts

_These assume you have `egghead-systems` running locally_

- `yarn start` to run compilation and linting; open `localhost:3000` to view.
- `yarn guide` to compile living style guide; open `localhost:9009` to view.
- `yarn test` to run tests.

---

# Tech

- Package management: Yarn
- Scripts: Yarn
- JS Flavor: ES2016+ _(default `create-react-app`)_
- Components: React _(default `create-react-app`)_
- Module Bundling: Webpack _(default `create-react-app`)_
- Transpilation: Babel _(default `create-react-app`)_
- Linting: ESLint _(default `create-react-app`)_
- Tests: Jest _(default `create-react-app`)_
- Living Style Guide: React StoryBook _(extending `create-react-app` with `.storybook/`)_
- State Tree: Redux
- Async Redux: Redux Observable
- Routing: React Router
- Style: Tachyons CSS classes

---

# Structure

## Root

```
// src/
index.js
App/
state/
```

- `index.js`: Entry point for the app
- [`App/`: Component tree](#component-tree) _(organized by feature)_
- [`state/`: State tree](#state-tree) _(organized by state slice)_

### Component tree

At the top of the component tree is the `App` component. This is the entry point to the application `screens` and the primary container that the application resides in:

```
// src/App/
index.js
index.test.js
screens/
components/
```

`App` is a React component, composed of many other React components. Some of those components are designated as **screens**, which are _connected_ components that manage state and usually represent a route within the application. Screens are optionally composed of additional screens (sub-routes) and components.

A Screen is a top level (connected/smart) container for a particular piece of functionality or group of features. The term screen is a way to designate these are “important”, likely designate a route, and is probably connected and stateful.

A screen has a named folder that represents the feature:

```
// src/App/screens/ExampleScreen/
index.js
components/ (optional)
screens/ (optional)
```

Within a screen’s `components` folder there will be the individual components that comprise a screen. These components will be stateless presentational “dumb” components (for the most part, always exceptions!) that receive props from their connected parent (screen).

Components can be folders that contain an `index.js` or simply a JS file representing the component. A component would be a folder if it had non-shared sub-component elements:

```
// src/App/screens/ExampleScreen/components/ExampleComponent
index.js
components/ (optional)
```

Components do not have a `screens` directory, but they can contain additional components (all the way down!)

Component styles should just be Tachyons classes. Eventually we will implement the egghead.io style guide components.

All resources are eligible for promotion to facilitate code reuse. If screens share a resource, the principle of _least common ancestor_ will apply and that shared resource will me **promoted** to the least common ancestor’s directory.

When a component is promoted all the way to the root level `src/App/components` directory, it generally gets two new files: `index.guide.js` and `index.test.js`:

```
// src/App/components/ExampleComponent/
index.js
index.guide.js
index.test.js
components/ (optional)
```

- `index.guide.js` can be used to append the component to the living style guide (React Storybook).
- `index.test.js` can be used to create snapshot test(s) for the component; since it is being used in the style guide and across the app, a snapshot test can help notify of unexpected instance changes.

### State tree

At the root of the state tree are a few files and directories:

```
// src/state/
rootReducer.js
rootEpic.js
utils/
slices/
```

- `rootReducer` and `rootEpic` initialize the state tree pieces.
- `utils` contains shared utilities for the state tree.
- `slices` contains state slice folders.

Each state slice folder contains the code needed to wire up that piece of the state tree.

```
// src/state/exampleSlice/
actions/
epics/
reducers/
```

Tests can be added where useful for these pieces next to the module being tested. 
