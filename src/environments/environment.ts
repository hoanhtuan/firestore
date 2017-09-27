// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAubfCmoujX-LS3mx08d6Mxk397CjXDEho",
    authDomain: "amex-webapp.firebaseapp.com",
    databaseURL: "https://amex-webapp.firebaseio.com",
    projectId: "amex-webapp",
    storageBucket: "",
    messagingSenderId: "863284800586"
  }
};
