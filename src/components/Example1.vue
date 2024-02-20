<script setup>

import {ref} from "vue";

const model = ref();
const condition = true;

</script>

<template>
  <div class="before">
    Lorem ipsum
  </div>
  <div>
    <select
        v-if="condition"
        v-model="model"
    >
      <option>0</option>
      <option>1</option>
    </select>
  </div>
  <div class="after">
    Lorem ipsum
  </div>
</template>

