<template>
  <v-form class="pb-12 pt-6">
    <div class="py-4">
      <v-btn color="primary" @click.prevent="changeDevice">
        <v-icon v-if="disabled" color="white" class="pr-2">mdi-pencil-outline</v-icon>
        {{ disabled ? 'Редактировать' : 'Готово'}}
      </v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ml-3"
            color="error"
            dark
            v-bind="attrs"
            v-on="on"
            @click="dialog = !dialog"
          >
            <v-icon color="white">mdi-trash-can-outline</v-icon>
          </v-btn>
        </template>
        <span>Удалить базовую станцию</span>
      </v-tooltip>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <v-card outlined>
          <v-card-title class="text-h5">
            Внимание!
          </v-card-title>
          <v-card-text>{{ `Вы собираетесь удалить базовую станцию "${form.name}". После удаления отменить данное действие будет невозможно.` }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Отмена
            </v-btn>
            <v-btn
              color="red darken-4"
              text
              @click="deleteItem"
            >
              Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-row class="d-flex flex-wrap">
      <v-col
        v-for="(el, index) in form"
       :key="index"
        cols="12"
        sm="8"
        md="6"
      >
        <v-text-field
          :value="el"
          :label="index"
          v-model="form[index]"
          :disabled="(index === 'id') ? true : disabled"
          width="50%"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="py-4">
      <v-btn v-if="!disabled" color="primary" @click.prevent="changeDevice">
        Готово
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import {  mapActions } from "vuex";
export default {
  name: 'DeviceItem',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      disabled: true,
      answer: '',
      form: {
          id: this.item.id,
          name: this.item.name,
          description: this.item.description,
          networkServerID: this.item.networkServerID,
          organizationID: this.item.organizationID,
      },
      dialog: false,
    }
  },
  methods: {
    ...mapActions('gateways', ['getGatewaysList']),
    changeDevice() {
      if (!this.disabled) {
        localStorage.setItem('gat_id', this.form.id);
        this.$api.gateways.changeGateway(this.form)
          .then((result) => {
            this.getGatewaysList({skip: 0, limit: 10});
            this.answer = result;
          })
          .catch((result) => {
            this.answer = result;
          });
      }
       this.disabled = !this.disabled;
    },
    deleteItem() {
      localStorage.setItem('gat_id', this.form.id);
        this.$api.devices.deleteGateway()
          .then((result) => {
            this.getGatewaysList({skip: 0, limit: 10});
            this.answer = result;
          })
          .catch((result) => {
            this.answer = result;
          });
    }
  }
}
</script>
