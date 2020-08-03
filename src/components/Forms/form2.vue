<template>
  <div>
    <div class="mt-5 container px-0"  v-if="step === 2">
      <div class="form__header"><h3>Import Custom Clearance</h3></div>
      <div class="row">
        <div class="col-md-4"></div>

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
            <input type="file" class="choose custom-file mt-2" id="photo" name="photo" accept="image/png, image/jpeg" />
              </div>

               <div class="col-md-2">
                <label for="esttime" class="pt-2">
              Upload Commercial Invoice
                </label>
              </div>
              <div class="col-md-2">
                 <input type="file" class="choose custom-file mt-2" id="photo" name="photo" accept="image/png, image/jpeg" />
              </div>

              <div class="col-md-2">
                <label for="esttime" class="pt-2">
                Upload Contractor 
                </label>
              </div>
              <div class="col-md-2">
                <input type="file" class="choose custom-file mt-2" id="photo" name="photo" accept="image/png, image/jpeg" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="button__div mb-4">
     <button type="button" class="btn btn-secondary mx-5" @click.prevent="prev()">Previous</button>
        <button type="button" class="btn btn-secondary" @click.prevent="next()">Next</button>
      </div>
    </div>
  
    <form1 ></form1>
  <form3 v-if="step === 3"></form3>
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
.custom-file{
    width:80%;
    font-size: 12px;
}
</style>

<script>
  import form1 from './form1'
    import form3 from './form3'

export default {
    name:'',   
 
    components:{
        form1, 
        
        form3
    },
  data() {
    return {
      options: ['aaaaa', 'nnnnn'],
   step:2,
    }
  },
    methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert('Submit to blah and show blah and etc.');      
    }
  }
}
</script>

