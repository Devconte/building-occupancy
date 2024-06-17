<template>
  <div
    class="h-52 w-52 bg-gray-200 rounded-xl shadow-sm flex items-center justify-center flex-col py-4"
  >
    <div class="font-semibold text-sm text-amber-600">{{ title }}</div>

    <div
      class="flex-1 flex justify-center items-center text-8xl slashed-zero tabular-nums"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StatCardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
