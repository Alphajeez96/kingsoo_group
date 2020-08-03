<template>
  <div>
    <div class="mt-5 container px-0" v-if="step === 3">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"></div>

        <div class="col-md-8">
          <div class="mb-4">
            <h6>Pre - Arrival Assessment Report (PAAR)</h6>
          </div>
          <form>
            <div class="row">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Date Received</label>
              </div>
              <div class="col-md-5">
                <input
                  type="date"
                  class="form-control"
                  id="predate"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="shipper" class="pt-2">PAAR Number</label>
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="shipper"
                  pattern=""
                  placeholder=""
                />
              </div>

              <label for="shipper" class="pt-2 mx-4">Value</label>

              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="shipper"
                  pattern=""
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="Consignee" class="pt-2">Upload PAAR Document</label>
              </div>
              <div class="col-md-5">
                <input
                  type="file"
                  class="choose custom-file mt-2"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>

            <div class="mb-4 mt-5"><h6>Assessment Notice</h6></div>

            <div class="row">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Date Received</label>
              </div>
              <div class="col-md-5">
                <input
                  type="date"
                  class="form-control"
                  id="predate"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="shipper" class="pt-2">Custom Number</label>
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="shipper"
                  pattern=""
                  placeholder=""
                />
              </div>

              <label for="shipper" class="pt-2 mx-4">Value</label>

              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="shipper"
                  pattern=""
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="cargo" class="pt-2">Assessment Number</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="cargo"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="Consignee" class="pt-2">
                  Upload Assessment Notice
                </label>
              </div>
              <div class="col-md-5">
                <input
                  type="file"
                  class="choose custom-file mt-2"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="esttime" class="pt-2">
                  Duty Payment Date
                </label>
              </div>
              <div class="col-md-3">
                <input
                  type="date"
                  class="form-control"
                  id="esttime"
                  placeholder=""
                />
              </div>

              <label for="esttime" class="pt-2 mx-4">
                Bank
              </label>

              <div class="col-md-3">
                <v-select :options="options"></v-select>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="Consignee" class="pt-2">Upload Duty Receipt</label>
              </div>
              <div class="col-md-5">
                <input
                  type="file"
                  class="choose custom-file mt-2"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="esttime" class="pt-2">
                  Shipping Company Payment Date
                </label>
              </div>
              <div class="col-md-5">
                <input
                  type="date"
                  class="form-control"
                  id="esttime"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="esttime" class="pt-2">
                  Terminal Changes Payment Date
                </label>
              </div>
              <div class="col-md-5">
                <input
                  type="date"
                  class="form-control"
                  id="esttime"
                  placeholder=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="button__div mb-4">
        <button
          type="button"
          class="btn btn-secondary mx-5"
          @click.prevent="prev()"
        >
          Previous
        </button>
        <button type="button" class="btn btn-secondary">Next</button>
      </div>
    </div>
    <form2 v-if="step === 2"></form2>
  </div>
</template>

<style scoped>
.form__header {
  text-align: left;
  margin-bottom: 60px;
}
.v-select,
.v-select {
  width: 200px;
}
label {
  font-weight: bold;
}
.button__div {
  text-align: end;
  margin-top: 60px;
}
.btn:not(:disabled):not(.disabled) {
  padding: 8px 40px;
}
.vs__dropdown-toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  padding: 50px 0px 5px 0px;
  background: none;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  white-space: normal;
}
.tt {
  display: inline-grid;
}
.custom-file {
  width: 80%;
  font-size: 12px;
}
</style>

<script>
import form2 from './form2'
export default {
  name: 'form2',
  components: {
    form2,
  },
  data() {
    return {
      options: [1, 2, 3, 4],
      step: 3,
    }
  },
  methods: {
    prev() {
      this.step--
    },
    next() {
      this.step++
    },
    submit() {
      alert('Submit to blah and show blah and etc.')
    },
  },
}
</script>
