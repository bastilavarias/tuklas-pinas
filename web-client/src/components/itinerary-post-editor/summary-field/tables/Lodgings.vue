<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Lodging Name</th>
          <th class="text-left">Location</th>
          <th class="text-left">Bill</th>
          <th class="text-left">Rating</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="n in 10">
          <tr :key="n">
            <td>Restaurant Name</td>
            <td>Location</td>
            <td>&#8369; 40.00</td>
            <td>
              <v-chip
                label
                color="success"
                class="white--text font-weight-bold text-uppercase"
                small
                >Awesome</v-chip
              >
            </td>
          </tr>
        </template>
        <tr>
          <td></td>
          <td></td>
          <td class="font-weight-bold">&#8369; 40.00</td>
          <td>
            <v-chip
              label
              color="success"
              class="white--text font-weight-bold text-uppercase"
              small
              >Awesome</v-chip
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "itinerary-post-editor-summary-field-lodgings-table",
};
</script>
