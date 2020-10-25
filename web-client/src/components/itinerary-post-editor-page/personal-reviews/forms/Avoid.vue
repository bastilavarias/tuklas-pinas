<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>What to Avoid</span>
      <div class="flex-grow-1"></div>
      <custom-tooltip-button
        icon="mdi-plus"
        text="Add New Avoid"
        :action="openAddAvoidDialog"
      ></custom-tooltip-button>
    </v-card-title>
    <v-card-text v-if="avoidsLocal.length === 0" class="text-center">
      <span class="caption font-italic">No avoids yet.</span>
    </v-card-text>
    <template v-for="(avoid, index) in avoidsLocal">
      <v-list-item :key="index">
        <v-list-item-content>
          <v-list-item-subtitle class="secondary--text">
            {{ index + 1 }}.
            <span v-if="avoid" class="font-weight-bold">
              {{ avoid }}
            </span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-menu>
            <template v-slot:activator="{ on: menu, attrs }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    v-bind="attrs"
                    v-on="{ ...tooltip, ...menu }"
                    icon
                    small
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <span>More Actions</span>
              </v-tooltip>
            </template>
            <v-list dense>
              <v-list-item @click="openUpdateAvoidDialog(avoid, index)">
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="openRemoveAvoidDialog(index)">
                <v-list-item-icon>
                  <v-icon>mdi-trash-can</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Remove</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-action>
      </v-list-item>
    </template>
    <v-dialog width="500" v-model="isDialogOpen">
      <v-card>
        <v-card-title>
          <span v-if="operation === 'add'">Add Avoid #{{ avoidCount }} </span>
          <span v-if="operation === 'update'"
            >Update Avoid #{{ this.selectedAvoidIndex + 1 }}
          </span>
          <div class="flex-grow-1"></div>
          <v-btn icon @click="isDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-textarea outlined label="Avoid *" v-model="avoid"></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="secondary"
            :disabled="!isFormValid"
            @click="addAvoid"
            v-if="operation === 'add'"
            >Add</v-btn
          >
          <v-btn
            color="secondary"
            :disabled="!isFormValid"
            @click="updateAvoid"
            v-if="operation === 'update'"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <custom-alert-dialog
      :is-open.sync="isCustomAlertDialogOpen"
      type="warning"
      :title="`Remove Avoid #${this.selectedAvoidIndex + 1}`"
      text="Removing this tip is irreversible. Confirm anyway?"
      :action="() => removeAvoid()"
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import CustomAlertDialog from "@/components/custom/AlertDialog";
import CustomTooltipButton from "@/components/custom/TooltipButton";

export default {
  name: "itinerary-post-editor-page-personal-avoids-form",
  components: {
    CustomTooltipButton,
    CustomAlertDialog,
  },
  props: {
    avoids: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDialogOpen: false,
      avoidsLocal: this.avoids,
      avoid: "",
      operation: "add",
      selectedAvoidIndex: null,
      isCustomAlertDialogOpen: false,
    };
  },
  computed: {
    isFormValid() {
      return this.avoid;
    },
    avoidCount() {
      return this.avoidsLocal.length + 1;
    },
  },
  watch: {
    avoids(val) {
      this.avoidsLocal = val;
    },
    avoidsLocal(val) {
      this.$emit("update:avoids", val);
    },
  },
  methods: {
    openAddAvoidDialog() {
      this.operation = "add";
      this.clearForm();
      this.isDialogOpen = true;
    },
    addAvoid() {
      this.avoidsLocal = this.avoidsLocal.push(this.avoid);
      this.clearForm();
      this.isDialogOpen = false;
    },
    openUpdateAvoidDialog(avoid, index) {
      this.selectedAvoidIndex = index;
      this.avoid = avoid;
      this.operation = "update";
      this.isDialogOpen = true;
    },
    updateAvoid() {
      this.avoidsLocal = this.avoidsLocal.map((avoid, index) => {
        if (index === this.selectedAvoidIndex) {
          avoid = this.avoid;
        }
        return avoid;
      });
      this.clearForm();
      this.selectedAvoidIndex = null;
      this.isDialogOpen = false;
    },
    openRemoveAvoidDialog(index) {
      this.selectedAvoidIndex = index;
      this.isCustomAlertDialogOpen = true;
    },
    removeAvoid() {
      this.avoidsLocal = this.avoidsLocal.filter(
        (_, index) => index !== this.selectedAvoidIndex
      );
      this.selectedAvoidIndex = null;
      this.isCustomAlertDialogOpen = false;
    },
    clearForm() {
      this.avoid = "";
    },
  },
};
</script>
