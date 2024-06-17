<template>
  <div class="flex">
    <input
      type="search"
      @keyup="$emit('search', $event.target.value)"
      class="w-full h-10 rounded-l-lg shadow px-4 outline-none hover:bg-gray-100"
      placeholder="Rechercher un étage ou une pièce"
    />
    <button
      class="bg-amber-500 hover:bg-amber-400 shadow active:bg-amber-300 w-14 h-10 flex justify-center items-center rounded-r-lg"
    >
      <i class="fa-solid fa-magnifying-glass text-white"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBarComponent",
};
</script>
