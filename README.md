# next-firebase-plus
Opinionated lightweight setup of nextjs on firebase with some extras.

## Setup

#### Prerequisites


- Create a Firebase project
- Enable an Authentication method
- Copy `.env.local.example` to `.env.local`

#### Admin

- In Firebase generate a private key under `Project settings` > `Service accounts`. 
- Rename the resulting file to `serviceAccount.json`, and place it in the project root (gitignored).

#### FirebaseApp

- In Firebase under `Project settings` > `General` create a web application if you haven't done so already.
- Copy the `Config` version of the `Firebase SDK snippet` and paste it in `firebaseConfig.js` in the project root.

#### Database

- Enable Firestore in your Firebase project
- Adjust the database url to reflect your project/database id

## Deploy

#### Prerequisites

- Upgrade Firebase project to Blaze (pay-as-you-go) plan
- Install firebase cli

```
npm install -g firebase-tools
```

#### Login

```
firebase login
```

#### Build and deploy

```
yarn deploy
```

## Customise

#### Icons part 1

- Generate the required formats at [https://www.favicon-generator.org/](https://www.favicon-generator.org/)
- Copy everything **except** `browserconfig.xml` and `manifest.json` to `images/icons` and overwrite all files.

#### Icons part 2

- Generate a manifest file and more icons at [https://manifest-gen.netlify.app/](https://manifest-gen.netlify.app/)
- Place the resulting `manifest.json` and `images` folder in `/public` (overwrite existing folders and files)

#### Meta information

- Change the variables in `app/config.ts`
