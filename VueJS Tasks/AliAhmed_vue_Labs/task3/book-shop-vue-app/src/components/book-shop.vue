<template>
  <div class="mainapp">
    <div class="container text-center mt-5">
            <h1 class="text-center mb-4"><i class="bi bi-book-fill"></i> Offered Books</h1>
            <ul class="row align-baseline">
              <li v-for="book in books" :title="book.author" class="col fs-5  p-3 list-unstyled card-footer text-bg-primary rounded-2 m-1" >
                <div class="bi bi-book fs-2"></div> {{book.name}}
              </li>
            </ul>
          </div>
        <nav class="navbar bg-body-tertiary ">
            <div class="container-fluid fs-4">
              <a class="navbar-brand" @click="isList = false">Books</a>
              <button type="button" @click="isList = true" class="btn btn-primary position-relative me-5">
                <i class="bi bi-list-stars"></i> Books List
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{list.books.length}}
                </span>
              </button>
            </div>
          </nav>
        <div class="row" v-if="!isList">
            <div class="col-sm-4 mb-3 mb-sm-0" v-for="book in books">
                <div class="card m-3" >
                <img :src="book.image" :alt="book.name" class="card-img-top"  height=400 >
                <div class="card-body">
                    <h5 class="card-title text-primary text-center">{{book.name}}</h5>
                    <div class="row m-2">
                        <h5 class="col">Category : {{book.category}}</h5>
                        <h5 class="col">Author : {{book.author}}</h5>
                    </div>
                    <div class="row m-2">
                        <h5 class="col" :class="checkPages(book.pages)">Pages : {{book.pages}}</h5>
                        <h5 class="col">Price : {{priceFormatting(book.price)}}</h5>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-baseline">
                    <p class="text-body-secondary">ISBN : {{book.ISBN}}</p>
                    <button :disabled="false" @click.once="addBookToList(book)" class="btn btn-primary p-2 fs-4"><i class="bi bi-plus-circle"></i> Add to list</button>
                </div>
                </div>
            </div>
        </div>
        <table class="table table-dark table-hover fs-4 text-center" v-else >
            <thead class="text-primary">
                <th>ISBN</th>
                <th>Book Name</th>
                <th>Pages</th>
                <th>Price</th>
                <th>Actions</th>
            </thead> 
            <tbody>
                <tr v-for="book in list.books" :key="list.books.ISBN">
                    <td>{{book.ISBN}}</td>
                    <td>{{book.name}}</td>
                    <td>{{book.pages}}</td>
                    <td>{{priceFormatting(book.price)}}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeBookToList(book.ISBN)"><i class="bi bi-trash3-fill  fs-4"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="alert alert-info fs-4 text-center" v-if="isList && this.list.books.length == 0">
            <i class="bi bi-info-circle"></i> There is no books added to list
        </div>
  </div>
</template>


<script>
import books from "../resources/booksJSON.js"
export default {
  data:()=>({
        books:books,
        isList:false,
        list:{
            books:[]
        }
    }),
    methods:{
        checkPages(page) {
            return page < 50 ? "text-danger" : "text-primary";
        },
        addBookToList(book){
            this.list.books.push(book);
        },
        removeBookToList(bookId){
            const bookIndex = this.list.books.findIndex((book)=> book.ISBN == bookId);
            this.list.books.splice(bookIndex,1);
            console.log(bookIndex);
        },     
        priceFormatting(price){
            return Intl.NumberFormat("ar-SA",{
                style:'currency',
                currency:"SAR",
                minimumFractionDigits:0,
            }).format(price);
        }
    },
}
</script>

