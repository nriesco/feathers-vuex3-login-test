<template>
  <div class="about">
    <h1>Results</h1>

    <table style="width: 300px; margin-left: auto; margin-right: auto">
      <tr>
        <th>Address</th>
        <th>Number</th>
      </tr>
      <tr v-for="d in data" v-bind:key="d">
        <td>{{d.text}}</td>
        <td>{{d.number}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      data: []
    }
  },
  // components: {
  //   HelloWorld
  // }
  async mounted () {
    await this.$store.dispatch('address/create', { text: 'super street', number: Math.round(Math.random() * 3000) })
    const result = await this.$store.dispatch('address/find', { query: {} })
    this.data = result.data
    console.log('>>> the result', result)
  }
}
</script>
