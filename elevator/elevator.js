function createElevator(building, floors, currentFloor, passengers) {
  return { building, floors, currentFloor, passengers };
}

function changeFloors(elevator, floor) {
  if (elevator.currentFloor === floor) {
    return `You're already on floor ${floor}!`
  }

  if (floor > elevator.floors || floor < 1) {
    return `Floor ${floor} does not exist!`
  }
}

function dropOffPassenger() {}

module.exports = { createElevator, changeFloors, dropOffPassenger };
