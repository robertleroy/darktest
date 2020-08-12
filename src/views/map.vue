<script>
export default {
  name: "Windy",
  data() {
    return {
      title: "map",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<template>
  <section id="map">
    <!-- <iframe width="100%" height="100%"
        src="https://weather.wdtinc.com/imap/imaplite/"
    frameborder="0"></iframe>-->

    <iframe width="100%" height="100%"
        src="https://embed.windy.com/embed2.html?lat=38.271&lon=-95.977&detailLat=35.479&detailLon=-97.690&width=650&height=450&zoom=4&level=surface&overlay=radar&product=radar&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1"
    frameborder="0"></iframe>

  </section>
</template>

<style scoped lang='scss'>
@import "../scss/imports";

#map {
  z-index: 20;
  position: absolute;
  top: 0;
  bottom: 4rem;
  right: 0;
  left: 0;
  background: $backgroundColor;
}
</style>