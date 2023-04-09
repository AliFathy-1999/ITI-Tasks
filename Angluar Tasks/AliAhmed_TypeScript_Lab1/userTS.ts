// 1. Create types to represent user 
import { users } from "./users";
import { posts } from "./posts";
type User = [{
		id: number,
		name: string,
		username: string,
		email: string,
		address: {
			street: string,
			suite: string,
			city: string,
			zipcode: string,
			geo: {
				lat: string,
				lng: string,
			},
		},
		phone: string,
		website: string,
		company: {
			name: string,
			catchPhrase: string,
			bs: string,
		},
}]

// 3. Sort array of users by username
//let sortByUsername = users.sort((u1, u2) => u1.username.localeCompare(u2.username));
enum sorting {
	ascendingOrder,
	descendingOrder
}
const usersSort = (choice:sorting)=>{
	switch(choice){
		case sorting.ascendingOrder:
			return users.sort((p1, p2) => (p1.username < p2.username) ? -1 : (p1.username > p2.username) ? 1 : 0)
		case sorting.descendingOrder:
			return users.sort((p1, p2) => (p1.username < p2.username) ? 1 : (p1.username > p2.username) ? -1 : 0)
	}
} 
//console.log(usersSort(sorting.ascendingOrder));

/*4. Make a function that take an array of users and return an array of string
that contain a mapping of geo location points to a google map link. */

function geoLocation() : string[]{
    const mappedUsers : string[] = users.map((user)=>{
		return `https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`
    })
    return mappedUsers;
}
//console.log(geoLocation());

//5. Make a function that takes user id and returns user object containing his posts

const getUserPosts = (userId:number) =>{
	const user = users.filter(user => user.id === userId);
    const filteredPost = posts.filter(post => post.userId === userId);
	if(!user.length)
		throw new Error("Error : There is no post that has this title !!!");
	const userWithPosts = {
		user,
		posts: filteredPost
	} ;
    return userWithPosts; 
}
console.log(getUserPosts(2));
