export default class DeskController {
    constructor($http) {
        this.$http = $http;
        this.name = 'Desk';
        console.log(this.name);
    }
}

DeskController.$inject = ["$http"];