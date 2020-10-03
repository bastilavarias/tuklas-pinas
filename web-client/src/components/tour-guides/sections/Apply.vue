<template>
  <div class="py-10 white">
    <v-container>
      <div class="d-flex d-justify-space-between align-center">
        <template v-for="n in 4">
          <v-card
            :key="n"
            flat
            color="transparent"
            :class="`${n !== 4 ? 'mr-3' : ''}`"
          >
            <v-card-title class="subtitle-2"
              >Lorem ipsum dolor sit amet.</v-card-title
            >
            <v-card-text
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, illum?</v-card-text
            >
          </v-card>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "tour-guides-apply-section",
};
</script>
