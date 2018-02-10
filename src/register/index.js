import angular from "angular";
import uiRouter from "angular-ui-router";
import RegisterController from "./register.controller";
import route from "./register.route";
var registerComponent=angular.module("newsfeed.register",[uiRouter])
.config(route)
.controller("RegisterController",RegisterController)
.name;
export default registerComponent;