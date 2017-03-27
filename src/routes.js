
const routes = [
  {
    name: 'app',
    template: require('./templates/layout.html')
  },
  {
    name: 'app.main',
    url: '/',
    template: require('./templates/main.html')
  },
  {
    name: 'app.categories',
    url: '/categories',
    template: require('./templates/categories.html')
  },
  {
    name: 'app.productsList',
    url: '/categories/{category}/products',
    template: require('./templates/products-list.html')
  },
  {
    name: 'app.product',
    url: '/categories/{category}/products/{product}',
    template: require('./templates/product.html')
  },
  {
    name: 'app.contacts',
    url: '/contacts',
    template: require('./templates/contacts.html')
  }
];

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/');
  routes.forEach(state => $stateProvider.state(state));
};
