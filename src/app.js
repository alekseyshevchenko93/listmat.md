import angular from 'angular';

import $ from 'jquery';
import 'owl-carousel-2/owl.carousel';

import 'angular-owl-carousel2';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-include-replace';
// import 'angular-animate';
// import 'angular-aria';
// import 'angular-material';

import 'owl-carousel-2/assets/owl.carousel.min.css';
import 'owl-carousel-2/assets/owl.theme.default.min.css';
import 'ionicons/dist/scss/ionicons.scss';
// import 'angular-material/angular-material.min.css';
import "reset-css/_reset.scss";
import "susy";
import '../assets/styles/app.scss';

const app = angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'angular-include-replace',
  'angular-owl-carousel-2',
  // 'ngMaterial'
]);

app.run(['$templateCache', function($templateCache) {
  let context = require.context('./', true, /\.(html)$/);

  context.keys().forEach(filename => {
    $templateCache.put(filename.replace('./', ''), context(filename));
  });

}]);

import routes from './routes';

app.config(routes);
