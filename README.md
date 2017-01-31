# egghead.io Instructor Center

[ ![Codeship Status for eggheadio/egghead-instructor-center](https://app.codeship.com/projects/3a4afe00-8808-0134-e6cc-2e5dfce30ebc/status?branch=master)](https://app.codeship.com/projects/183842)

An app for egghead instructors to do all the instructor things.

---

# Set up

## Dependencies

- Git
- Node
- Yarn
- [egghead-systems](https://github.com/eggheadio/egghead-systems)
- Copy `.env_template` to `.env`

---

# Workflow

- `yarn` to install latest packages.
- Uncomment the environment you want to use in `.env`
- `yarn dev` to develop (runs APIs, development server, linting, and compiling).
- [localhost:3000](http://localhost:3000) to view app.
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
- **Requests:** Fetch
- **Routing:** React Router
- **Styles:** Tachyons
- **Fake API:** JSON Server + Faker
- **Continuous Integration:** Codeship
- **Deployment:** Codeship -> Heroku \*
- **Error Tracking:** Honeybadger
- **Endpoints:** egghead-rails rest APIs

_\* Relies on `create-react-app` setup_

---

# Structure

## Root (`/`)

Along with typical repo root files, you'll find some custom files and directories:

- `src/`: holds all the source code.
- `public`: used by `create-react-app` to copy files directly to the build folder as an escape hatch; generally read-only.
- `.yarn.lock`: used by Yarn to ensure consistent package installs; read-only.
- `.env`: holds private environment configuration (stored only on your machine); generally read-only once set up.
- `.env_template`: an example for you to copy to `.env`; generally read-only.

## Source Directory (`src/*`)

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
- `utils/`: optional, modules used by components.

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

### Root Screen (`src`)

The `src` directory is the container for the entire app. It has everything a screen has with a few additions:

- `index.js` wires up the component, state trees, and routing.
- `state/` wires up all sub-screen `reducers/` and `epics/`.
- `utils/` contains utilities used across the entire app, including URL and hard-coded text strings.

### Styles

Styling is done with default Tachyons classes. The `*-ns` (not small) classes are used to apply anything specific to non-mobile screen sizes, so that all components are built mobile-first.

### Promotion

All resources are eligible for **promotion** to facilitate code reuse. If a resource is shared by multiple directories, the principle of _least common ancestor_ applies and that shared resource is _promoted_ to the least common ancestor’s directory.

### Paths

This project uses ES2015 modules for sharing code between files. `NODE_PATH` is set to `src` so `import Icon from 'components/Icon'` will grab `src/components/Icon`. When trying to decide if an import should use an absolute or relative path, it depends on the situation: if something belongs to an inner module/component, it should reference the pieces relatively; if something is using a general promoted module/component, it should import the pieces absolutely. A good rule of thumb is to keep everything relative that would be moved together so it is self-contained.

### Routes

URLs follow the Rails standard routing scheme, which uses plural entities named with a noun. For example:

```
/lessons
/lessons/new
/lessons/{id}
/lessons/{id}/edit
```

### Tests

Files that could benefit from tests have an `index.test.js` file next to them. These are generally simple unit or snapshot tests where they provide value.

---

# Endpoints

Endpoint data uses hypermedia and only returns what the user has access to, so all UI based on permissions can be combined without separate routes for "roles". There is no such thing as roles in this system, but what data a response has, based on the user.

---

# Pull Requests

![Animated gif of pull request process](https://cloud.githubusercontent.com/assets/5497885/20947829/3bd6ce70-bbce-11e6-86a5-9df6e067c8cc.gif)

- Create a feature branch off of `master`.
- Submit a pull request to `master`.
- [Continuous integration](https://app.codeship.com/projects/183842) runs automatically.
- Merge pull request.
- [Continuous deployment](https://app.codeship.com/projects/183842) pushes latest code to [prod](https://instructor.egghead.io) automatically.
