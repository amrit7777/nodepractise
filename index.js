// const path=require('node:path');

// console.log(__filename)
// console.log(__dirname)


// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))

// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))

// console.log(path.isAbsolute(__filename))

// console.log(path.join("folder1","folder2","index.html"))
// console.log(path.join("folder1","//folder2","../index.html"))

// console.log(path.resolve("folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","../index.html"))
// console.log(path.resolve(__dirname,"data.json"))


// const EventEmitter=require("node:events")

// const emitter=new EventEmitter()

// emitter.on("Order-pizza",(size,toppings)=>{
//     console.log(`order received! baking a ${size} ${toppings} pizza`)
// })

// emitter.on("Order-pizza",(size)=>{
//     if(size==='large'){
//         console.log('serving complimentary drink')
//     }
// })
// console.log('just checking')
// emitter.emit("Order-pizza","large","mushroom")

// const PizzaShop=require('./pizza-shop')
// const DrinkMachine=require('./drink-machine')

// const pizzaShop=new PizzaShop()
// const drinkMachine=new DrinkMachine()
// pizzaShop.on("order",(size,topping)=>{
//     console.log(`order received Baking a ${size} pizza with ${topping}`)
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order("large","mushroom");
// pizzaShop.displayOrderNumber()


// const buffer=new Buffer.from("Amrit")

// buffer.write("Newevolution")

// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())






// const fs=require("node:fs")

// console.log("first")
// const fileContent=fs.readFileSync("./file.txt","utf-8")
// console.log(fileContent)
// console.log("second")
// fs.readFile("./file.txt","utf-8",(error,data)=>{
// if(error){
//     console.log(error);

// }
// else{
//     console.log(data);
// }
// })
// console.log("Third")

// fs.writeFileSync("./greet.txt","Hello World!")

// fs.writeFile("./greet.txt","Hello ",{flag:"a"},(err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log("filewritten")
// })

// const fs=require("node:fs")

// console.log("first")
// async function readFile(){
//     try{
//         const data=await fs.readFile("file.txt","utf-8")
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// readFile()

// console.log("Second")

// console.log("First")

// fs.readFile("file.txt","utf-8")
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// console.log("second")
// const zlib=require("node:zlib")

// const gzip=zlib.createGzip()

// const readableStream=fs.createReadStream("./file.txt",{
//     encoding:"utf-8",
//     highWaterMark:2,
// })

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeableStream=fs.createWriteStream("./file2.txt")

// readableStream.pipe(writeableStream)

// readableStream.on("data",(chunk)=>{
//  console.log(chunk)
//  writeableStream.write(chunk)
// })


// const http=require("node:http");
// const fs=require("node:fs");

// const server=http.createServer((req,res)=>{
    // const superHero={
    //     firstName:"Bruce",
    //     lastName:"Wayne"
    // }
    // const name="Amrit"
    // let html=fs.readFileSync("./index.html","utf-8")
    // html=html.replace("{{name}}",name)
    // fs.createReadStream(__dirname+"/index.html").pipe(res)
    // res.writeHead(200,{"Content-Type":"text/html"})
//     res.end(html)
// });

// const server=http.createServer((req,res)=>{

//     if(req.url ==='/'){
//         res.writeHead(200,{"Content-Type":"text/plain"})
//         res.end("Home Page");

//     }
//     else if(req.url==='/about'){
//         res.writeHead(200,{"Content-Type":"text/plain"})
//         res.end("About Page");
//     }
//     else if(req.url==='/api'){
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.end(JSON.stringify({
//             firstName:"Bruce",
//             lastName:"Wayne"
//         }))
//     }
//     else{
//         res.writeHead(404)
//         res.end("Page not found")
//     }
// })




// server.listen(3000,()=>{
//     console.log("Server running on port 3000")
// })

// const crypto=require("node:crypto")

// const start=Date.now()
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512")
// console.log("Hash:",Date.now()-start);

// const Max_calls=16;
// process.env.UV_THREADPOOL_SIZE=4;


// for(let i=0;i<Max_calls;i++){
//     crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//         console.log(`Hash:${i+1}`,Date.now()-start)
//     })
// }

// const https=require("node:https")

// const Max_calls=16

// const start=Date.now()

// for(let i=0;i<Max_calls;i++){
//     https.request("https:/www.google.com",(res)=>{
//         res.on("data",()=>{});
//         res.on("end",()=>{
//             console.log(`request :${i+1}`,Date.now()-start)
//         })
//     })
//     .end()
// }

// console.log("console log 1")
// process.nextTick(()=> console.log("this is process.next 1"))
// console.log("console log 2")

// Promise.resolve().then(()=>console.log("this is a promise.resolve 1"))
// process.nextTick(()=> console.log("this is process.next 1"))

// setTimeout(()=>console.log("this is settimout 1"),0)

// setTimeout(()=>{console.log("this is settimout 2")
// process.nextTick(()=> console.log("this is inner next tick inside the second set timeout"))
// },0)

// setTimeout(()=>console.log("this is settimout 3"),0)

// process.nextTick(()=> console.log("this is process.next 1"))

// process.nextTick(()=> {
//     console.log("this is process.next 2")
//     process.nextTick(()=> console.log("this is inner next tick inside the second tick"))

// })
// process.nextTick(()=> console.log("this is process.next 3"))

// Promise.resolve().then(()=>console.log("this is a promise.resolve 1"))
// Promise.resolve().then(()=>{
//     console.log("this is a promise.resolve 2")
//     Promise.resolve().then(()=>console.log("this is inner promise inside the block"))
// })
// Promise.resolve().then(()=>console.log("this is a promise.resolve 3"))

// setTimeout(()=>console.log("this is settimout 1"),1000)
// setTimeout(()=>console.log("this is settimout 2"),50)
// setTimeout(()=>console.log("this is settimout 3"),0)

// const fs=require("node:fs")



// fs.readFile(__filename,()=>{
//     console.log("this is readFile 1");
//     setImmediate(()=>console.log("this is set inner IMMediate"))
//     process.nextTick(()=>console.log("thsi is process inner tick 1"))
// Promise.resolve().then(()=>console.log("this is the promise inner resolve 1"))
// })

// process.nextTick(()=>console.log("thsi is process tick 1"))
// Promise.resolve().then(()=>console.log("this is the promise resolve 1"))
// setTimeout(()=>console.log("this is setTimeout1"),0)

// for(let i=0;i<2000000000;i++){}


const fs=require("fs")

const readableStream=fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close",()=>{
    console.log("this is from readablestream close event callback");
})
setImmediate(()=>console.log("this is setImmediate 1"))
setTimeout(()=>console.log("this is setTimeout 1"),0)
Promise.resolve().then(()=>console.log("this is promise.resolve 1"))
process.nextTick(()=>console.log("this is process nextTick"))








