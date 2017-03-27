
const routes = [
  {
    name: 'app',
    templateUrl: 'components/layout/templates/layout.html'
  },
  {
    name: 'app.main',
    url: '/',
    templateUrl: 'components/main-page/templates/main.html'
  },
  {
    name: 'app.catalog',
    url: '/catalog',
    templateUrl: 'components/catalog/templates/catalog.html'
  },
  {
    name: 'app.productsList',
    url: '/catalog/{category}/products',
    templateUrl: 'components/products-list/templates/products-list.html'
  },
  {
    name: 'app.product',
    url: '/catalog/{category}/products/{product}',
    templateUrl: 'components/product/templates/product.html'
  },
  {
    name: 'app.contacts',
    url: '/contacts',
    templateUrl: 'components/contacts/templates/contacts.html'
  }
];

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  routes.forEach(state => $stateProvider.state(state));
};
