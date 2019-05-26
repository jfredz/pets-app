<template>
  <div>
    <h1>
      <font-awesome-icon :icon="this.$route.params.species === 'cats' ? 'cat' : 'dog'" />
      {{ pet.name }}
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      pet: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const pet = this[this.$route.params.species][this.$route.params.id]
    this.pet = pet
  }
}
</script>
