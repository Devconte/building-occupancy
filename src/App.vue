<script>
export default {
  name: "App",
  components: {
    StatCard: () => import("./components/StatCardComponent.vue"),
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
    };
  },
};
</script>
<template>
  <div id="app">
    <header class="h-16 w-full"></header>
    <main class="container mx-auto">
      <h1 class="text-[#ffac49] text-center mb-6 text-3xl font-bold">
        [NOM DU BATIMENT]
      </h1>
      <div class="flex justify-evenly">
        <stat-card
          :key="index"
          v-for="(card, index) in statCards"
          :title="card.title"
          :value="card.value"
        ></stat-card>
      </div>
    </main>
  </div>
</template>

<style></style>
