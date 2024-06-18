<template>
  <div class="">
    <search-bar @search="search" />
    <table-list
      class="mt-10 w-full bg-slate-50 rounded-lg shadow py-4"
      :titles="titles"
      :rows="searchedData ?? computedFloors"
    ></table-list>
  </div>
</template>

<script>
export default {
  name: "BuildingTableComponent",
  components: {
    TableList: () => import("./TableListComponent.vue"),
    SearchBar: () => import("./SearchBarComponent.vue"),
  },
  props: {
    floors: {
      type: Array,
      required: false,
    },
  },
  computed: {
    computedFloors() {
      const floors = [];
      this.floors?.forEach((floor) => {
        floors.push([floor.name]);
      });
      return floors;
    },
  },
  data() {
    return {
      titles: ["Nom de l'étage", "% d'occupation"],
      searchedData: null,
    };
  },
  methods: {
    search: function (event) {
      const result = this.floors?.filter((floor) => {
        return floor?.name.toLowerCase().includes(event.toLowerCase())
          ? [floor.name]
          : null;
      });
      this.searchedData = result.map((floor) => [floor.name]);
    },
  },
};
</script>
