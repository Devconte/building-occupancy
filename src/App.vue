<script>
import { fetchBuildings } from "./services/axios";
export default {
  name: "App",
  components: {
    StatCard: () => import("./components/StatCardComponent.vue"),
    TableList: () => import("./components/TableListComponent.vue"),
  },
  async mounted() {
    await fetchBuildings();
  },
  data() {
    return {
      statCards: [
        {
          title: "nombre d'étages",
          value: "3",
        },
        { title: "nombre de pièces", value: "57" },
        { title: "pourcentage d'occupation", value: "80%" },
      ],

      tables: {
        titles: ["Nom de l'étage", "% d'occupation"],
        rows: [
          ["Rez-de-chaussée", "80%"],
          ["1er étage", "70%"],
          ["2ème étage", "60%"],
        ],
      },

      searchedData: null,
    };
  },
  methods: {
    search: function (event) {
      this.searchedData = this.tables.rows.filter((row) => {
        return row[0].toLowerCase().includes(event.target.value.toLowerCase());
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
        [NOM DU BATIMENT]
      </h1>
      <!-- STATISTIQUE BATIMENT -->
      <div class="flex justify-evenly my-10">
        <stat-card
          :key="index"
          v-for="(card, index) in statCards"
          :title="card.title"
          :value="card.value"
        ></stat-card>
      </div>
      <!-- STATISTIQUE BATIMENT -->
      <!-- SEARCH BAR -->
      <div class="flex">
        <input
          type="search"
          @keyup="search($event)"
          class="w-full h-10 rounded-l-lg shadow px-4 outline-none hover:bg-gray-100"
          placeholder="Rechercher un étage ou une pièce"
        />
        <button
          class="bg-amber-500 hover:bg-amber-400 shadow active:bg-amber-300 w-14 h-10 flex justify-center items-center rounded-r-lg"
        >
          <i class="fa-solid fa-magnifying-glass text-white"></i>
        </button>
      </div>
      <!-- SEARCH BAR -->
      <!--  TABLE LIST -->
      <table-list
        class="mt-10 w-full bg-slate-50 rounded-lg shadow py-4"
        :titles="tables.titles"
        :rows="searchedData ?? tables.rows"
      ></table-list>

      <!-- TABLE LIST-->
    </main>
  </div>
</template>

<style></style>
