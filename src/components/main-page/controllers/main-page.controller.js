
MainPageController.$inject = [];

export default function MainPageController() {
  const self = this;

  self.items = [1,2,3];

  self.props = {
    items: 2
  }

  console.log('hi from main page')
}
