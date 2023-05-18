# UI Components Implementation

## What is this project about?

This project is a personal repository, which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it represents a collection of the most common UI components's implementation. It mainly includes the code for component itself -including both UI logic and styling-, the code for respective Stor(y|ies) and the code for respective unit test(s). Apart from those, theming, sample color palette and global styles have been provided. It is currently under process and it has been being updated in time. When the project is completed, this part of the documentation will be changed as required. Only downside of this repository for the time being is that since it is not completed yet, there is no published version and none can have a look at the project output on the web. Please keep calm, brace yourself and wait for the published version! :)

## Tech stack at a glance

This project uses `Typescript` as the primary language and uses `json` format and `JavaScript` language for configuration files. For styling, `styled-components` is used. In order to provide an interactive and isolated UI with different sub-states for each component without needing to clone and run the project on local environment, `Storybook` is used and when published, components can be observed independently from the provided URL. _Note that Version 7 of Storybook is being used._ For providing unit test(s) for each written component, `Jest` library along with `React Testing Library (RTL)` is used.

For maintaining a stable code structure, `ESLint` is used and the respective configuration file can be observed in `<rootDir>/.eslintrc.js` file. All the rules that are defined in this file are only a personal preference and they might go under change in the future. For now, they are considered to be enough, though.

For formatting, `Prettier` extension is integrated into the project and for preventing any undesired bug(s) and/or invalid code format for file(s) from slipping into the remote repository, `husky` and `lint-staged` packages are also integrated.

## Available Scripts

In the project directory, you can run:

### `yarn generate:iconset`

Generates required string literal type for all available icon names, which can be seen using Intellisense feature of text editor. The type for icon name(s) will be kept in `src/components/Icon/iconNames.types.ts` file. It also generates a json file in `src/components/Icon` directory with a name `iconSet.json` and this will be the actual utility file for populating `iconNames.types.ts` file content.

In order to cover up new icon(s) added to the repository, make sure you follow the steps below:

- Export icon(s) that you will add to the repository in svg format
- Move icon file(s) generated in above step into `src/components/Icon/icons` directory
- Run `yarn generate:iconset` command in terminal
  - This command will generate `iconSet.json` and `iconNames.types.ts` files in `src/components/Icon` directory, if they do not exist yet, otherwise the content for both files will be updated automatically.
- You are good to go! :)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Runs Storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors on the screen and in the console.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
