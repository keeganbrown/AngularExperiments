
export default class HomeController {
	constructor(randomNames, githubRepos, $scope) {
		this.random = randomNames;
		this.githubRepos = githubRepos;
		this.user = this.getUser();
		this.name = this.user.name;
		this.$scope = $scope;
		this.getUser();
	}
	showGreeting() {
		return !!this.getUser().url;
	}
	getUser() {
		this.user = this.githubRepos.getData('user');
		return this.user;
	}
	getRepos() {
		return this.githubRepos.getData('repos');
	}
	changeName(item) {
		console.log(item);
		this.name = this.githubRepos.changeUser( item );
	}
}

HomeController.$inject = ['randomNames', 'githubRepos','$scope'];