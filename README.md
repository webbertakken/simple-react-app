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
