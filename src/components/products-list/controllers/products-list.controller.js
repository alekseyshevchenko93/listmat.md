ProductsListController.$inject = ['DataService', '$state'];

export default function ProductsListController(DataService, $state) {

  const self = this;

  /**
   * View type for products list
   */
  self.view = 'row';
  /**
   * Sorting type for products list ['price-asc', 'price-desc', 'name-asc', 'name-desc']
   */
  self.sorting = 'price-asc'
  /**
   * Reverse sorted items
   */
  self.sortingReverse = false;
  /**
   * Shows dropdown to change sorting
   */
  self.showSortDropdown = false;
  
  console.log('state params', $state.params);

  DataService.getCategoryById($state.params.category).then(response => {
    console.log('category', response.data);
    self.category = response.data;
  });

  DataService.getProductsByCategoryId($state.params.category).then(response => {
    console.log('products', response.data);
    self.products = response.data;
  });
}
