const users = {
    irina: {
        age: 27,
        isAdmin: true,
        sayHello(name) {
            console.log (`Hello ${name}`)
        }
    }
}
console.log(users)
users.irina.sayHello ('Sofie')


