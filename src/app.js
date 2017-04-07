import angular from 'angular';

import $ from 'jquery';
import 'owl-carousel-2/owl.carousel';
import _ from 'lodash';
import 'angular-owl-carousel2';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-include-replace';
import 'angular-ellipsis';
import 'angular-simple-logger';
import 'angular-google-maps';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-material';

import 'owl-carousel-2/assets/owl.carousel.min.css';
import 'owl-carousel-2/assets/owl.theme.default.min.css';
import 'angular-material/angular-material.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import "reset-css/_reset.scss";
import "susy";
import '../assets/styles/app.scss';

const app = angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'angular-include-replace',
  'angular-owl-carousel-2',
  'dibari.angular-ellipsis',
  'nemLogging',
  'uiGmapgoogle-maps'
  // 'ngMaterial'
]);

// app.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
//   uiGmapGoogleMapApiProvider.configure({
//     key: 'AIzaSyAan6p57BKo97B7b6rtwb3Tvr1i9NwrH5g',
//     v: '3.20', //defaults to latest 3.X anyhow
//     libraries: 'weather,geometry,visualization'
//   });
// }]);
/**
 * Register all tempates
 */
app.run(['$templateCache', function($templateCache) {
  let context = require.context('./', true, /\.(html)$/);

  context.keys().forEach(filename => {
    $templateCache.put(filename.replace('./', ''), context(filename));
  });

}]);
/**
 * Register all controllers and services
 */
// app.run(['$templateCache', function() {
//   let context = require.context('./', true, /(service|controller|template)\.(js|html)$/);

//   context.keys().forEach(filename => {
//     let type = filename.match(/\.(service|controller|template)\.(js|html)$/)[1],
//         value = context(filename);

//     switch(type) {
//       case 'controller':
//         app.controller(value);
//         break;
//       case 'template':
//         $templateCache.put(filename.replace('./', ''), value);
//         break;
//       case 'service':
//         app.factory(value);
//         break;
//     }
//   });
// })

import routes from './routes';
// import './components/products-list/services/products.service';

app.config(routes);
