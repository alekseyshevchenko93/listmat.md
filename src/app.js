import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularIncludeReplace from 'angular-include-replace';
import 'jquery';
import angularSlick from 'angular-slick';
import 'slick-carousel/slick/slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'ionicons/dist/scss/ionicons.scss';
import "reset-css/_reset.scss";
import 'angular-slick/app/styles/main.css'

import '../assets/styles/app.scss';

const app = angular.module('app', [
  'ui.router',
  'angular-include-replace',
  'slick'
]);

app.run(['$templateCache', function($templateCache) {
  let context = require.context('./', true, /\.(html)$/);

  context.keys().forEach(filename => {
    $templateCache.put(filename.replace('./', ''), context(filename));
  });

}]);

import routes from './routes';

app.config(routes);
