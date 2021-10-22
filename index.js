const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res)=>{
    res.send(' wow  i am name is very nice hello  iam shipon in comilla is very mnice jone in to hello im nice tw me hessben sessfuly hello ami shipon ')
});
/* app.get('/user',(req, res) =>{
    res.send({id:1, name:'shamsul islam shipon', email: 'nxshipon@gmail.com',})
})
 */
 
const users =[
    {id: 0, name: 'shamim hossin', email:'shamsim@gmail.com', phone:'01703059436', vilage:'Burprist',},
    {id: 1, name: 'Rakib', email:'rakib@gmail.com', phone:'01703059432', vilage:'Burprist',},
    {id: 2, name: 'Sharif Hossain', email:'sharifhossin@gmail.com', phone:'01703059434', vilage:'Monohrgonj',},
    {id: 3, name: 'Rasel hossin', email:'rasel@gmail.com', phone:'01703059437', vilage:'Burprist',},
    {id: 4, name: 'Rony hossin', email:'rony@gmail.com', phone:'01703059431', vilage:'Noyakhali',},
    {id: 5, name: 'Robiul islam', email:'robi@gmail.com', phone:'01703059432', vilage:'Burprist',},
]

// app .Method 
app.post('/users', (req, res) =>{
    const newUser =req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
   /*  res.send('post got susses') */
   res.json(newUser)
})
 app.get('/users', (req, res)=>{
    res.send(users)
}) 
    
 app.get('/users/:id',(req, res) =>{
     const id = req.params.id;
     const user = users[id]
     res.send(user);
 })

 app.get('/fruits', (req, res) =>{
     res.send(['mango', 'orange','banana', 'apple']);
 })

 app.get('/fruite/mangoes/fazli', (req, res)=>{
     res.send('yummy yummy tok make fazli toktk tok');
 })

app.listen(port, () =>{
    console.log('listening to port ', port);
})
