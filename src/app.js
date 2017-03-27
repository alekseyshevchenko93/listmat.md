import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularOwlCarousel from 'angular-owl-carousel2';

import '../assets/styles/app.scss';
import 'ionicons/dist/scss/ionicons.scss';
import "reset-css/_reset.scss";

const app = angular.module('app', [
  uirouter,
  // angularOwlCarousel
]);

app.run(['$templateCache', function($templateCache) {
  let context = require.context('./', true, /\.(html)$/);

  context.keys().forEach(filename => {
    $templateCache.put(filename.replace('./', ''), context(filename));
  });

}]);

import routes from './routes';

app.config(routes);