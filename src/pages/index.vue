<template>
  <section class="container">
    <sound class="sound"/>

    <div class="site-header">
      <h1 class="site-title">
        <logo/>
      </h1>

      <div class="site-info">
        <div class="insta">
          <a href="http:///www.instagram.com/viaborink/" target="_blank" rel="norefferer"><instagram/></a>
        </div>
        <div class="phone">
          <phone/>
        </div>
        <div class="contact">
          <a href="mailto:mail@viaborink.com"><contact/></a>
        </div>
      </div>
    </div>

    <video id="kv" src="~static/video/kv.mp4" playsinline muted autoplay loop></video>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import Logo from '~/components/Logo.vue'
import Instagram from '~/components/Instagram.vue'
import Phone from '~/components/Phone.vue'
import Contact from '~/components/Contact.vue'
import Sound from '~/components/Sound.vue'

export default {
  components: {
    Logo,
    Phone,
    Contact,
    Instagram,
    Sound
  },
  computed: {
    ...mapGetters([
      'isSoundOn'
    ])
  },
  watch: {
    isSoundOn() {
      document.querySelector('#kv').muted = !this.isSoundOn
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  &:hover {
    opacity: 0.5;
  }
}

.sound {
  position: absolute;
  top: 24px;
  right: 24px;

  @include media(sm, max) {
    top: 12px;
    right: 12px;
  }
}

.site-title {
  width: 162px;

  svg {
    vertical-align: bottom;
  }
}

.site-header {
  margin-bottom: 24px;

  @include media(sm, max) {
    margin-bottom: 12px;
  }
}

video {
  vertical-align: bottom;
  max-width: calc(100vw - 96px);
  max-height: calc(100vh - 168px);
  width: 840px;

  @include media(sm, max) {
    max-width: calc(100vw - 24px);

    position: absolute;
    top: 50vh;
    transform: translateY(-50%);
  }
}

.site-info {
  display: flex;
  line-height: 8px;
  margin-top: 6px;

  .contact {
    margin-left: 8px;
    border-left: 1px solid #dbdbdb;
    padding-left: 8px;
  }

  .insta {
    margin-right: 12px;
  }

  svg {
    height: 8px;
  }
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #dbdbdb;
  padding: 24px;

  @include media(sm, max) {
    padding: 0;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    padding: 12px;
    border: 0;
  }
}
</style>
