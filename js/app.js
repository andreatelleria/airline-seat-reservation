/*Declaramos un array que representa los asientos de nuestro avión con false indicando que estos
están vacíos, y co true que están ocupados*/
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

/*Contador que nos ayudará a rastrear nuestros asientos ocupados*/
var busySeats = 0;

var paintSeats = function (array) {
  var containerSeats = document.getElementbyId('seats');

  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    /*Del 1er al 4to asiento son primera clase (índice 0 al índice 3)*/
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};

paintSeats(airlineSeats);
