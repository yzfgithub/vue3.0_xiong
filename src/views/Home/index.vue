<template>
  <div class="hello">
    111
  </div>
</template>

<script>
import * as api from '../../requests/common.js'
import { ref, onMounted, toRefs, watch, computed } from 'vue'

export default {
    props: {
      user: {}
    },
    setup(props) {

      const { user } = toRefs(props) // props 属性 ref 化
      console.log(user);
      // console.log(props) // { user: '' }
      // return {} // 这里返回的任何内容都可以用于组件的其余部分
      const repositories = ref([])
      const getUserRepositories = async () => {
        // repositories.value = await fetchUserRepositories(props.user)
        repositories.value = 'abc'
      }

      onMounted(getUserRepositories); // 组合式api的生命周期

      const counter = ref(0)
      watch(counter, (newValue, oldValue) => {
        console.log('The new counter value is: ' + counter.value, newValue, oldValue)
      })

      // computed use
        const searchQuery = ref('')
        const repositoriesMatchingSearchQuery = computed(() => {
          return repositories.value.filter(
            repository => repository.name.includes(searchQuery.value)
          )
        })

      return {
        repositories,
        getUserRepositories,

        searchQuery,
        repositoriesMatchingSearchQuery
      }
    },
    components: {},
    data () {
      return {
      }
    },
    computed:{},
    watch: {},
    methods: {
      getList(){
        api.getJson('http://www.baidu.com').then((res) => {
          console.log('gg', res);
        })
      },
    },
    mounted() {
      this.getList();
    },
  }
</script>
