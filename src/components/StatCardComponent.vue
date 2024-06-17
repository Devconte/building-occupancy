<template>
  <div
    class="h-52 w-52 bg-amber-500 rounded-xl shadow-sm flex items-center justify-center flex-col py-4"
  >
    <div class="font-bold italic text-medium text-slate-800">{{ title }}</div>

    <div
      class="flex-1 flex text-neutral-900 justify-center items-center text-8xl slashed-zero tabular-nums"
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
