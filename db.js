// server/db.js
const persons = [{
    id: "1",
    username: "alice@script.com",
    age: 34,
    name: "Alice"
}, {
    id: "2",
    username: "makky@try.com",
    age: 31,
    name: "Makky"
}, {
    id: "3",
    username: "alice@script.com",
    age: 34,
    name: "Alice"
}, {
    id: "4",
    username: "makky@try.com",
    age: 31,
    name: "Makky"
}]

const posts = [{
    id: "01",
    userID: "1",
    name: "An introduction to GraphQL"
}, {
    id: "012",
    userID: "23",
    name: "Javascript for beginners"
}, {
    id: "03",
    userID: "32",
    name: "Modular GraphQL"
}, {
    id: "055",
    userID: "41",
    name: "Learn Reactjs"
}, {
    id: "0123",
    userID: "52",
    name: "Angular vs Reactjs"
}]

module.exports = {
    persons,
    posts
}