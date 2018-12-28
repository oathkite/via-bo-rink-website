<template>
  <section class="container">
    <div class="site-header">
      <h1 class="site-title">
        <logo/>
      </h1>

      <nav class="site-nav">
        <ul class="site-nav-menu">
          <li class="site-nav-item">
            <a href="http:///www.instagram.com/viaborink/" target="_blank" rel="norefferer"><instagram/></a>
          </li>
          <li class="site-nav-item">
            <a href="mailto:mail@viaborink.com"><mail/></a>
          </li>
          <li class="site-nav-item">
            <a v-if="$device.isMobile" href="tel:0364277547"><phone/></a>
            <a v-else v-on:click="isPhoneNumberShow = !isPhoneNumberShow"><phone/></a>
          </li>
          <li class="site-nav-item">
            <sound class="sound"/>
          </li>
        </ul>

        <div>
          <phone-number class="phone-number" v-if="isPhoneNumberShow"/>
        </div>
      </nav>
    </div>

    <video id="kv" src="~static/video/kv.mp4" playsinline muted autoplay loop></video>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

import Logo from '~/components/Logo.vue'
import Instagram from '~/components/Instagram.vue'
import Phone from '~/components/Phone.vue'
import Sound from '~/components/Sound.vue'
import Mail from '~/components/Mail.vue'
import PhoneNumber from '~/components/PhoneNumber.vue'

export default {
  components: {
    Logo,
    Phone,
    Instagram,
    Mail,
    Sound,
    PhoneNumber
  },
  watch: {
    isSoundOn() {
      this.toggleSound()
    }
  },
  data: function() {
    return {
      isPhoneNumberShow: false
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

.site-nav {
  margin-left: auto;
  position: relative;

  &-menu {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding-left: 20px;

    svg {
      height: 16px;
      width: 16px;
    }
  }

  &-item {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.phone-number {
  position: absolute;
  right: 0;
  top: 36px;
}

.site-title {
  line-height: 20px;

  svg {
    vertical-align: bottom;
    height: 20px;
  }

  @include media(md, max) {
    line-height: 20px;

    svg {
      height: 20px;
    }
  }
}

.site-header {
  margin-bottom: 48px;
  display: flex;
  align-items: center;

  @include media(md, max) {
    margin-bottom: 12px;
    padding: 16px;
    box-sizing: border-box;
  }
}

video {
  vertical-align: bottom;
  max-width: calc(100vw - 96px);
  max-height: calc(100vh - 168px);
  width: 840px;

  @include media(md, max) {
    max-width: 100vw;
    max-height: calc(100vh - 100px);
    position: absolute;
    top: 50vh;
    transform: translateY(calc(-50% + 16px));
  }

  @include media(sm, max) {
    max-width: 100vw;
    max-height: calc(100vh - 120px);
    position: absolute;
    top: 50vh;
    transform: translateY(-50%);
  }

  @include media(sm, max) {
    transform: translateY(-56%);
  }
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #dbdbdb;
  padding: 20px;

  @include media(md, max) {
    padding: 0;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    padding: 0;
    border: 0;
  }
}
</style>
