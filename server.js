//importamos express y faker
const express = require ('express');
const {faker} = require ('@faker-js/faker'); //imporatmos el paquete de genrador de datos falsos

//ejecutamos express como una funcion
const app = express();
//declaramos el puerto http://localhost:8080
const port =  8080;


//clase de usuario con atributos con metodo para llenar los campos de manera aleatoria
class User {
    constructor () {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.telephone = faker.datatype.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

//clase de company con atributos con metodo para llenar los campos de manera aleatoria
class Company {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.address = {
            street: faker.address.streetAddress(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            postCode:faker.address.zipCode(),
            country:faker.address.country(),
        };
    }
}

const user = new User();
const company = new Company ();


//ruta de user
app.get("/user", (req, res) => {
    return res.status(200).json(user);
});

//ruta de company
app.get ("/company", (req, res) =>{
    return res.status(200).json(company);
});


//ruta de user-company
app.get ("/user-company", (requ, res) =>{
    return res.status(200).json({user, company});
});


app.listen(port, () => {
    console.log("El puerto 8080 está encendido");
});