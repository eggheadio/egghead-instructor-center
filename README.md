# egghead-instructor-center

[ ![Codeship Status for eggheadio/egghead-instructor-center](https://app.codeship.com/projects/3a4afe00-8808-0134-e6cc-2e5dfce30ebc/status?branch=master)](https://app.codeship.com/projects/183842)

_An app for egghead instructors to do instructor things_

# Dependencies

- Git
- Node
- Yarn
- [egghead-systems](https://github.com/eggheadio/egghead-systems)

# Workflow

- `yarn` to install packages
- `yarn dev` to develop
- [localhost:3000](http://localhost:3000) to view app
- `yarn test` to run tests

# Package management

Yarn is used for package management. Use the [yarn cli](https://yarnpkg.com/en/docs/usage) to add/remove/update packages which updates both the `package.json` and `yarn.lock` to ensure consistent package installs. 

# Scripts

Yarn is used for running scripts. Use `yarn {script}` to run them. The core of the scripts extend `react-scripts` (from Create React App) so that this project doesn't have to manage compiling, linting, or testing; it gets all Create React App updates for free by running `yarn upgrade react-scripts@latest`.

# Components

Each directory inside `src` is a **component**. A component is a directory organized _by feature_. It looks like this:

```
index.js
components/ (optional)
utils/ (optional)
```

- `index.js`: entry point - generally a stateless function component.
- `components/`: optional sub-components.
- `utils/`: optional utility modules.

# Screens

Some components are also **screens** (aka "Smart" or "Container" components). A screen is a component that is also paired with a route and connected to endpoints. It looks like this:

```
index.js
components/ (optional)
utils/ (optional)
screens/ (optional)
```

- `index.js`, `components/`, `utils/`: same as a vanilla component, except `index.js` generally makes endpoint requests and passes state or endpoint data down to the components below it.
- `screens/`: optional sub-screens paired with sub-routes.

# Promotion

All resources are eligible for **promotion** to facilitate code reuse. If a resource is shared by multiple directories, the principle of _least common ancestor_ applies and that shared resource is _promoted_ to the least common ancestor’s directory.

# Paths

ES2015 modules are used for sharing code between files. `NODE_PATH` is set to `src` so `import Icon from 'components/Icon'` will grab `src/components/Icon`. When trying to decide if an import should use an absolute or relative path, it depends on the situation: if something belongs to an inner module/component, it should reference the pieces relatively; if something is using a general promoted module/component, it should import the pieces absolutely. A good rule of thumb is to keep everything relative that would be moved together so it is self-contained.

# JavaScript Utilities

Lodash is used to ensure speed and consistency instead of native methods. It also provides convenience functions.

# Styles

The `egghead-ui` (egghead style guide library) is used wherever possible. Styling is largely taken care of by these `egghead-ui` components. When app specific styles are needed, `tachyons-egghead` classes are used. The `*-ns` (not small) classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.

# Routing

React router is used for routing. URLs follow the Rails standard routing scheme, which uses plural entities named with a noun. For example:

```
/lessons
/lessons/new
/lessons/{id}
/lessons/{id}/edit
```

# Endpoints

The `Request` component is used with the `egghead-rails` rest APIs. The endpoint data uses hypermedia and only returns what the user has access to, so all UI based on permissions can be combined without separate routes for "roles". There is no such thing as roles in this system, but what data a response has, based on the user.

# Environment

The `.env` file is used to load environment variables. The base url of endpoint calls is set here to use different environment endpoints as well.

# Public folder

The `public/` folder is used by `react-scripts` to copy files directly to the `build/` folder root. It contains things like the root `index.html` and favicons/app icons. It is generally read-only.

# Linting

Linting is provided by `react-scripts` (ESLint).

# Testing

Testing is provided by `react-scripts` (Jest). Files that could benefit from tests have an `index.test.js` file next to them. These are generally simple unit or snapshot tests where they provide value.

# Continuous integration and deployment

[Codeship](https://app.codeship.com/projects/183842) is used for continuous integration and deployment. It runs scripts to ensure builds pass before pull requests are merged into `master` and then deploys to Amazon S3 which updates [instructor.egghead.io](https://instructor.egghead.io).

# Error tracking

[Honeybadger](https://app.honeybadger.io/projects/51180/faults?q=-is%3Aresolved+-is%3Aignored) is used for error tracking.

# User tracking

[Google Analytics](https://analytics.google.com/analytics/web/?authuser=1#report/defaultid/a36512724w134681887p138806178/) is used for user tracking.

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
