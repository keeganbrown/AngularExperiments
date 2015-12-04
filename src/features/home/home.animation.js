import angular from 'angular';
import animate from 'angular-animate';


export default function animation ($window, $rootScope, TweenMax) {
	//console.log('test', $window, $rootScope, TweenMax);
	let index = 0;
	return {
		enter: function (element, done, x) {
			console.log('test', element);
			//done();
			index++;
			TweenMax.fromTo(element, 0.5, 
				{ 
					opacity: 0,
					top: 100
				}, 
				{ 
					opacity: 1, 
					top: 0,
					delay: index/10, 
					ease: Back.easeOut,
					onComplete: function () {
						$rootScope.$apply(function () {
							$rootScope.$broadcast('bgTransitionComplete');
						});
						done();
					}
				});

		},

		leave: function (element, done) {
			TweenMax.to(element, 0.5, {left: -$window.innerWidth, onComplete: done});
		}
	};
}