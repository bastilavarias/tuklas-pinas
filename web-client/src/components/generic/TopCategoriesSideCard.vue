<template>
  <v-card>
    <v-card-title class="font-weight-bold">Top Categories</v-card-title>
    <template v-for="n in 6">
      <div :key="n">
        <v-divider v-if="n <= 6"></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Category {{ n }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-italic"
              >100k Uses</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "generic-top-categories-side-card",
};
</script>
