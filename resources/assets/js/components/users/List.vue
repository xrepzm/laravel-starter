<template>
  <div>
    <div class="list-group" v-if="users.length">
      <div v-for="user in users" class="list-group-item">
        {{ user.name }}
      </div>
    </div>

    <div class="list-group" v-else>
      <div class="list-group-item">
        No users in database!
      </div>
    </div>

    <div class="list-group">
      <div class="list-group-item">
        <div class="ui form">
          <div class="field">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="user.name">
          </div>
          <div class="field">
            <label for="email">E-mail:</label>
            <input type="text" id="email" v-model="user.email">
          </div>
          <div class="field">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="user.password">
          </div>
        </div>
        <div class="ui icon button" @click="addUser(user)">
          <i class="plus icon"></i> Add user
        </div>
        <div class="ui icon button" @click="getAllUsers">
          Get users
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    name: 'UserListComponent',
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapState({
        users: state => state.UsersModule.users
      }),
      ...mapGetters(['allUsers'])
    },
    methods: {
      ...mapActions(['getAllUsers', 'addUser'])
    }
  }
</script>
