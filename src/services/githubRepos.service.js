import angular from 'angular';

class GithupRepos {
	constructor($http) {
		this.userconfig = {
			root: 'https://api.github.com/users',
			username: '/keeganbrown',
			repos: '/repos',
			fallback: false
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
		this.updateData();
	}
	updateData() {
		this.updateRepos();
		this.updateUser();
	}
	getReposUrl() {
		if (this.userconfig.fallback) {
			return '/json/repos.json'
		}
		return this.userconfig.root + this.userconfig.username + this.userconfig.repos;
	}
	getUserUrl() {
		if (this.userconfig.fallback) {
			return '/json/keeganbrown.json'
		}
		return this.userconfig.root + this.userconfig.username;
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
			url: this.getReposUrl()
		}).then(
			(res) => {
				this.repos = res.data;
			}, 
			(error) => {
				console.log(error);
				this.userconfig.fallback = true;
				this.updateData();
			}
		);
	}
	updateUser() {
		//let this = this;
		this.usersPromise = this.$http({
			url: this.getUserUrl()
		}).then(
			(res) => {
				this.user = res.data;
				console.log(this.user);
			}, 
			(error) => {
				console.log(error);
				this.userconfig.fallback = true;
				this.updateData();
			}
		);
	}
}

GithupRepos.$inject = ['$http'];

export default angular.module('services.github-repos', [])
	.service('githubRepos', GithupRepos)
	.name;
