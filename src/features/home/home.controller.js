
export default class HomeController {
  constructor(randomNames) {
  	this.random = randomNames;
    this.name = this.random.getName();
  }

  changeName() {
    this.name = this.random.getName(this.name);
  }
}

HomeController.$inject = ['randomNames'];