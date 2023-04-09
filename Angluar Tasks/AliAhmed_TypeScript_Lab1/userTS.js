"use strict";
exports.__esModule = true;
// 1. Create types to represent user 
var users_1 = require("./users");
var posts_1 = require("./posts");
// 3. Sort array of users by username
//let sortByUsername = users.sort((u1, u2) => u1.username.localeCompare(u2.username));
var sorting;
(function (sorting) {
    sorting[sorting["ascendingOrder"] = 0] = "ascendingOrder";
    sorting[sorting["descendingOrder"] = 1] = "descendingOrder";
})(sorting || (sorting = {}));
var usersSort = function (choice) {
    switch (choice) {
        case sorting.ascendingOrder:
            return users_1.users.sort(function (p1, p2) { return (p1.username < p2.username) ? -1 : (p1.username > p2.username) ? 1 : 0; });
        case sorting.descendingOrder:
            return users_1.users.sort(function (p1, p2) { return (p1.username < p2.username) ? 1 : (p1.username > p2.username) ? -1 : 0; });
    }
};
//console.log(usersSort(sorting.ascendingOrder));
/*4. Make a function that take an array of users and return an array of string
that contain a mapping of geo location points to a google map link. */
function geoLocation() {
    var mappedUsers = users_1.users.map(function (user) {
        return "https://maps.google.com/?q=".concat(user.address.geo.lat, ",").concat(user.address.geo.lng);
    });
    return mappedUsers;
}
//console.log(geoLocation());
//5. Make a function that takes user id and returns user object containing his posts
var getUserPosts = function (userId) {
    var user = users_1.users.filter(function (user) { return user.id === userId; });
    var filteredPost = posts_1.posts.filter(function (post) { return post.userId === userId; });
    if (!user.length)
        throw new Error("Error : There is no post that has this title !!!");
    var userWithPosts = {
        user: user,
        posts: filteredPost
    };
    return userWithPosts;
};
console.log(getUserPosts(2));
