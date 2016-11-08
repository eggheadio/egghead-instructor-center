# egghead.io Instructor Center

[ ![Codeship Status for eggheadio/egghead-instructor-center](https://app.codeship.com/projects/3a4afe00-8808-0134-e6cc-2e5dfce30ebc/status?branch=master)](https://app.codeship.com/projects/183842)

---

# Getting started

## Dependencies

- Git
- Node
- Yarn
- [egghead-systems](https://github.com/eggheadio/egghead-systems)

## Environments

- Copy `.env_template` to `.env`.
- For each environment in `.env`, paste the JWT you get from `{environment}/users/jwt?return_to=http://localhost:3000`.

## Scripts

- `yarn` to install latest packages.
- `yarn start` to develop.
  - Runs APIs, app, style guide, linting, and compiling.
  - Opens browser tabs for app and style guide.
- `yarn test` to run tests.

---

# Stack

- **Package management:** Yarn
- **Scripts:** Yarn
- **JS Flavor:** ES2016+ \*
- **Components:** React \*
- **Module Bundling:** Webpack \*
- **Transpilation:** Babel \*
- **Linting:** ESLint \*
- **Tests:** Jest \*
- **Living Style Guide:** React StoryBook \*
- **JS Utils:** Lodash
- **State Tree:** Redux + Redux Observable
- **Routing:** React Router
- **Style:** Tachyons
- **Fake API:** JSON Server + Faker

_\* Relies on `create-react-app` setup_

---

# Structure

## Root (`/`)

Along with typical repo root files, you'll find some custom files and directories:

- `src/`: holds all the components.
- `.fakeApi/`: holds fake environment API configuration.
- `public`: used by `create-react-app` to copy files directly to the build folder as an escape hatch; generally read-only.
- `.storybook/`: used by React Storybook to build the living style guide; generally read-only.
- `.yarn.lock`: used by Yarn to ensure consistent package installs; read-only.
- `.env`: holds private environment configuration (stored only on your machine); generally read-only once set up.
- `.env_template`: an example for you to copy to `.env`; generally read-only.

### Fake API (`.fakeApi/`)

When running the app in the "fake" environment, the `.fakeApi` directory holds configuration for the API.

- `index.js`: fake API entry point; generates randomized API responses whenever the API server is run. This helps our code stay flexible with different data.
- `overrides.js`: add overrides for non-randomized API responses.
- `routes.js`: maps fake API routes to egghead API routes.

## Source Directory (`src/`)

### Components

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

### Screens

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

### Promotion

All resources are eligible for *promotion* to facilitate code reuse. If a resource is shared by multiple directories, the principle of _least common ancestor_ will apply and that shared resource will me **promoted** to the least common ancestor’s directory.

### Root Screen (`src/App`)

The *root screen* is the container for the entire app. It has everything a screen has with a few additions:

- `index.js` wires up the component and state trees.
- `state/` wires up all sub-screen `reducers/` and `epics/`.

### Styles

Styling is done with default Tachyons classes. The `*-ns` (not small) classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.

### Tests

Modules and components that could benefit from tests have an `index.test.js` file next to them. These are generally simple unit or snapshot tests where they provide value.
The `SnapshotFixtures` file provides **static** fixtures that can be used for the props of the components of snapshot test files.

### Style Guide

Components that could benefit from being a part of the living style guide have an `index.guide.js` file next to them. This means they are automatically added to the living style guide.
The `faker` package provides **random** fixtures that can be used for the props of the components of guide files.
The `GuideVariations` component can be used to render variations of a component.

---

# Pull Requests & Continuous Integration

The `master` branch is _protected_. It requires new code be submitted as pull requests and that Continuous Integration through [Codeship](https://app.codeship.com/projects/183842) passes before the pull request can be merged.

Continuous Integration runs the `yarn verify` script, which sets the `CI` variable (so that processes only run once, instead of in watch mode) and then checks that tests and builds execute without errors.
