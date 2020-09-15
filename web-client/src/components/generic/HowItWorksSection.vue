<template>
  <section class="py-10" id="home-how-it-works-section">
    <v-container class="fill-height">
      <v-row align-content="center">
        <v-col cols="12">
          <h1 class="display-1 font-weight-bold text-center mb-10">
            How it works
          </h1>
          <v-row>
            <template v-for="(content, index) in contents">
              <v-col cols="6" md="4" lg="3" :key="index">
                <div class="text-center">
                  <v-avatar :size="100" class="mb-5">
                    <v-img :src="content.image"></v-img>
                  </v-avatar>
                  <span class="subtitle-1 d-block font-weight-bold mb-3">{{
                    content.title
                  }}</span>
                  <span class="body-2">{{ content.description }}</span>
                </div>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "generic-how-it-works-section",

  data() {
    return {
      contents: [
        {
          image:
            "https://assets.static-upwork.com/assets/Adquiro/51da3fc/bundles/upworkvscomponents/hiw/images/find.svg",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien libero, sollicitudin sit amet nulla quis, varius bibendum ante. Ut in justo eget turpis mattis consectetur.",
        },
        {
          image:
            "https://assets.static-upwork.com/assets/Adquiro/51da3fc/bundles/upworkvscomponents/hiw/images/find.svg",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien libero, sollicitudin sit amet nulla quis, varius bibendum ante. Ut in justo eget turpis mattis consectetur.",
        },
        {
          image:
            "https://assets.static-upwork.com/assets/Adquiro/51da3fc/bundles/upworkvscomponents/hiw/images/find.svg",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien libero, sollicitudin sit amet nulla quis, varius bibendum ante. Ut in justo eget turpis mattis consectetur.",
        },
        {
          image:
            "https://assets.static-upwork.com/assets/Adquiro/51da3fc/bundles/upworkvscomponents/hiw/images/find.svg",
          title: "Lorem ipsum dolor sit amet.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien libero, sollicitudin sit amet nulla quis, varius bibendum ante. Ut in justo eget turpis mattis consectetur.",
        },
      ],
    };
  },
};
</script>
