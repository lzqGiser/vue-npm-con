<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>button test</h2>
    <h3>{{item.title}}</h3>
  </div>
</template>
<script>
    export default {
        name: 'LMbutton',
        data () {
            return {
                msg: 'button component test!!',
                item:this.itemProps
            }
        },
        created: function () {
        },
        props:{
          itemProps: {
              type: Object
          }
        },
        components: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1, h2
    font-weight: normal;
    color: blue;

</style>
