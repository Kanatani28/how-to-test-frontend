<template>
  <tr :class="user.enable ? '' : 'disabled'">
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.mail }}</td>
    <td>
      <DeleteButton
        :isAdmin="user.isAdmin"
        :onClick="onDeleteBtnClick"
        :targetId="user.id"
      />
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DeleteButton from "./DeleteButton.vue";

export default defineComponent({
  name: "UserRow",
  components: {
    DeleteButton,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    onDeleteBtnClick: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped>
.disabled {
  text-decoration: line-through;
}
</style>
