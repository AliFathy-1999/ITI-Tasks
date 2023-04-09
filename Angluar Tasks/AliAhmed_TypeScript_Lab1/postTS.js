"use strict";
exports.__esModule = true;
// 1. Create types to represent post
var posts_1 = require("./posts");
// 2. Search in posts by title
var searchByTitle = function (title) {
    var filteredPost = posts_1.posts.filter(function (post) { return post.title === title; });
    if (!filteredPost.length)
        throw new Error("Error : There is no post that has this title !!!");
    return filteredPost;
};
//console.log(searchByTitle("qui est esse"));
//6. Make a function that paginates over posts with page number, each page displays 10 posts
function paginatePosts(pageNum) {
    if (pageNum < 0)
        throw new Error("Error : Invalid page number !!!");
    var pageLimit = 10;
    var pageSkip = (pageNum - 1) * pageLimit;
    return posts_1.posts.slice(pageSkip, pageSkip + pageLimit);
}
console.log(paginatePosts(2));
