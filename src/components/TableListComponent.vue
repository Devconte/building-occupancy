<template>
  <table
    class="w-full flex flex-col border-spacing-y-2 border-collapse border-slate-500"
  >
    <thead class="w-full px-2">
      <tr class="flex justify-between items-center">
        <th
          class="text-xl font-extra-bold"
          v-for="(title, index) in titles"
          :key="index"
        >
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody class="w-full flex flex-col gap-2">
      <tr
        v-for="(row, index) in rows"
        :key="index"
        class="flex w-full px-2 justify-between items-center hover:bg-amber-300 hover:cursor-pointer transition-all duration-300 h-10"
        :class="index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200'"
      >
        <td v-for="(name, index) in row" :key="index">{{ name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableList",
  props: {
    titles: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>
