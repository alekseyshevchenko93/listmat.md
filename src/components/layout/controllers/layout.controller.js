LayoutController.$inject = ['DataService', '$state'];

export default function LayoutController(DataService, $state) {

  const self = this;

  self.searchString = '';

  // console.log('in search page controller', $state);

  self.getProductsByFullTextSearch = function() {
    $state.go('app.search', {
      q: self.searchString
    });
  }
}
