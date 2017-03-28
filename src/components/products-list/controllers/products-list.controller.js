
ProductsListController.$inject = [];

export default function ProductsListController() {
  const self = this;

  self.view = 'row';

  self.showSortDropdown = false;

  console.log('hi from products list controller');
}
