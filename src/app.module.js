import './less/styles.less';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import homeComponent from './home';
import aboutComponent from './about';
import loginComponent from "./login";
import registerComponent from "./register";
angular.module('newsfeed', [uirouter, homeComponent, aboutComponent,loginComponent,registerComponent])
    .config(routes);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

