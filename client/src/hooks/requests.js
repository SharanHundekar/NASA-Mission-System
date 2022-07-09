const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {

  const myPlanets = await fetch(`${API_URL}/planets`)
  return myPlanets.json();

}

async function httpGetLaunches() {

  const myLaunches = await fetch(`${API_URL}/launches`)
  const myLaunchesResult = myLaunches.json();
  console.log(myLaunchesResult)
  return myLaunchesResult 
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method : 'post',
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(launch)
    })
  } catch (err) {
    return {
      ok : false
    }
  }
}
// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {

    return await fetch(`${API_URL}/launches/${id}`, {
      method : "delete"
    })

  } catch (err) {
    console.log(err);
    return {
      ok : false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};