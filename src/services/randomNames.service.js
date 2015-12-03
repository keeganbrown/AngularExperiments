import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  getName(currentName) {
    const totalNames = this.names.length;
    let getOutputName = () => { 
      let rand = Math.floor(Math.random() * totalNames);
      return ( this.names[ rand ] === currentName ) ? getOutputName() : this.names[ rand ];
    };
    return getOutputName();
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;
