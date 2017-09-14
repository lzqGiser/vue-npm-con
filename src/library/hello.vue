<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>{{item.title}}</h3>
  </div>
</template>
<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                item:this.item
            }
        },
        created: function () {
        },
        props:{
          item: Object
        },
        components: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1, h2
    font-weight: normal;
    color: red;

</style>
