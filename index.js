const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
//Rest Api:
    //based on Http 1 protocol
    //exchange data with json format
    //provides request methods (get, post, put, patch, delete)
    //Status code: 1xx, 2xx, 3xx, 4xx, 5xx
    //Stateless
let users = [{id: 1, email: "khaled@gmail.com", name: "khaled"}, {id: 2, email: "mariem@gmail.com", name: "mariem"}]
app.post('/add-user', (req, res) => {
    const {id, name, email} = req.body
    users.push({id, name, email})
    res.send("user added successfully")
})

app.patch('/update-user/:id', (req, res) => {
    const {id} = req.params
    const {name, email} = req.body
    let user_to_update = users.find(user => user.id === id)
    user_to_update = {id, name, email}
    users = users.filter(user => user.id != id)
    users.push(user_to_update)
    res.send("user updated successfully")
})

app.delete('/users/delete/:id', (req, res) => {
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send("user deleted successfully")
})

app.get('/user', (req, res) => {
    res.send("Welcome to user from user endpoint")
})

app.get('/all-users', (req, res) => {
    res.send(users);
})

app.get('/', (req, res) => {
    //console.log(req)
    res.status(200).send("Welcome to user")
})

app.listen(5010, () => {
    console.log('listening on port 5010')
})