
MainPageController.$inject = ['uiGmapGoogleMapApi'];

export default function MainPageController(uiGmapGoogleMapApi) {

  const self = this;

  self.sliderItems = [
    'http://srbu.ru/images/stroitelnye-materialy/monolitnyj-polikarbonat-svojstva-i-primenenie/monolitnyj-polikarbonat-svojstva-i-primenenie.jpg',
    'https://www.krov-systema.ru/upload/test/b1dbf6c465a5ea783e8f5be365f84c6b4.jpg',
    // 'http://www.orgaha.ru/data/Image/fotos/orgaha_photo/policorbanat_1.jpg',
    // 'https://zorro.by/upload/iblock/716/monolitnyy-polikarbonat-1.jpg',
    'https://www.krov-systema.ru/upload/test/8e5d49ecca1d21c9fe47a615a24a32dc2.jpg'
  ];

  self.sliderProperties = {
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000
  }


  self.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  uiGmapGoogleMapApi.then(maps => {
    console.log(self.map)
    console.log('google maps loaded');
  });
  
  console.log('hi from main page');
}
