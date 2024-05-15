function createElevator(building, floors, currentFloor, passengers) {
  return { building, floors, currentFloor, passengers };
}

function changeFloors(elevator, floor) {
  if (elevator.currentFloor === floor) {
    return `You're already on floor ${floor}!`;
  }

  if (floor > elevator.floors || floor < 1) {
    return `Floor ${floor} does not exist!`;
  }

  return `Taking you to floor ${floor}!`;
}

function dropOffPassenger(elevator, passenger) {
  var passengers = elevator.passengers;
  var passengerIndex = passengers.indexOf(passenger);

  if (passengerIndex >= 0) passengers.splice(passengerIndex, 1);
  
  return passengers;
}

module.exports = { createElevator, changeFloors, dropOffPassenger };
