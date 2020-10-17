<template>
  <div>
    <h1>I am {{name}} Component</h1>

    <router-view></router-view>

    <nav>
      <li><router-link :to="'/'">Home</router-link></li>
      <li><router-link :to="'/about'">About</router-link></li>
    </nav>

    <div>
      <h3>New Users</h3>
      <form @submit.prevent="submitNewUser">
        <label>
          <span>Name</span>
          <input type="text" v-model="newUserName">
        </label>
        <button>submit</button>
      </form>
    </div>

    <div>
      <h3>Store User</h3>
      <div>
        <p>Id: <span>{{user.id}}</span></p>
        <p>Name: <span>{{user.name}}</span></p>
      </div>
    </div>

    <div>
      <h3>Router Values</h3>
      <div>
        <p>FullPath: {{ $route.fullPath}}</p>
        <p>Path: {{ $route.path}}</p>
      </div>
      <pre>{{$route}}</pre>
    </div>

    <div>
      <h3>i18n</h3>
      <p class="warning">vue-i18n suffers an error on locale changing. I wasn't able to figure out yet why.</p>
      <SelectLocale />
      <div>
        <p>
          <span>{{$i18n.locale}}</span> :
          <span>{{ $t('message.hello') }}</span>
        </p>

        <p>{{ $i18n.messages }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import SelectLocale from "./components/SelectLocale.vue";
export default {
name: "App",
  created() {
    console.log(this.$i18n)
  },
  data() {
    return {
      name: 'Vue',
      newUserName: '',
      langs: ["ja", "en"]
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    submitNewUser() {
      this.$store.commit('SET_NAME', this.newUserName)
      this.newUserName = ''
    }
  },
  components: {
    SelectLocale
  }
}
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>