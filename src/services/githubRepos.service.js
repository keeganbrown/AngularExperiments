import angular from 'angular';

class GithupRepos {
	constructor($http) {
		this.userconfig = {
			root: 'https://api.github.com/users',
			username: '/keeganbrown',
			repos: '/repos',
			fallback: false,
			lockdown: false
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
		this.batchDataUpdate();
	}
	changeUser(newUser) {
		this.userconfig.username = newUser;
		this.batchDataUpdate();
	}
	batchDataUpdate( errorFallback ) {
		if ( errorFallback ) {
			this.userconfig.fallback = true;
		}
		if ( !this.userconfig.lockdown ) {
			this.updateRepos();
			this.updateUser();
			if ( this.userconfig.fallback ) {
				this.userconfig.lockdown = true;
			}
		}
	}
	getReposUrl() {
		if (this.userconfig.fallback ) {
			return '/json/repos.json'
		}
		return this.userconfig.root + this.userconfig.username + this.userconfig.repos;
	}
	getUserUrl() {
		if (this.userconfig.fallback ) {
			return '/json/user.json'
		}
		return this.userconfig.root + this.userconfig.username;
	}
	getData(setName, cb) {
		if (cb) cb(this[setName]);
		return this[setName];
	}
	updateDataSet( promiseStore, getUrlHandle, storageLocation ) {
		this[promiseStore] = this.$http({
			url: this[getUrlHandle]()
		}).then(
			(res) => {
				this[storageLocation] = res.data;
			}, 
			(error) => {
				console.log(error);
				this.batchDataUpdate( true );
			}
		);		
	}
	updateRepos() {
		this.updateDataSet('reposPromise','getReposUrl','repos');
	}
	updateUser() {
		this.updateDataSet('usersPromise','getUserUrl','user');
	}
}

GithupRepos.$inject = ['$http'];

export default angular.module('services.github-repos', [])
	.service('githubRepos', GithupRepos)
	.name;
