<template>
  <section class="container">

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

    <video src="~static/video/kv.mp4" muted autoplay loop></video>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Instagram from '~/components/Instagram.vue'
import Phone from '~/components/Phone.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Logo,
    Phone,
    Contact,
    Instagram
  }
}
</script>

<style lang="scss" scoped>
a {
  &:hover {
    opacity: 0.5;
  }
}

.site-title {
  width: 180px;

  svg {
    vertical-align: bottom;
  }
}

.site-header {
  margin-bottom: 24px;
}

video {
  vertical-align: bottom;
  max-width: calc(100vw - 96px);
  max-height: calc(100vh - 168px);
}

.site-info {
  display: flex;
  line-height: 9px;
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
    height: 9px;
  }
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #dbdbdb;
  padding: 24px;
}
</style>
