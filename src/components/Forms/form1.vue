<template>
  <div>
    <div class="mt-5 container px-0" v-if="step === 1">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"><sidenav></sidenav></div>

        <div class="col-md-8">
          <form>
            <div class="row">
              <div class="col-md-5 col-lg-5">
                <!-- form section 1 here -->
                <div class="row">
                  <div class="form-group form-inline mb-5">
                    <div class="">
                      <label for="scac" class="">SCAC</label>
                    </div>
                    <div class="col-md-6 mx-5">
                      <input
                        type="text"
                        class="form-control"
                        id="scac"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="form-group form-inline mb-5">
                    <div>
                      <label for="bl" class="">B / L</label>
                    </div>
                    <div class="col-md-6 mx-5">
                      <input
                        type="text"
                        class="form-control mx-2"
                        id="bl"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2"></div>

              <div class="col-md-5 col-lg-5">
                <!-- form section 2 here -->
                <div class="row">
                  <div class="form-group form-inline mb-5">
                    <div class="col-md-3">
                      <label for="airline" class="">Airline</label>
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="airline"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="form-group form-inline mb-5">
                    <div class="col-md-3">
                      <label for="wb" class="">W / B</label>
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="wb"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Client details here -->

            <div class="row">
              <div class="form-group form-inlin mt-2">
                <label for="client" style class="">Client</label>
              </div>

              <div class="col-md-4 mx-5">
                <v-select :options="options"></v-select>
              </div>

              <div class="col-md-4">
                <button type="button" class="btn btn-outline-secondary">
                  Add New Client
                </button>
              </div>
            </div>

            <div class="row mt-5">
              <div class="">
                <label for="client" class="">Type of Freight</label>
              </div>

              <div class="">
                <label class="radio-inline mx-5">
                  Direct
                  <input type="radio" name="optradio" class="mx-2" checked />
                </label>
                <label class="radio-inline mx-5">
                  Transfer
                  <input type="radio" class="mx-2" name="optradio" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="button__div">
        <button type="button" class="btn btn-secondary" @click.prevent="next()">
          Next
        </button>
      </div>
    </div>

    <!--2 -->

    <div class="mt-5 container px-0" v-if="step === 2">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"><sidenav></sidenav></div>

        <div class="col-md-8">
          <form>
            <div class="row">
              <div class="col-md-4">
                <label for="predate" class="pt-2">Pre Alert Date</label>
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
                <label for="shipper" class="pt-2">Shipper</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="shipper"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="Consignee" class="pt-2">Consignee</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="Consignee"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="formm" class="pt-2">Form M. Number</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="formm"
                  pattern=""
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="cargo" class="pt-2">Cargo Description</label>
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
                <label for="esttime" class="pt-2">
                  Estimated Time of Arrival
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
                <label for="destination" class="pt-2">Cargo Destination</label>
              </div>
              <div class="col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="destination"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <label for="destination" class="">Cargo Type</label>
              </div>
              <div class="col-md-5">
                <label class="radio-inline">
                  Container
                  <input type="radio" name="optradio" class="mx-2" checked />
                </label>
                <label class="radio-inline mx-5">
                  Bulk
                  <input type="radio" class="mx-2" name="optradio" />
                </label>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <div class="row">
                  <label for="destination" class="mx-3">Cargo:</label>
                  <div class="tt">
                    <label class="radio-inline mx-2">
                      20ft
                      <input
                        type="radio"
                        value="A"
                        name="optradio"
                        class="mx-3"
                        checked
                      />
                    </label>
                    <label class="radio-inline mx-2">
                      40ft
                      <input
                        type="radio"
                        value="B"
                        class="mx-3"
                        name="optradio"
                      />
                    </label>
                    <label class="radio-inline mx-2">
                      45ft
                      <input
                        type="radio"
                        value="B"
                        class="mx-3"
                        name="optradio"
                      />
                    </label>
                    <label class="radio-inline mx-1">
                      Others
                      <input type="radio" value="B" class="m" name="optradio" />
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <v-select :options="options"></v-select>
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="destination"
                  placeholder=""
                />

                <input
                  type="text"
                  class="form-control my-3"
                  id="destination"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-2">
                <label for="esttime" class="pt-2">
                  If Others
                </label>
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="esttime"
                  placeholder=""
                />
              </div>

              <div class="col-md-3">
                <label for="esttime" class="pt-2">
                  Container number
                </label>
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  class="form-control"
                  id="esttime"
                  placeholder=""
                />
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-2">
                <label for="esttime" class="pt-2">
                  Upload Bill of Laden
                </label>
              </div>
              <div class="col-md-2">
                <input
                  type="file"
                  class="choose custom-file mt-2"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>

              <div class="col-md-2">
                <label for="esttime" class="pt-2">
                  Upload Commercial Invoice
                </label>
              </div>
              <div class="col-md-2">
                <input
                  type="file"
                  class="choose custom-file mt-2"
                  id="photo"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>

              <div class="col-md-2">
                <label for="esttime" class="pt-2">
                  Upload Contractor
                </label>
              </div>
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
        <button
          type="button"
          class="btn btn-secondary mx-5"
          @click.prevent="prev()"
        >
          Previous
        </button>
        <button type="button" class="btn btn-secondary" @click.prevent="next()">
          Next
        </button>
      </div>
    </div>

    <!--3 -->
    <div class="mt-5 container px-0" v-if="step === 3">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"><sidenav></sidenav></div>

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
        <button type="button" class="btn btn-secondary" @click.prevent="next()">
          Next
        </button>
      </div>
    </div>

    <!--4 -->
    <div class="mt-5 container px-0" v-if="step === 4">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"><sidenav></sidenav></div>

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
        <button
          type="button"
          class="btn btn-secondary mx-5"
          @click.prevent="prev()"
        >
          Previous
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click.prevent="submit()"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import sidenav from '../Partials/sidebar'
import swal from 'sweetalert'
export default {
  name: 'form1',

  components: { sidenav },
  data() {
    return {
      options: ['aaaaa', 'nnnnn'],
      step: 1,
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
      swal({
        title: 'File was successfully saved.',
        text: 'Generated Transaction ID: NLNG/IMP/' + Math.random(),
        icon: 'success',
      })
    },
  },
}
</script>

<style scoped>
.form__header {
  text-align: center;
  margin-bottom: 60px;
}
.v-select,
.v-select {
  width: 200px;
}
label {
  font-weight: normal;
  font-size:14px
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
.custom-file{
    width:80%;
    font-size: 12px;
}
</style>
