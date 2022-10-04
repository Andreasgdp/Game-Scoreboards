// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'demo-scoreboards',
    appId: '1:395707316276:web:cb934be84c17524313f261',
    storageBucket: 'game-scoreboards.appspot.com',
    apiKey: 'AIzaSyDSfwX-_-jdPz1h0N-Ztep7iy3u86gTnQQ',
    authDomain: 'game-scoreboards.firebaseapp.com',
    messagingSenderId: '395707316276',
    databaseURL:
      'https://game-scoreboards-default-rtdb.europe-west1.firebasedatabase.app',
  },
  useEmulators: true,
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
