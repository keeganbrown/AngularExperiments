import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';

import routing from './home.routes';
import HomeController from './home.controller';
import HomeAnimation from './home.animation';
import randomNames from '../../services/randomNames.service';
import githubRepos from '../../services/githubRepos.service';


export default angular.module('app.home', [uirouter, animate, randomNames, githubRepos])
  .config(routing)
  .constant('TweenMax', TweenMax)
  .controller('HomeController', HomeController)
  .animation('.github-repo-item', HomeAnimation.githubRepoItem)
  .animation('.user-greeting', HomeAnimation.userGreeting)
  .name;