const axios = require("axios");

async function fetchBuildings() {
  try {
    const response = await axios.get(
      "https://api-developers.spinalcom.com/api/v1/geographicContext/space"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
fetchBuildings();

async function fetchRoomByDynamicId(id) {
  try {
    const response = await axios.get(
      `https://api-developers.spinalcom.com/api/v1/room/${id}/control_endpoint_list`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// fetchRoomByDynamicId();
