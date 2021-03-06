<template>
  <v-card flat color="transparent">
    <v-card-title>
      <span>Helpful Tips</span>
      <div class="flex-grow-1"></div>
      <custom-tooltip-button
        icon="mdi-plus"
        text="Add New Tip"
        :action="openAddTipDialog"
      ></custom-tooltip-button>
    </v-card-title>
    <v-card-text v-if="tipsLocal.length === 0" class="text-center">
      <span class="caption font-italic">No tips yet.</span>
    </v-card-text>
    <template v-for="(tip, index) in tipsLocal">
      <v-list-item :key="index">
        <v-list-item-content>
          <v-list-item-subtitle class="secondary--text">
            {{ index + 1 }}.
            <span v-if="tip" class="font-weight-bold">
              {{ tip }}
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
              <v-list-item @click="openUpdateTipDialog(tip, index)">
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="openRemoveTipDialog(index)">
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
          <span v-if="operation === 'add'">Add Tip #{{ tipCount }} </span>
          <span v-if="operation === 'update'"
            >Update Tip #{{ this.selectedTipIndex + 1 }}
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
              <v-textarea outlined label="Tip *" v-model="tip"></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="secondary"
            :disabled="!isFormValid"
            @click="addTip"
            v-if="operation === 'add'"
            >Add</v-btn
          >
          <v-btn
            color="secondary"
            :disabled="!isFormValid"
            @click="updateTip"
            v-if="operation === 'update'"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <custom-alert-dialog
      :is-open.sync="isCustomAlertDialogOpen"
      type="warning"
      :title="`Remove Tip #${this.selectedTipIndex + 1}`"
      text="Removing this tip is irreversible. Confirm anyway?"
      :action="() => removeTip()"
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import CustomAlertDialog from "@/components/custom/AlertDialog";
import CustomTooltipButton from "@/components/custom/TooltipButton";

export default {
  name: "itinerary-post-editor-page-personal-tips-form",
  components: {
    CustomTooltipButton,
    CustomAlertDialog,
  },
  props: {
    tips: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDialogOpen: false,
      tipsLocal: this.tips,
      operation: "add",
      selectedTipIndex: null,
      isCustomAlertDialogOpen: false,
      tip: "",
    };
  },
  computed: {
    isFormValid() {
      return this.tip;
    },
    tipCount() {
      return this.tipsLocal.length + 1;
    },
  },
  watch: {
    tips(val) {
      this.tipsLocal = val;
    },
    tipsLocal(val) {
      this.$emit("update:tips", val);
    },
  },
  methods: {
    openAddTipDialog() {
      this.operation = "add";
      this.clearForm();
      this.isDialogOpen = true;
    },
    addTip() {
      this.tipsLocal = this.tipsLocal.push(this.tip);
      this.clearForm();
      this.isDialogOpen = false;
    },
    openUpdateTipDialog(tip, index) {
      this.selectedTipIndex = index;
      this.tip = tip;
      this.operation = "update";
      this.isDialogOpen = true;
    },
    updateTip() {
      this.tipsLocal = this.tipsLocal.map((tip, index) => {
        if (index === this.selectedTipIndex) {
          tip = this.tip;
        }
        return tip;
      });
      this.clearForm();
      this.selectedTipIndex = null;
      this.isDialogOpen = false;
    },
    openRemoveTipDialog(index) {
      this.selectedTipIndex = index;
      this.isCustomAlertDialogOpen = true;
    },
    removeTip() {
      this.tipsLocal = this.tipsLocal.filter(
        (_, index) => index !== this.selectedTipIndex
      );
      this.selectedTipIndex = null;
      this.isCustomAlertDialogOpen = false;
    },
    clearForm() {
      this.tip = "";
    },
  },
};
</script>
