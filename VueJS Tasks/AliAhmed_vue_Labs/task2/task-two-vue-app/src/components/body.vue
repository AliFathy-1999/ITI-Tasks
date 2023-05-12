<template>
    <div id="body">
        <div class="alert alert-info" v-if="students.length == 0">
            No Students found
        </div>
        <div v-else>
                <div class="d-flex justify-content-end me-4">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-plus-circle"></i> Add Student</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                <form class="row border border-2 p-5 rounded-2 needs-validation" @submit="checkForm"
                novalidate="true" >
                <p v-if="errors.length">
                    <ul>
                        <li v-for="error in errors" class="alert alert-danger fw-bold list-unstyled"><i class="bi bi-exclamation-triangle-fill"></i> {{ error }}</li>
                    </ul>
                </p>
                <h1 class="text-center"><i class="bi bi-pencil-square"></i> User Form</h1>
                <div class="form-group col-12">
                    <p class="text-start">User Name</p>
                    <input type="text" name="title" id="title" class="form-control"
                    placeholder="Enter User Name" v-model="studentData.name" >
                </div>
                <div class="form-group col-12 mt-3">
                    <p class="text-start">User City</p>
                    <input type="text" name="city" id="city" class="form-control" placeholder="Enter City"  v-model="studentData.city"/>
                </div>        
                </form>
                <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="checkForm" class="border border-0 bg-transparent" id="submitBtn"> 
                           <input type="submit" value="Save changes" class="btn btn-primary" > 
                        </button> 
                    </div>
        </div>
                    </div>
                </div>
                </div>
            </div>
            <table class="table table-dark table-hover fs-4 text-center"  >
            <thead class="text-primary">
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
            </thead> 
            <tbody>
                <tr v-for="student in students" :key="students.id">
                    <td>{{student.id}}</td>
                    <td>{{student.name}}</td>
                    <td>{{student.city}}</td>
                </tr>
            </tbody>
        </table>
        </div>

    </div>
  </template>
  
  <script>
  import students from '../students';
  export default {
    data:()=>({
        students:students,
        studentData:{
            id:0,
            name:"",
            city:"",
        },
        errors: [],
    }),
    methods:{
    checkForm: function (e) {
       
        this.errors = [];
        if (!(this.studentData.name).trim()) {
            this.errors.push("Student name required.");
        }else if((this.studentData.name) < 3 || (this.studentData.name) > 20){
            this.errors.push("Student name must at least 3 characters and less than 20.");
        }

        if (!(this.studentData.city).trim()) {
            this.errors.push('City required.');
        }
        else if((this.studentData.city.length) < 3 || (this.studentData.city.length) >30){
            this.errors.push("City must at least 3 characters and less than 30.");
        }
        if (!this.errors.length) {
            let lastStudentID = this.students[this.students.length - 1].id;
            this.studentData.id = lastStudentID + 100;
            const studentObj = {
                id:this.studentData.id,
                name:this.studentData.name,
                city:this.studentData.city,
            }
            this.students.push(studentObj);
            document.getElementById("submitBtn").setAttribute("data-bs-dismiss","modal");
            return true;
        }
        e.preventDefault();
    },
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  