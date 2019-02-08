<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs8 offset>
        <panel title="Songs">
          <div v-for="song in songs" :key="song.title">
            {{song.title}} {{song.artist}} {{song.album}}
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: null
    }
  },
  mounted () {
    //request all songs
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
