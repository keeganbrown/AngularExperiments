//https://api.github.com/users/keeganbrown/repos
import angular from 'angular';

class GithupRepos {
  constructor($http) {
    this.repos = [{
    	name: 'Loading...',
    	description: ''
    }];
    updateRepos();
  }
  updateRepos() {
  	this.$http = $http({
    	url: 'https://api.github.com/users/keeganbrown/repos'
    }).then(
    	(res) => {
    		this.repos = res.data;
    	}, 
    	(error) => {
    		console.log(error);
    	}
    );
  }
}

GithupRepos.$inject = ['$http'];

export default angular.module('services.github-repos', [])
  .service('githubRepos', GithupRepos)
  .name;
