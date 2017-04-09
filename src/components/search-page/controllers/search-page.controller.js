SearchPageController.$inject = ['DataService', '$state'];

export default function SearchPageController(DataService, $state) {

  const self = this;

  self.searchString = $state.params.q;

  DataService.getProductsByFullTextSearch($state.params.q).then(response => {
    console.log('response', response);
    self.products = response.data;
  });
}
