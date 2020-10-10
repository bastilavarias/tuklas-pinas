<template>
  <v-card outlined>
    <v-card-title class="font-weight-bold">Search</v-card-title>
    <v-toolbar flat>
      <v-text-field
        append-icon="mdi-magnify"
        single-line
        hide-details
        dense
        filled
        rounded
        flat
        label="Search"
        class="mr-3"
      ></v-text-field>
      <v-chip>
        <v-icon left> mdi-tune </v-icon>
        <span class="font-weight-medium">Filters</span>
      </v-chip>
    </v-toolbar>
    <v-card-title>Search keyword</v-card-title>
    <v-card-subtitle>Search Results</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "search-page-search-toolbar-card",
};
</script>
