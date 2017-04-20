(function(){
  var app = angular.module('application', ['directives']);

  app.controller('ProjetController', function($scope,Datas,$interval){

    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);

    this.getDate = function(){
      return new Date();
    };

    this.loadProjets = function(){
      Datas.loadProjets();
    };

    this.getProjets = function() {
      return Datas.getProjets();
    };

    this.getBgColor = function(v){
      if ($scope.couleur) {
        switch (parseInt(v)) {
          case 1: return "#00FF00"; //green
          case 2: return "#FFFF00"; //yellow
          case 3: return "#FF0000"; //red
        }
      }
    };

    this.getOrdre = function(){
      return $scope.ordre === "1";
    };

    this.deleteProjet = function(id){
      Datas.deleteProjet(id);
    };

    this.toggleAction = function(){
      $scope.action = !$scope.action;
      if ($scope.action) {
        $scope.top = 20;
      }
      else{
        $scope.top = 70;
      }
    };
});

app.filter('stars', function() {
return function(val) {
  switch (parseInt(val)) {
    case 1: return "*";
    case 2: return "**";
    case 3: return "***";
  }
};
});

})();
