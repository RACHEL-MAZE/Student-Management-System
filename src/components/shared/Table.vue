<!-- <template>
  <table>
    <thead>
      <tr>
       <th v-for="header in headers" :key="header" class="border p-2">
          {{ header }}
        </th>
        <th class="p-2">Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="student in students" :key="student.id" class="p-1">
        {{ body }}
        <td class="flex gap-2">

          <BaseButton
            label="Edit"
            buttonClass="text-purple-900 hover:text-purple-400"
            @click="$emit('edit', student)"
          />

          <BaseButton
            label="Delete"
            buttonClass="text-red-900 hover:text-red-400"
            @click="$emit('delete', student.id)"
          />

        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

defineProps({
  headers: Array,
  students: Array
})

defineEmits(['edit','delete'])
</script> -->


<template>
  <div class="w-full">
    <table class="w-full ">
      <thead>
        <tr class="">
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="border p-2 text-left"
          >
            {{ column.label }}
          </th>

          <th v-if="$slots.actions" class="border p-2 text-left">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="!data.length">
          <td
            :colspan="columns.length + ($slots.actions ? 1 : 0)"
            class="text-center p-3"
          >
            No data available
          </td>
        </tr>

        <tr
          v-for="(item, rowIndex) in data"
          :key="item[idKey] || rowIndex"
          class="hover:bg-gray-50"
        >
          <td
            v-for="(column, colIndex) in columns"
            :key="colIndex"
            class="border p-2"
          >

            <slot
              :name="column.key"
              :item="item"
              :index="rowIndex"
            >
              {{ item[column.key] }}
            </slot>
          </td>


          <td v-if="$slots.actions" class="border p-2">
            <slot name="actions" :item="item" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  idKey: {
    type: String,
    default: "id"
  }
})
</script>