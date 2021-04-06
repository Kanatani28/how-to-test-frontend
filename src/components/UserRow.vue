<template>
  <tr :class="user.enable ? '' : 'disabled'">
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.mail }}</td>
    <td>
      <button :disabled="user.isAdmin" @click="onDeleteBtnClick(user.id)">
        Delete
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/@types";

type Props = {
  user: User;
  onDeleteBtnClick: (index: number) => void;
};

export default defineComponent({
  name: "UserRow",
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
  serup(props: Props) {
    props.user;
    props.onDeleteBtnClick;
  },
});
</script>

<style scoped>
.disabled {
  text-decoration: line-through;
}
</style>
