<template>
  <div>
    <div class="mt-5 container px-0">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"></div>

        <div class="col-md-8">
          <div class="mb-4">
            <h6>Please Specify Agent in the form below</h6>
          </div>
          <form>
            <div class="row">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Group</label>
              </div>
              <div class="col-md-5">
                <v-select :options="options"></v-select>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Agent Phone Number</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="predate"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Assigned Date</label>
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
                <label for="predate" class="pt-2">Terminal Arrival Date</label>
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
                <label for="predate" class="pt-2">Examination Date</label>
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
                <label for="predate" class="pt-2">Pre-Release Date</label>
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
                <label for="predate" class="pt-2">Invoice Date</label>
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
                <label for="predate" class="pt-2">Loaded on Truck Date</label>
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
                <label for="predate" class="pt-2">Invoice Number</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="predate"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Invoice Value</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="predate"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Delivery Date</label>
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
                <label for="predate" class="pt-2">
                  Date Container Returned to the port
                </label>
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
                <label for="predate" class="pt-2">
                  Data Interchange Received
                </label>
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
                <label for="esttime" class="pt-2">
                  Final Release Date
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

              <label for="esttime" class="pt-2">
                Upload Interchange
              </label>

              <div class="col-md-2">
                <input
                  type="file"
                  class="choose custom-file mt-2"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="button__div mb-4">
        <button type="button" class="btn btn-secondary mx-5">Previous</button>
        <button type="button" class="btn btn-secondary">Submit</button>
      </div>
    </div>
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
export default {
  components: {},
  data() {
    return {
      options: [1, 2, 3, 4],
      label: {},
    }
  },
}
</script>
