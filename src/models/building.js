import { Floor } from "./floor.js";

export class Building {
  #_floors = [];
  #_name;
  #_id;
  #_staticId;
  constructor(datas) {
    this.#_floors = datas["children"].map((floor) => new Floor(floor));
    this.#_name = datas["name"];
    this.#_id = datas["dynamicId"];
    this.#_staticId = datas["staticId"];
  }

  get floors() {
    return this.#_floors;
  }
  get name() {
    return this.#_name;
  }
  get id() {
    return this.#_id;
  }
  get staticId() {
    return this.#_staticId;
  }

  getTotalPieces() {
    return this.#_floors.reduce((acc, floor) => acc + floor.rooms.length, 0);
  }

  numberOfFloors() {
    return this.#_floors.length;
  }
}
