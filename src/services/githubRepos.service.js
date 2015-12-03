import angular from 'angular';

class GithupRepos {
	constructor($http) {
		this.userconfig = {
			root: 'https://api.github.com/users',
			username: '/keeganbrown',
			repos: '/repos'
		}
		this.user = {
			login: 'loading',
			name: 'Please Wait.'
		}
		this.repos = [{
			name: 'Loading...',
			description: ''
		}];
		this.$http = $http;
		this.updateRepos();
		this.updateUser();
	}
	getRepos() {
		return this.repos;
	}
	getUser() {
		return this.user;
	}
	updateRepos() {
		//let this = this;
		this.reposPromise = this.$http({
			url: this.userconfig.root + this.userconfig.username + this.userconfig.repos
		}).then(
			(res) => {
				this.repos = res.data;
			}, 
			(error) => {
				console.log(error);
			}
		);
	}
	updateUser() {
		//let this = this;
		this.usersPromise = this.$http({
			url: this.userconfig.root + this.userconfig.username
		}).then(
			(res) => {
				this.user = res.data;
				console.log(this.user);
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
