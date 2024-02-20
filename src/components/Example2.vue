<script setup>

import {ref} from "vue";

const model = ref(0);

</script>

<template>
  <div class="before">
    Lorem ipsum
  </div>
  <select v-model="model">
    <option>0</option>
    <option>1</option>
  </select>

  <div class="after">
    Lorem ipsum
  </div>
</template>

