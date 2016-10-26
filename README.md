# egghead.io Instructor Center

---

# Getting started

## Dependencies

- Git
- Node
- Yarn
- [egghead-systems](https://github.com/eggheadio/egghead-systems)

## Endpoints

Endpoints are run locally via the `egghead-systems` project. To run them:

- Copy `.env_template` to `.env`.
- Copy the JWT from the query param at `http://egghead.dev:5000/users/jwt?return_to=http://localhost:3000`.
- Add this JWT to `.env`.

### Environments

You can swap out the value of `REACT_APP_EGGHEAD_BASE_URL` in `.env` for different environments. You will need a JWT for each environment. For example, you could copy the JWT from the query param at `https://egghead.io/users/jwt?return_to=https://instructor.egghead.io` for production.

## Scripts

_These assume you have `egghead-systems` running locally_

- `yarn` to install latest packages.
- `yarn start` to compile and lint the app; open `localhost:3000` to view.
- `yarn guide` to compile the living style guide; open `localhost:9009` to view.
- `yarn test` to run tests.

---

# Stack

- **Package management:** Yarn
- **Scripts:** Yarn
- **JS Flavor:** ES2016+ _(default `create-react-app`)_
- **Components:** React _(default `create-react-app`)_
- **Module Bundling:** Webpack _(default `create-react-app`)_
- **Transpilation:** Babel _(default `create-react-app`)_
- **Linting:** ESLint _(default `create-react-app`)_
- **Tests:** Jest _(default `create-react-app`)_
- **Living Style Guide:** React StoryBook _(extending `create-react-app` with `.storybook/`)_
- **State Tree:** Redux
- **Async Redux:** Redux Observable
- **Routing:** React Router
- **Style:** Tachyons

---

# Structure

## Components

Each directory inside `src` is a **component**.

A component is a directory organized _by feature_. It looks like this:

```
index.js
components/ (optional)
utils/ (optional)
```

- `index.js`: entry point; usually a stateless function component.
- `components/`: optional, sub-components.
- `utils/`: optional, `myModule.js` files.

## Screens

Some components are also **screens**.

A screen is a component that is also paired with a route and _connected_ to the state tree. It looks like this:

```
index.js
components/ (optional)
utils/ (optional)
state/
screens/ (optional)
```

- `index.js`, `components/`, `utils/`: same as a vanilla component, except `index.js` is usually a stateful class component with a `connect` export to wire `state` to props.
- `state/`: `actions/`, `reducers/`, and `epics/` to wire up state.
- `screens/`: optional, sub-screens paired with sub-routes.

## Promotion

All resources are eligible for *promotion* to facilitate code reuse. If a resource is shared by multiple directories, the principle of _least common ancestor_ will apply and that shared resource will me **promoted** to the least common ancestor’s directory.

## Root Screen

The *root screen* (`src/App`) is the container for the entire app. It has everything a screen has with a few additions:

- `index.js` wires up the component and state trees.
- `state/` wires up all sub-screen `reducers/` and `epics/`.
- `components/` contains "general" components that are used across the entire app. These components are like any other components, but they have two additional files:
  - `index.guide.js`: appends instances of the component to the living style guide.
  - `index.test.js`: adds snapshot tests for instances of the component.

---

# Styles

Component styling is done with default Tachyons classes.

---

# Unit Tests

Modules and components that could benefit from unit tests have an `index.test.js` file next to them.
