<template>
  <v-card color="transparent" flat>
    <div
      class="search-field"
      :style="{
        backgroundImage: `src('${require('@/assets/temp/cover-photo.jpeg')}')`,
      }"
    >
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-autocomplete
              single-line
              label="Search Destination"
              filled
              rounded
              append-icon="mdi-magnify"
              hide-details
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
    </div>
  </v-card>
</template>

<style scoped>
.search-field {
  height: 12rem;
  background-size: cover;
  background-position: center;
}
</style>
