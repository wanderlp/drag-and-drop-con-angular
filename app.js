'use strict';

var app = angular.module('DemoDragAndDrop', []);

app.controller('DemoCtrl', ['$scope', function ($scope) {
    $scope.disponible = [
        { id: 'disponible_0', avatar: 'https://cdn4.iconfinder.com/data/icons/imoticons/105/imoticon_3-64.png' },
        { id: 'disponible_1', avatar: 'https://cdn4.iconfinder.com/data/icons/imoticons/105/imoticon_6-64.png' },
        { id: 'disponible_2', avatar: 'https://cdn4.iconfinder.com/data/icons/imoticons/105/imoticon_4-64.png' }
    ];

    $scope.resultado = [
        { id: 'resultado_0', avatar: 'https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/cancel.png' },
        { id: 'resultado_1', avatar: 'https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/cancel.png' },
        { id: 'resultado_2', avatar: 'https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/cancel.png' },
        { id: 'resultado_3', avatar: 'https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/cancel.png' },
        { id: 'resultado_4', avatar: 'https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/cancel.png' },
        { id: 'resultado_5', avatar: 'https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/cancel.png' }
    ];

    $scope.mover = function (origin, dest) {
        var origin$name = origin.split('_')[0];
        var origin$index = origin.split('_')[1];

        var dest$name = dest.split('_')[0];
        var dest$index = dest.split('_')[1];

        var bkDestino = $scope[dest$name][dest$index].avatar;
        $scope.$apply(function () {
            $scope[dest$name][dest$index].avatar = $scope[origin$name][origin$index].avatar;
            $scope[origin$name][origin$index].avatar = bkDestino;
        });
    };
}]);

app.directive('draggableThing', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr, ctrl) {
            elem.bind('dragstart', function (e) {
                event.dataTransfer.setData("text", event.target.id);
            });
        }
    };
});

app.directive('droppableArea', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr, ctrl) {
            elem.bind('drop', function (e, ui) {
                e.preventDefault();
                var origin = event.dataTransfer.getData("text");
                var dest = attr['id'];
                scope.mover(origin, dest);
            });
            elem.bind('dragover', function (e) {
                e.preventDefault();
            });
        }
    };
});