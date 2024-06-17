import axios from "axios";
import { Building } from "../models/building";
export async function fetchBuildings() {
  try {
    const response = await axios.get(
      "https://api-developers.spinalcom.com/api/v1/geographicContext/space"
    );
    const buildings = response.data["children"].map((building) => {
      return new Building(building);
    });
    return buildings;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRoomByDynamicId(id) {
  try {
    const response = await axios.get(
      `https://api-developers.spinalcom.com/api/v1/room/${id}/control_endpoint_list`
    );
    return response.data[0]?.endpoints;
  } catch (error) {
    console.error(error);
  }
}
