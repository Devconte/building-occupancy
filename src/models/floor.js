import { Room } from "./room";
export class Floor {
  #_name;
  #_id;
  #_staticId;
  #_rooms = [];

  constructor(datas) {
    this.#_name = datas["name"];
    this.#_id = datas["dynamicId"];
    this.#_staticId = datas["staticId"];
    this.#_rooms = datas["children"].map((room) => new Room(room));
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

  get rooms() {
    return this.#_rooms;
  }

  async initRooms() {
    Promise.resolve(
      this.#_rooms.forEach(async (room) => {
        await room.fetchEndpoints();
      })
    );
  }

  getOccupationRate() {
    let total = this.#_rooms.length;
    let occupied = 0;
    this.#_rooms.forEach((room) => {
      if (room.isOccupied()) {
        occupied++;
      }
    });
    return (occupied / total) * 100;
  }
}
