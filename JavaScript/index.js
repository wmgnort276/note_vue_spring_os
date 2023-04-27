let obj = {
    name: 'namvn',
    age: 20
}

let objProxy = new Proxy(obj, {
    get: () => {
        console.log("you are getting attribute of object");
    }
})

console.log(obj.get);