<template>
  <table class="w-full flex flex-col px-10 border-spacing-y-2">
    <thead class="w-full">
      <tr class="flex justify-between items-center">
        <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
      </tr>
    </thead>
    <tbody class="w-full flex flex-col gap-2">
      <tr
        v-for="(row, index) in rows"
        :key="index"
        class="flex w-full justify-between items-center rounded hover:bg-amber-300 hover:cursor-pointer"
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
