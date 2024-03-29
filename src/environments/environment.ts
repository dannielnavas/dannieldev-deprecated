// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  github_url: 'https://api.github.com/users',
  firebase: {
    apiKey: 'AIzaSyD-wynF1GKoaJEHF3z7p0f92ofEnwTNM8U',
    authDomain: 'dannieldev-82d64.firebaseapp.com',
    databaseURL: 'https://dannieldev-82d64-default-rtdb.firebaseio.com',
    projectId: 'dannieldev-82d64',
    storageBucket: 'dannieldev-82d64.appspot.com',
    messagingSenderId: '731587744107',
    appId: '1:731587744107:web:0de4930a4220889432fc2e',
    measurementId: 'G-HDQFTS9M45',
  },
  youtube_endpoint: 'https://youtube.googleapis.com/youtube/v3/search',
    youtube_key: 'AIzaSyAcFEiRtFoJqhcQWpnF3Vsyg7pLa09_fl0',
  youtube_channel: 'UC-WOFSnewqJ1CRjFuZYaYEQ',
  youtube_part: 'snippet',
  devto: 'https://dev.to/api/articles?username=dannieldev',
statistics: 'https://backend-danniel-dev.vercel.app/statistic',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
