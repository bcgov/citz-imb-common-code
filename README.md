# CITZ IMB Common Code

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](Redirect-URL)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

[![NodeJS](https://img.shields.io/badge/Node.js_20-43853D?style=for-the-badge&logo=node.js&logoColor=white)](NodeJS)
[![Typescript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](Typescript)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)](React)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](Express)

<br />

---

## `Table of Contents`

- [General Information](#general-information)
- [Quick Start Guide](#quick-start-guide) - **Start Here!**
- [Testing Packages Locally](#testing-packages-locally) - Test packages before they are released or merged.
- [Directory Structure](#directory-structure) - How the repo is designed.
- [Git Aliases](#git-aliases) - Available git aliases.
- [Scripts](#scripts) - Scripts for running and working on the web app.

## `General Information`

This application will be used to showcase the code, packages, and services that the Common Code team offers. It will also serve as a testing grounds for packages before new versions are published.

- Running on a NodeJS:20 with React, and Express.

---

<br />

## `Quick Start Guide`

1. Create a `.env` file based on the `example.env` file.

2. Run `npm run up` to start the app locally.

[Return to Top](#citz-imb-common-code)

<br />

## `Testing Packages Locally`

Packages such as `@bcgov/citz-imb-sso-react` and `@bcgov/citz-imb-sso-express` can be tested within the Showcase app before they are merged and released. This means you can make changes to these package repos on your local machine, and then see these changes reflected within the Showcase app.

### `Requirements`

- The following package repos must be cloned to your machine in the same directory as this repo:

[@bcgov/citz-imb-sso-react] - SSO React package.  
[@bcgov/citz-imb-sso-express] - SSO Express package.

- You must run the `npm run build` command from each of these package repo directories.
- To see changes in the Showcase app, you must rebuild using the `npm run up:override` or `npm run rebuild:override` scripts.

### `How This Works`

This works because the `compose.override.yaml` file sets volume mounts that map the `build` directory in each package repo to the corresponding `node_modules` folder.

Any time changes are made that you want reflected in the Showcase app, you will need to build the package and run `npm run rebuild` in this directory.

Since this mapping is done through docker, you may get type errors in your IDE because the IDE sees the version of the package in the package.json, but docker is building with the contents of the `build` directory from the package repo directory.

<br />

## `Directory Structure`

```
.
├── .github/
|   ├── config/
|   |   └── dep-report.json5                # Configure options for NPM Dep Report.
|   ├── helpers/
|   |   ├── github-api/                     # Functions to access the GitHub API.
|   |   ├── create-npm-dep-report-issues.js # Creates GitHub Issues for Npm Dep Reports.
|   |   ├── create-npm-dep-report.js        # Creates text bodies for Npm Dep Reports.
|   |   ├── parse-json5-config.js           # Parses json5 files for GitHub actions output.
|   |   └── parse-npm-deps.js               # Parses package.json files for changes to package versions.
|   ├── workflows/
|   |   └── npm-dep-report.yaml             # Reports on new package versions.
├── src/
|   ├── backend/                            # Express API.
|   |   ├── scripts/                        # Utility scripts used to run the server.
|   |   ├── src/                             
|   |   |   ├── modules/                    # Modules of functionality (routes, controllers, entities, services).
|   |   |   └── utils/                      # Utility functions for the express api.
|   |   ├── express.ts                      # Express configuration and base route configuration.
|   |   ├── index.ts                        # Server initialization.
|   |   └── package.json                    # Configure packages.
|   ├── frontend/                           # React.
|   |   ├── src/                             
|   |   |   ├── assets/                     # Images.
|   |   |   ├── components/                 
|   |   |   |   └── common/                 # Common or reusable visual components.
|   |   |   ├── css/                        # Base styles and variables.
|   |   |   ├── pages/                      # Page components.
|   |   |   ├── AppRouter.tsx               # Router for loading pages at routes.
|   |   |   ├── global.d.ts                 # Global type declarations (used for config endpoint).
|   |   |   └── main.tsx                    # Main JavaScript run in index.html.
|   |   ├── index.html                      # Set web app meta data and title.
|   |   ├── nginx.conf                      # Configure proxy pass for prod build.
|   |   ├── package.json                    # Configure packages.
|   |   └── vite.config.ts                  # Configure vite server and proxy pass for dev build.
```

[Return to Top](#citz-imb-common-code)

<br />

## `Git Aliases`

These aliases are available within the repository after using the following setup command:

```bash
# Sets git aliases.
$ npm run setup-git-aliases
```

---

```bash
# List all available aliases.
$ git list-aliases
```

```bash
# Amend staged changes to the last commit without changing the commit message.
$ git amend
```

```bash
# Undo the last commit and bring it's changes back into the staging area.
$ git undo-last-commit-soft
```

```bash
# Undo the last commit and discard it's changes.
$ git undo-last-commit-hard
```

```bash
# See files changed in relation to main branch.
$ git changes
```

[Return to Top](#citz-imb-common-code)

<br />

## `Scripts`

```bash
# Start the web app (ensure env vars set).
$ npm run up
```

```bash
# Start the web app (ensure env vars set).
# Volume mounts the build directories of external packages to node_modules within docker,
# so that local package repos can be tested within the app.
#
# See 'Testing Packages Locally' before using.
$ npm run up:override
```

```bash
# Stop the web app.
$ npm run down
```

```bash
# Prune all containers, images and volumes.
$ npm run prune
```

```bash
# Clean install packages in frontend and backend (requires prune and up to affect live site).
$ npm run install
```

```bash
# Clean install packages in frontend (requires prune and up to affect live site).
$ npm run install:frontend
```

```bash
# Clean install packages in backend (requires prune and up to affect live site).
$ npm run install:backend
```

```bash
# Prunes, clean installs packages, and rebuilds containers.
$ npm run rebuild
```

```bash
# Prunes, clean installs packages, and rebuilds containers.
# Uses `npm run up:override` instead of `npm run up`.
#
# See 'Testing Packages Locally' before using.
$ npm run rebuild:override
```

```bash
# Shell into frontend container.
# Type 'exit' + ENTER to exit shell.
$ npm run shell:frontend
```

```bash
# Shell into backend container (used when working with migrations).
# Type 'exit' + ENTER to exit shell.
$ npm run shell:backend
```

```bash
# Sets git aliases.
$ npm run setup-git-aliases
```

[Return to Top](#citz-imb-common-code)

<!-- Link References -->

[@bcgov/citz-imb-sso-react]: https://github.com/bcgov/citz-imb-sso-react
[@bcgov/citz-imb-sso-express]: https://github.com/bcgov/citz-imb-sso-express
