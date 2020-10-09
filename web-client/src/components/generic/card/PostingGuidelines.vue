<template>
  <v-card>
    <v-card-subtitle>Posting Guidelines</v-card-subtitle>
    <template v-for="n in 6">
      <div :key="n">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              >{{ n }}. Lorem ipsum dolor sit amet.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="n !== 6"></v-divider>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "generic-posting-guidelines-card",
};
</script>
