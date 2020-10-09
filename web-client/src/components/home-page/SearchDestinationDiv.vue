<template>
  <div class="pt-1 pt-md-7" id="home-destination-section">
    <v-container>
      <h1 class="title mb-5">
        <span class="mr-1">Search your next destination</span>
        <v-icon color="black" large>mdi-map</v-icon>
      </h1>
      <v-row dense>
        <v-col cols="12" md="10">
          <v-text-field filled rounded single-line label="Enter Destination">
            <template v-slot:append>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-map-search</v-icon>
                  </v-btn>
                </template>
                <span>Use our map instead</span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn color="primary" depressed rounded block x-large>
            <span class="text-capitalize mr-1">Search</span>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home-page-search-destination-div",
};
</script>
