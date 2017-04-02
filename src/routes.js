import MainPageController from './components/main-page/controllers/main-page.controller';
import ProductsListController from './components/products-list/controllers/products-list.controller';
import ProductController from './components/product/controllers/product.controller';

const routes = [
  {
    name: 'app',
    templateUrl: 'components/layout/templates/layout.template.html'
  },
  {
    name: 'app.main',
    url: '/',
    templateUrl: 'components/main-page/templates/main.template.html',
    controller: MainPageController,
    controllerAs: 'vm'
  },
  {
    name: 'app.productsList',
    url: '/catalog/{category}/products',
    // templateUrl: 'components/products-list/templates/products-list-old.html',
    templateUrl: 'components/products-list/templates/products-list.template.html',
    controller: ProductsListController,
    controllerAs: 'vm'
  },
  {
    name: 'app.product',
    url: '/catalog/{category}/products/{product}',
    templateUrl: 'components/product/templates/product.template.html',
    controller: ProductController,
    controllerAs: 'vm'
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
