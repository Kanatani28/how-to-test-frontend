<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Mail</th>
      <th>Delete</th>
    </tr>
    <UserRow
      v-for="user in users"
      :key="user.id"
      :user="user"
      :onDeleteBtnClick="deleteUser"
    />
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/@types";
import getUsers from "@/usecase/show-users";
import UserRow from "@/components/UserRow.vue";

export default defineComponent({
  name: "App",
  components: {
    UserRow,
  },
  data(): { users: User[] } {
    return {
      users: [],
    };
  },
  mounted: function () {
    // 仮のデータ取得
    this.users = getUsers();
  },
  methods: {
    // 仮の削除処理
    deleteUser(id: number) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users[i].enable = false;
        }
      }
    },
  },
});
</script>
