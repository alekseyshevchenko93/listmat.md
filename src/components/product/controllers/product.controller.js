
ProductController.$inject = [];

export default function ProductController() {
  const self = this;

  self.sliderItems = [
    'http://www.originalam.net/uploaded/img/shop/133/4-CMYK.jpg',
    'http://www.w-p-s.ru/upload/medialibrary/6ce/6cee1aca63f9d7e3e7cea33dbb0cdc68.png'
  ];

  self.sliderProperties = {
    items: 1,
    dots: true
  }

  console.log('hi from product controller');
}
