
MainPageController.$inject = [];

export default function MainPageController() {
  const self = this;

  self.sliderItems = [
    'http://teplitsa-plus.ru/images/stories/tsvetnoj-polikarbonat.jpg',
    'http://light-vyveski.ru/upload/shop_3/0/9/5/item_95/shop_property_file_95_133.jpg',
    'http://www.orgaha.ru/data/Image/fotos/orgaha_photo/policorbanat_1.jpg',
    'http://www.inkton.ru/UserFiles/Image/brands/Inktec/img5361_87592_big.jpg'
  ];

  self.sliderProperties = {
    items: 1,
    dots: true
  }

  console.log('hi from main page');
}
