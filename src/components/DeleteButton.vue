<template>
  <button :disabled="isAdmin" @click="onClick(targetId)">Delete</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeleteButton",
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
    targetId: {
      type: Number,
      required: true,
    },
  },
});
</script>
