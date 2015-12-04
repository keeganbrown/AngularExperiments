
export default class HomeController {
	constructor(randomNames, githubRepos, $scope) {
		this.random = randomNames;
		this.githubRepos = githubRepos;
		this.user = this.getUser();
		this.name = this.user.name;
		//console.log(randomNames, githubRepos);
	}
	getUser() {
		return this.githubRepos.getUser();
	}
	getRepos() {
		return this.githubRepos.getRepos();
	}
	changeName() {
		this.name = this.random.getName(this.name);
	}
}

HomeController.$inject = ['randomNames', 'githubRepos'];