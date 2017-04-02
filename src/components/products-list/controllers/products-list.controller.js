
ProductsListController.$inject = [];

export default function ProductsListController() {

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

  self.pText = 'SoAcryl это — оргстекло, полученное методом литья. Для этого перемешанную смесь полимера заливают в форму из силикатного стекла, имеющего очень высокую степень полировки поверхности. Полимеризация ведется, как правило, в воздушной среде, реже в водной.';
  
  console.log('hi from products list controller');
}
