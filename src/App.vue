<script>
import { fetchBuildings } from "./services/axios";
export default {
  name: "App",
  components: {
    BuildingStat: () => import("./components/BuildingStatsComponent.vue"),
    BuildingTable: () => import("./components/BuildingTableComponent.vue"),
  },
  async mounted() {
    await this.initState();
  },
  data() {
    return {
      building: null,
    };
  },
  methods: {
    initState: async function () {
      const results = await fetchBuildings();
      this.building = results[0];
      this.building.floors.forEach(async (floor) => {
        await floor.initRooms();
      });
    },
  },
};
</script>
<template>
  <div id="app">
    <header class="h-16 w-full"></header>
    <main class="container mx-auto">
      <h1 class="text-[#ffac49] text-center text-3xl font-bold">
        {{ building?.name ?? "Chargement..." }}
      </h1>

      <building-stat
        class="flex justify-evenly my-10 flex-wrap gap-y-2"
        :numberOfFloors="building?.floors?.length.toString() ?? '0'"
        :numberOfRooms="building?.getTotalPieces().toString() ?? '0'"
        occupationRate="80%"
      />

      <building-table :floors="building?.floors" />
    </main>
  </div>
</template>

<style></style>
