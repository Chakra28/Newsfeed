import './less/styles.less';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import desk from './desk';

angular.module('MyApp', [uirouter, desk])
    .config(routes);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

