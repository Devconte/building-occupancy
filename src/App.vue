<script>
export default {
  name: "App",
  components: {},
};
</script>
<template>
  <div id="app">
    <header class="h-16 w-full"></header>
    <main class="container mx-auto">
      <h1 class="text-[#ffac49]">
        Statistiques d'occupation du batiment: [NOM DU BATIMENT]
      </h1>
      <div class="floor-container">
        <p>[Nom Etage] occupé à [78%]</p>
        <div class="roomList">
          <div class="room">
            <p>[Room 1]</p>
            <p>[Status]</p>
          </div>
          <div class="room">
            <p>Room 1</p>
            <p>Status</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
