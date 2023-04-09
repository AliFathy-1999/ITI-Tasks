// 1. Create types to represent post
import { posts } from "./posts";
type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string,
}
// 2. Search in posts by title
let searchByTitle = (title:string) :Posts[]=>{
    const filteredPost = posts.filter(post => post.title === title);
    if(!filteredPost.length)
        throw new Error("Error : There is no post that has this title !!!");
    return filteredPost; 
}
//console.log(searchByTitle("qui est esse"));

//6. Make a function that paginates over posts with page number, each page displays 10 posts

function paginatePosts(pageNum:number):Posts[]{
    if(pageNum < 0)
        throw new Error("Error : Invalid page number !!!");
    const pageLimit:number = 10;
    const pageSkip :number = ( pageNum - 1 ) * pageLimit;
    return posts.slice(pageSkip,pageSkip + pageLimit);
}

console.log(paginatePosts(2));
