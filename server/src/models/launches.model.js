const launches = new Map();
var latestFlightNumber = 100;

const launch  = {
  flightNumber : 100,
  mission : "Kepler Exploratin X",
  rocket: "Explorer 1b",
  launchDate : new Date('Decemeber 27, 2030'),
  target : 'kepler 442-b',
  customers : ['Sharan Hundekar', 'NASA'],
  upcoming : true,
  success : true
}
launches.set(launch.flightNo, launch);

function existLauchWithId(launchId) {
  return launches.has(launchId)
}

function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    flightNumber :latestFlightNumber,
    customers : ['Sharan Hundekar', 'NASA'],
    upcoming : true,
    success : true,
  }));

}

function deleteLaunch(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted
}

module.exports = {
  existLauchWithId,
  getAllLaunches,
  addNewLaunch,
  deleteLaunch,

}