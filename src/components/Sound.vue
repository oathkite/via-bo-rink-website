<template>
  <div class="sound" v-on:click="toggleSound">
    <sound-on v-if="isSoundOn"/>
    <sound-off v-else/>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

import SoundOn from '~/components/SoundOn.vue'
import SoundOff from '~/components/SoundOff.vue'

export default {
  components: {
    SoundOn,
    SoundOff
  },
  computed: {
    ...mapGetters([
      'isSoundOn'
    ])
  },
  methods: {
    ...mapMutations({
      toggle: 'toggleSound'
    }),
    toggleSound: function(event) {
      this.toggle()
      let video = document.querySelector('#kv')
      video.muted = !video.muted
    }
  }
}
</script>

<style lang="scss" scoped>
.sound {
  cursor: pointer;
  display: inline-block;

  &:hover {
    opacity: 0.5;
  }

  svg {
    height: 16px;
  }
}
</style>
