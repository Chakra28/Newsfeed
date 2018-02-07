routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
    $stateProvider
        .state('desk', {
            url: '/angular',
            template: require('./desk.html'),
            controller: 'DeskController',
            controllerAs: 'deskCtrl',
        });
}