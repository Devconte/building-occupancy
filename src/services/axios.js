const axios = require("axios");

async function fetchRooms() {
  try {
    const response = await axios.get(
      "https://api-developers.spinalcom.com/api/v1/geographicContext/space"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
// fetchRooms();

async function fetchEndpoints() {
  try {
    const response = await axios.get(
      "https://api-developers.spinalcom.com/api/v1/room/31891664/control_endpoint_list"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// fetchEndpoints();
