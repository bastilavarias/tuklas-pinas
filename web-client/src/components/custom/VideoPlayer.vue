<template>
  <div class="item">
    <div class="player">
      <video-player
        class="vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
import "./video-player.css";
export default {
  name: "custom-video-player",

  props: {
    url: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      playerOptions: {
        height: "300",
        autoplay: false,
        muted: false,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: this.url,
          },
        ],
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
};
</script>
