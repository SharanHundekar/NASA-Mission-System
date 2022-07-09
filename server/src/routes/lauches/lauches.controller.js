const {getAllLaunches, addNewLaunch, existLauchWithId, deleteLaunch} = require('../../models/launches.model');


function httpgetAllLaunches(req, res) {
  return res.status(200).json((getAllLaunches()))
  
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (!launch.mission || !launch.launchDate || !launch.rocket || !launch.target) {
    return res.status(400).json({
      'Error' : 'Missing required property'
    })
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      'Error' : 'Invalid date property'
    })
  }
  addNewLaunch(launch)
  return res.status(201).json(launch)
}


function httpDeleteLaunch(req, res) {
  console.log('== im cale ===')
  const launchId = Number(req.params.id);
  console.log(launchId)
  if (!launchId) {
    return res.status(201).json({
      'error' : 'Missing the launchId in the property'
    })
  }

  if (existLauchWithId(launchId)) {
  
    const aborted = deleteLaunch(launchId);
    return res.status(200).json(aborted);
  
  } else {
    return res.status(400).json({
      'error' : 'No launch found with id '+launchId
    })
  }
  
}

module.exports = {
  httpgetAllLaunches,
  httpAddNewLaunch,
  httpDeleteLaunch
}