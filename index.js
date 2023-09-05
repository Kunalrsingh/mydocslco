const express = require('express');

const app = express();

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

let courses = [
    {
        id: "11",
        name: "Learn Reactjs",
        price: 299,
    },
    {
        id: "22",
        name: "Learn Angularjs",
        price: 299,
    },
    {
        id: "33",
        name: "Learn Django",
        price: 299,
    },
];
app.get("/",(req,res) =>{
    res.send("hello from lco");
});
app.get("/api/v1/lco",(req,res) =>{
    res.send("hello from lco docs");
});

app.get("/api/v1/lcoobject",(req,res) =>{
    res.send({id: "55", name: "learn backend", price: 999});
});

app.get("/api/v1/courses",(req,res) =>{
    res.send(courses);
});

app.get("/api/v1/mycourse/:courseId", (req,res) =>{
    const myCourse = courses.find(course => course.id === req.params.courseId )
    res.send(myCourse);
});

app.listen(4000,() => console.log('Server is  running at 4000 '));