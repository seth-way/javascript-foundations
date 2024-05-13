function createAirport(name, airlines, availableGates) {
  return { name, airlines, availableGates };
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, numberOfPlanes) {
  airport.availableGates -= numberOfPlanes;
  if (airport.availableGates < 0) {
    airport.message = `Oh no! Not enough gates available. Current overflow is ${-airport.availableGates}.`;
    airport.availableGates = 0;
  } else {
    airport.message = `Success! Current availability is ${airport.availableGates}.`;
  }
  return airport;
}

function checkAirlineLocations(airports, carrier) {
  const locations = [];

  for (const airport of airports) {
    if (airport.airlines.includes(carrier)) locations.push(airport.name);
  }

  return locations;
}

module.exports = {
  createAirport,
  welcomeGuests,
  landPlanes,
  checkAirlineLocations,
};
