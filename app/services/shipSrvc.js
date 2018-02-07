angular.module('starships').service('shipsSrvc', function($http) {
    this.ships = ['X Wing', "T-fighter", 'Death Star', "Millenium Falcon"];

    this.getShips = function(){
        return $http.get('https://swapi.co/api/starships/').then(result => {
            return result.data.results.map(ship=>{
                let ary = ship.url.split('/');
                ship.id = ary[ary.length-2];
                return ship
            })
        })
    }

    this.getShip = function(id){
        return $http.get('https://swapi.co/api/starships/'+ id).then(result => {
            return result.data;
        })
    }
})