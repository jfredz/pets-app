<template>
  <div class="home">
    <h1>Adopt a new friend</h1>
    <hr>
    There are {{ animalsCount }} animals in the database already.
    <br>
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>
    <b-container class="container">
      <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
        <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            v-model="formData.name"
            required
            placeholder="Enter Pet's name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            v-model="formData.age"
            required
            placeholder="Age"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Breed:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="formData.species"
            :options="[{value: 'cats', text: 'Cat'}, {value: 'dogs', text: 'Dog'}]"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        species: null,
        age: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, name, age } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      // reset form
      this.formData = {
        name: '',
        species: null,
        age: 0
      }
    }
  }
}
</script>

<style>
  .btn {
    margin: 10px;
  }
  label {
    text-align: left
  }
  hr {
    max-width: 700px;
    border: 0;
    height: 1px;
    background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }
</style>
