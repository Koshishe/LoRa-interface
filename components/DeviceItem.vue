<template>
  <v-form class="mt-6">
    <v-row class="d-flex flex-wrap">
      <v-col
        v-for="el in item"
       :key="el.name"
        cols="12"
        sm="8"
        md="6"
      >
        <v-text-field
          :value="el.prop"
          :label="el.name"
          outlined
          :disabled="disabled"
          width="50%"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click.prevent="disabled = !disabled">{{ disabled ? 'Edit' : 'Done'}}</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'DeviceItem',
  props: {
    item: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      disabled: true,
    }
  }
}
</script>
