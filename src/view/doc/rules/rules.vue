<template>
  <div>
    <p></p>
  </div>
</template>
<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    name:'rules',
    computed:{
      ...mapState({
        term: state => state.user.term
      }),
      ...mapGetters(['friendsLen'])
    },
    data () {
      return {
        'ser':123
      }
    },
    mounted(){
      console.log(this.term)
      this.getData()
    },
    methods:{
      getData(){
        this.$axios.get('/user/getTerm').then(data=>{
          let res = data.data
          if(res.type === '1'){
            this.$store.commit('updateTerm',"2019上01")
          }else if(res.type === '2'){
            this.$store.commit('updateTerm',"2019下02")
          }
          console.log(this.friendsLen)
          console.log(this.term)

        })
      }
    }
  }

</script>
