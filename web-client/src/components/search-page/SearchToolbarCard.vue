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
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-chip>
        <v-icon left> mdi-tune </v-icon>
        <span>Filter Results</span>
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
