import angular from 'angular';
import animate from 'angular-animate';


var HomepageAnimation = {
	'userGreeting': function animateUserGreeting ($window, $rootScope, TweenMax) {
		return {
			enter: function (element, done) {
				console.log('test', element);
				TweenMax.from(element, 1, 
					{ 
						text: '                   ',
						ease: Linear.easeNone,
						onComplete: function () {
							done();
						}
					});

			},
			leave: function (element, done) {
				TweenMax.to(element, 0.7, 
					{ 
						text: '                   ',
						ease: Linear.easeNone,
						onComplete: function () {
							done();
						}
					});
			}	
		};
	},
	'githubRepoItem': function animateGithubRepoItem ($window, $rootScope, TweenMax) {
		let index = 0;
		return {
			enter: function (element, done) {
				//console.log('test', element);
				index++;
				TweenMax.fromTo(element, 0.7, 
					{ 
						opacity: 0,
						rotationX: 0,
						top: 100
					}, 
					{ 
						opacity: 1, 
						rotationX: 360,
						top: 0,
						delay: index/50, 
						ease: Back.easeOut,
						onComplete: function () {
							done();
						}
					});

			},
			leave: function (element, done) {
				index--;
				TweenMax.fromTo(element, 0.3, 
					{ 
						opacity: 1,
						top: 0
					}, 
					{ 
						opacity: 0, 
						top: 100,
						delay: index/100, 
						ease: Back.easeOut,
						onComplete: function () {
							done();
						}
					});

			}
		};
	}
}

export default HomepageAnimation
