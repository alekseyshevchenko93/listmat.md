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
import './assets/styles/app.scss';

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

console.log('ENV', NODE_ENV);

app.constant('ENV', NODE_ENV);
app.constant('API_URL', NODE_ENV === 'development' ? 'http://localhost:8081' : 'http://production-url.com');
app.constant('GOOGLE_MAPS_API_KEY', 'AIzaSyAan6p57BKo97B7b6rtwb3Tvr1i9NwrH5g');

app.config(['uiGmapGoogleMapApiProvider', 'GOOGLE_MAPS_API_KEY', function(uiGmapGoogleMapApiProvider, GOOGLE_MAPS_API_KEY) {
  uiGmapGoogleMapApiProvider.configure({
    key: GOOGLE_MAPS_API_KEY,
    v: '3.20',
    libraries: 'weather,geometry,visualization'
  });
}]);

import HttpInterceptor from './services/http-interceptor.service';
app.factory('HttpInterceptor', HttpInterceptor);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('HttpInterceptor');
}]);

import DataService from './services/data.service';
app.factory('DataService', DataService);

import routes from './routes';
app.config(routes);

app.run(['$templateCache', function($templateCache) {
  let context = require.context('./', true, /\.(html)$/);

  context.keys().forEach(filename => {
    $templateCache.put(filename.replace('./', ''), context(filename));
  });
}]);



