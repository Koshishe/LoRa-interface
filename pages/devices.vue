<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-expansion-panels class="mb-6">
        <v-expansion-panel>
          <v-expansion-panel-header>Список всех устройств</v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- список устройтв -->
            <div>{{ devicesList }}</div>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header>Item</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <!-- -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-card
        elevation="2"
      >
        <v-card-title>Добавить устройство</v-card-title>
        <v-form v-model="valid">
          <v-container>
            <v-text-field
              v-model="deviceName"
              @input="$v.deviceName.$touch()"
              @blur="$v.deviceName.$touch()"
              :error-messages="deviceNameErrors"
              label="Name*"
              :counter="16"
              required
            ></v-text-field>
            <v-text-field
              v-model="deviceDescription"
              label="Description"
            ></v-text-field>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="devEUI"
                  @input="$v.devEUI.$touch()"
                  @blur="$v.devEUI.$touch()"
                  :counter="16"
                  label="devEUI*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="devAddr"
                  :counter="8"
                  label="Dev Address"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="serviceProfileID"
                  @input="$v.serviceProfileID.$touch()"
                  @blur="$v.serviceProfileID.$touch()"
                  :counter="36"
                  label="Service Profile ID*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="deviceProfileID"
                  @input="$v.deviceProfileID.$touch()"
                  @blur="$v.deviceProfileID.$touch()"
                  :counter="36"
                  label="Device Profile ID*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="devAddr"
                  :counter="8"
                  label="devAddr"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="nwkSKey"
                  :counter="23"
                  label="nwkSKey"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="appKey"
                  @input="$v.appKey.$touch()"
                  @blur="$v.appKey.$touch()"
                  :counter="23"
                  label="App Key*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="model"
                  label="Model"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="3"
              >
                <v-checkbox
                  v-model="frameCounterCheck"
                  :error-messages="frameCounterCheckErrors"
                  @change="$v.frameCounterCheck.$touch()"
                  @blur="$v.frameCounterCheck.$touch()"
                  label="Frame Counter"
                  type="checkbox"
                  required
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-checkbox
                  v-model="devAddrCheck"
                  :error-messages="devAddrCheckErrors"
                  @change="$v.devAddrCheck.$touch()"
                  @blur="$v.devAddrCheck.$touch()"
                  label="Dev Address"
                  type="checkbox"
                  required
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    deviceName: { required, maxLength: maxLength(16) },
    serviceProfileID: { required },
    deviceProfileID: { required },
    appKey: { required },
    devEUI: { required },
    frameCounterCheck: {
      checked (val) {
        return val
      },
    },
    devAddrCheck: {
      checked (val) {
        return val
      },
    },
  },
  data() {
    return {
      addDeviceStatus: null,
      deviceName: '',
      deviceDescription: '',
      devEUI: '',
      devAddr: '',
      nwkSKey: '',
      serviceProfileID: '',
      deviceProfileID: '',
      appKey: '',
      model: '',
      frameCounterCheck: false,
      devAddrCheck: false,
    }
  },
  computed: {
    ...mapState('devices', ['devicesList']),
    devAddrCheckErrors () {
        const errors = [];
        if (!this.$v.devAddrCheck.$dirty) return errors;
        !this.$v.devAddrCheck.checked && errors.push('You must agree to continue!');
        return errors
    },
    frameCounterCheckErrors () {
        const errors = [];
        if (!this.$v.frameCounterCheck.$dirty) return errors;
        !this.$v.frameCounterCheck.checked && errors.push('You must agree to continue!');
        return errors
    },
    deviceNameErrors () {
        const errors = [];
        if (!this.$v.deviceName.$dirty) return errors;
        !this.$v.deviceName.maxLength && errors.push('Name must be at most 16 characters long');
        !this.$v.deviceName.required && errors.push('Name is required.');
        return errors
    },
  },
  methods: {
    ...mapActions('devices', ['getDevicesList']),
    submit () {
        this.$v.$touch()
    },
    clear () {
        this.$v.$reset();
        this.name = '';
        this.email = '';
        this.select = null;
        this.checkbox = false;
    },
  },
}
</script>
