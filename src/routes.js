import MainPageController from './components/main-page/controllers/main-page.controller';
import ProductsListController from './components/products-list/controllers/products-list.controller';
import ProductController from './components/product/controllers/product.controller';
import SearchPageController from './components/search-page/controllers/search-page.controller';
import LayoutController from './components/layout/controllers/layout.controller';

const routes = [
  {
    name: 'app',
    templateUrl: 'components/layout/templates/layout.template.html',
    controller: LayoutController,
    controllerAs: 'layout'
  },
  {
    name: 'app.main',
    url: '/',
    templateUrl: 'components/main-page/templates/main.template.html',
    controller: MainPageController,
    controllerAs: 'main'
  },
  {
    name: 'app.productsList',
    url: '/categories/{category}/products',
    templateUrl: 'components/products-list/templates/products-list.template.html',
    controller: ProductsListController,
    controllerAs: 'products'
  },
  {
    name: 'app.product',
    url: '/catalog/{category}/products/{product}',
    templateUrl: 'components/product/templates/product.template.html',
    controller: ProductController,
    controllerAs: 'vm'
  }, {
    name: 'app.search',
    url: '/search?q',
    templateUrl: 'components/search-page/templates/search-page.template.html',
    controller: SearchPageController,
    controllerAs: 'search'
  }
  // {
  //   name: 'app.contacts',
  //   url: '/contacts',
  //   templateUrl: 'components/contacts/templates/contacts.html'
  // }
];

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  routes.forEach(state => $stateProvider.state(state));
};
