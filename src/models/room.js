import { fetchRoomByDynamicId } from "../services/axios";
export class Room {
  #_id;
  #_name;
  #_staticId;
  #_endpoints;
  constructor(datas) {
    this.#_id = datas["dynamicId"];
    this.#_name = datas["name"];
    this.#_staticId = datas["staticId"];
    this.#_endpoints = [];
  }

  get id() {
    return this.#_id;
  }
  get name() {
    return this.#_name;
  }
  get staticId() {
    return this.#_staticId;
  }

  get endpoints() {
    return this.#_endpoints;
  }

  async fetchEndpoints() {
    this.#_endpoints = await fetchRoomByDynamicId(this.#_id);
  }

  isOccupied() {
    console.log(this.#_endpoints[4]?.currentValue);
    return this.#_endpoints[4]?.currentValue;
  }
}
