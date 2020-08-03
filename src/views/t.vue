<template>
  <div>
    <div class="container-fluid">
   
    </div>
    
<div class="container mt-5">
    <h1>INTERNSHIP FORM</h1>
    <marquee behavior direction>
      <p>We @ SIH, we are glad you choose us.......</p>
    </marquee>
    <div class="stepwizard">
      <div class="stepwizard-row" ref="edu">
        <div class="stepwizard-step col-lg-3">
          <a href type="button" class="btn btn-success btn-circle">1</a>
          <p>
            <small>Personal Information</small>
          </p>
        </div>
        <div class="stepwizard-step col-lg-3">
          <a href type="button" class="btn btn-default btn-circle header1" disabled="disabled">2</a>
          <p>
            <small>Educational Background</small>
          </p>
        </div>
        <div class="stepwizard-step col-lg-3">
          <a href type="button" class="btn btn-default btn-circle header2" disabled="disabled">3</a>
          <p>
            <small>Gurantor</small>
          </p>
        </div>
        <div class="stepwizard-step col-lg-3" id="header3">
          <a href type="button" class="btn btn-default btn-circle header3" disabled="disabled">4</a>
          <p>
            <small>Others</small>
          </p>
        </div>
      </div>
    </div>
    <div class="card shadow mt-3" ref="card">
      <div class="card-body active"  id="cardDisplay">
        <form>
          <h5 class="modal-title" id="exampleModalLabel">PERSONAL INFORMATION</h5>
          <p>Please fill this form correctly!</p>
          <hr />
          <div class="form-row">
            <div class="col">
              <label for="exampleInputEmail1">First Name</label>
              <input type="text" class="form-control" name="fi" placeholder="First Name" v-model="internship.first_name" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="margin">Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" v-model="internship.last_name" />
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col">
              <label for="exampleInputEmail1">Email</label>
              <input type="email"  pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email" v-model="internship.email" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="margin">Contact Address</label>
              <input type="text" class="form-control" placeholder="Contact Address" v-model="internship.address" />
            </div>
          </div>
          <div class="form-row mt-3">
            <div class="col">
              <div class="form-group">
                <label for="exampleInputEmail1">Gender</label>
                <select class="custom-select increase_height form-control" v-model="internship.gender">
                  <option value selected disabled>Gender</option>
                  <option valu="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div class="col">
              <label for="exampleInputEmail1">Telephone Number</label>
              <input type="text" class="form-control" placeholder="Telephone Number" v-model="internship.phone"/>
            </div>
          </div>
        </form>
      </div>
      <div class="card-body" id="cardDisplay">
        <form action>
          <h5 class="modal-title" id="exampleModalLabel">EDUCATIONAL BACKGROUND</h5>
          <p>Please fill this form correctly!</p>
          <hr />
          <div class="mt-3">
            <label for="exampleInputEmail1">Name of Institution</label>
            <input type="text" class="form-control" placeholder="Name of Institution" v-model="internship.name_of_school" />
            <label for="exampleInputEmail1" class="mt-3">Course of Study</label>
            <input type="text" class="form-control" placeholder="Course of Study" v-model="internship.course_of_study" />
          </div>
        </form>
      </div>
      <div class="card-body" id="cardDisplay">
           <form action="" method="post">
                <h5 class="modal-title" id="exampleModalLabel">Gurantor</h5>
                <p>Please fill this form correctly!</p>
                <hr>
                <div class="mt-3">
                <label for="exampleInputEmail1">Gurantor Name</label>
               <input type="text" class="form-control" placeholder="Gurantor Name" v-model="internship.guarantor_name"/>
               <label for="exampleInputEmail1" class="mt-3">Telephone No.</label>
               <input type="text" class="form-control" placeholder="Telephone No" v-model="internship.guarantor_no"/>
               </div>
              </form>  
        </div>
        <div class="card-body" id="cardDisplay">
           <form action="">
            <h5 class="modal-title" id="exampleModalLabel">Others</h5>
            <p>Please fill this form correctly!</p>
            <hr>
             <label for="exampleInputEmail1">Intenship Duration</label>
               <input type="text" class="form-control" placeholder="Duration" v-model="internship.duration">
             <label for="exampleInputEmail1" class="mt-3">Track</label>
            <select class="custom-select increase_height form-control" v-model="internship.track"> 
                <option value="" selected disabled>Track</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Andriod">Andriod</option>
                <option value="UI/UX">UI/UX</option>
            </select>
           <!-- <div class="md-form mt-3">
            <label for="form7">Tell us about yourself</label>
            <textarea id="form7" class="md-textarea form-control" rows="3" placeholder="About you"></textarea>
            </div> -->
            </form>
    </div>    
    </div>
    <div class="card-body">
      <div class="mt-3">
        <button type="submit" class="btn btn-primary prev" @click="prevBtn" :disabled="disabledPrev">Previous</button>
        <button type="submit" class="btn btn-secondary next" @click="nextBtn" :disabled="isDisabled">Next</button>
        <button
          type="submit"
          class="btn btn-success float-right next mr-5"
         :disabled="submitDiasbled"
        @click="submitForm">Submit</button>
      </div>
    </div>
  </div>
  </div>
  
</template>
<script>

// import axios from "axios"
export default {
  components : {
 
  },
   data() {
    return {
      isDisabled : false,
      disabledPrev : true,
      submitDiasbled : true,
    //   isActive: true,
      counter: 0,
      internship : {
        first_name : "",
        last_name : "",
        email : "",
        phone : "",
        gender : "",
        address : "",
        name_of_school : "",
        course_of_study : "",
        track : "",
        duration : "",
        guarantor_name : "",
        guarantor_no : ""
      }
    };
  },
  methods: {
    nextBtn() {
      console.log(this.$refs.card.children)
      this.disabledPrev = false,
      this.$refs.card.children[this.counter].classList.remove("active");
      this.counter++
      this.$refs.card.children[this.counter].classList.add("active");
      if (this.counter + 1 === this.$refs.card.children.length) {
         this.isDisabled = true
         this.submitDiasbled= false
      }
      for (let i = 0; i <= this.$refs.edu.children.length; i++) {
          if(this.$refs.edu[i] = this.$refs.card.children){
              this.$refs.edu.children[this.counter].childNodes[0].style.backgroundColor = "#28a745"
          }          
      }
    },
    prevBtn(){
      if (this.counter === 0) {
          this.disabledPrev = true
      }  
      else  {
      this.isDisabled = false
      this.$refs.card.children[this.counter].classList.remove("active");
      this.counter--
      this.$refs.card.children[this.counter].classList.add("active"); 
       for (let i = 0; i <= this.$refs.edu.children.length; i++) {
          if(this.$refs.edu[i]  = this.$refs.card.children){
              this.$refs.edu.children[this.counter + 1].childNodes[0].style.backgroundColor = "#bbb"
          }          
      }
      }
     
    },
    // submitForm(){
     
    //   axios.post('https://wizardapi.herokuapp.com/api/interns', this.internship, {headers:{"Content-Type":"application/json"}})
    //    .then(function(res){
    //     console.log(res)
    //   })
    //   .catch(function(error){
    //     console.log(error)
    //   })
    // }
  },
 
};
</script>>
<style scoped>
.stepwizard {
  width: 100%;
  position: relative;
}
.stepwizard-row {
  display: flex;
}
marquee {
  width: 30%;
}
p {
  font-weight: 600;
  font-style: italic;
}
.stepwizard-step {
  text-align: center;
}
.btn-circle {
  width: 70px;
  height: 70px;
  text-align: center;
  font-size: 3rem !important;
  line-height: 3rem !important;
  border-radius: 50px !important;
}
.stepwizard-step p {
  margin-top: 0.3rem;
  color: #666;
}
.stepwizard-row:before {
  top: 40px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 100%;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
.stepwizard .btn.disabled,
.stepwizard .btn[disabled] {
  opacity: 1 !important;
  color: white;
  background-color: #bbb;
}
.active {
  display: block !important;
}
.red{
    background-color: red;
}
#cardDisplay {
  display: none;
}
@media only screen and (max-width: 600px) {
    .stepwizard-row{
        width: 25%;
    }
    marquee {
     width: 100%;
    }
    .form-row{
        display : inline
    }
    .margin{
        margin-top: 1rem;
    }
}
</style>