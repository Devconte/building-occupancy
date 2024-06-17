<template>
  <div>
    <stat-card title="nombre d'étages" :value="numberOfFloors" />
    <stat-card title="nombre de pièces" :value="numberOfRooms" />
    <stat-card title="taux d'occupation" :value="occupationRate" />
  </div>
</template>

<script>
export default {
  name: "BuildingStatsComponent",
  components: {
    StatCard: () => import("./StatCardComponent.vue"),
  },
  props: {
    numberOfFloors: {
      type: String,
      required: true,
    },
    numberOfRooms: {
      type: String,
      required: true,
    },
    occupationRate: {
      type: String,
      required: true,
    },
  },
};
</script>
