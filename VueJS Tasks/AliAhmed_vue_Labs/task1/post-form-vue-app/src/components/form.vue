<template>
  <div id="mainapp" class="container">
    <form class="row border border-2 p-5 rounded-2 needs-validation" @submit="checkForm"
     novalidate="true" v-if="!isSubmitted">
    <p v-if="errors.length">
      <ul>
        <li v-for="error in errors" class="alert alert-danger fw-bold list-unstyled"><i class="bi bi-exclamation-triangle-fill"></i> {{ error }}</li>
      </ul>
  </p>
      <h1 class="text-center"><i class="bi bi-pencil-square"></i> Post Form</h1>
      <div class="form-group col-12">
        <p class="text-start">Post Title</p>
        <input type="text" name="title" id="title" class="form-control"
        placeholder="Enter post title" v-model="posts.title" >
      </div>
      <div class="form-group col-12 mt-3">
        <p class="text-start">Post Content</p>
        <textarea name="content" id="content" class="form-control" placeholder="Enter post content"  v-model="posts.content"/>
      </div>
      <p class="text-start">You can share your posts on those websites : </p>
      <div class="row form-group col-12"  v-for="post in postData.shareOn">
        <div class="d-flex justify-content-start">
          <input type="checkbox" name="socialMedia" :id="post" :value="post" v-model="posts.shareOn">
          <label class="text-primary ms-2"> {{ post }}</label>
        </div>
      </div>
       <p class="text-start mt-3">Post Category</p>
        <div class="row form-group col-12"  v-for="category in postData.categories">
          <div class="d-flex justify-content-start">
            <input type="radio" :name="category" :id="category" :value="category" v-model="posts.category">
            <label class="text-primary ms-2"> {{ category }}</label>
          </div>
        </div>
        <p class="text-start mt-3">Post Series</p>
        <select class="form-select"  v-model="posts.serie">
          <option v-for="serie in postData.series" :value="serie">{{ serie }}</option>
        </select>
        <div class="row form-group col-12 mt-3" >
          <div class="d-flex justify-content-start">
            <input type="checkbox" name="sharedImmediatly" id="sharedImmediatly" :value="posts.sharedImmediatly" v-model="posts.sharedImmediatly">
            <label class="text-primary ms-2"> Shared Immediatly </label>
          </div>
        </div> 
        <input type="submit" value="Submit" class="btn btn-primary" >
    </form>
    
    <div v-if="isSubmitted==true">
      <h3 class="text-center mb-2">Post data</h3>
      <div class=" border border-2 text-start p-3">
        <p class="">Title : {{ posts.title }}</p>
        <p class="">Content : {{ posts.content }}</p>
        <ul class="list-group" >
          <li v-for="post in posts.shareOn" class="list-group-item">{{ post }}</li>
        </ul>
        <p class="">Category : {{ posts.category }}</p>
        <p class="">Serie : {{ posts.serie }}</p>
        <input type="checkbox" :checked="posts.sharedImmediatly" disabled="disabled"/>
        <label class="text-primary ms-2"> Shared Immediatly </label><br/>
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-primary col-2 m-5" @click="isSubmitted=false">Previous</button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data:()=>({
      posts:{
        title:"",
        content:"",
        serie:"",
        category:"",
        shareOn:[],
        sharedImmediatly:false
      },
      postData:{
        categories:["Technology","Fiction","Science","Math"],
        series:["First edition","Second edition","Third edition"],
        shareOn:["Facebook","Twitter","Instagram","LinkedIn"], 
      },
      errors: [],
    }),
    methods:{
      checkForm: function (e) {
      this.errors = [];
      if (!(this.posts.title).trim()) {
        this.errors.push("Title required.");
      }else if((this.posts.title.length) < 3 || (this.posts.title.length) > 20){
        this.errors.push("Title must at least 3 characters and less than 20.");
      }

      if (!(this.posts.content).trim()) {
        this.errors.push('Content required.');
      }
      else if((this.posts.content.length) < 3 || (this.posts.content.length) >30){
        this.errors.push("Content must at least 3 characters and less than 30.");
      }

      if (!(this.posts.category)) {
        this.errors.push("category required.");
      }
      if (!(this.posts.serie)) {
        this.errors.push('serie required.');
      } 
      if (!(this.posts.shareOn.length)) {
        this.errors.push("social media required.");
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
    },

}
</script>

