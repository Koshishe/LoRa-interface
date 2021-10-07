<template>
  <v-card class="d-flex justify-center align-center flex-column py-8">
    <v-card-title class="text-h5 mb-2">
      <v-icon color="success" class="pr-2">mdi-check</v-icon>
      {{ message }}
    </v-card-title>
      <v-btn
        color="success"
        type="button"
        @click.prevent="$emit('close')"
      >
        OK
      </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
