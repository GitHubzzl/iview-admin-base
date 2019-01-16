<template>
  <div>
    <p>rules</p>
  </div>
</template>
<script>
  export default {
    name:'rules',
    data () {
      return {
        rules: {
          foo: {
            validate: value => value > 1,
            message: 'error'
          }

        }
      }
    },
    created () {
      const rules = this.rules
      if (rules) {
        Object.keys(rules).forEach(key => {
          const { validate, message } = rules[key]
          this.$watch(key,newValue => {
            const valid = validate(newValue)
            if(!valid){
              console.log(message)
            }
          })
        })
      }
    }
  }

</script>
