import $ from 'jquery';
window.$ = window.jQuery = $;
import 'owl-carousel-2/owl.carousel';

import angular from 'angular';
import 'angular-owl-carousel2';

import uirouter from 'angular-ui-router';
import angularIncludeReplace from 'angular-include-replace';

import 'owl-carousel-2/assets/owl.carousel.min.css';
import 'owl-carousel-2/assets/owl.theme.default.min.css';
import 'ionicons/dist/scss/ionicons.scss';
import "reset-css/_reset.scss";
import '../assets/styles/app.scss';

const app = angular.module('app', [
  'ui.router',
  'angular-include-replace',
  'angular-owl-carousel-2'
]);

app.run(['$templateCache', function($templateCache) {
  let context = require.context('./', true, /\.(html)$/);

  context.keys().forEach(filename => {
    $templateCache.put(filename.replace('./', ''), context(filename));
  });

}]);

import routes from './routes';

app.config(routes);
