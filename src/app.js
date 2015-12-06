import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import TweenMax from 'gsap';
import TextPlugin from 'gsap/src/uncompressed/plugins/TextPlugin';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

//TweenMax.plugins([TextPlugin]);

angular.module('app', [uirouter, home])
	.config(routing);