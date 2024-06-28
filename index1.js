const onfullfillment=(result)=>{
    console.log(result)
    console.log('set the table')
}

const onRejection=(result)=>{
    console.log(result)
    console.log('prepare pasta')
}

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Bringing tacos')
    },2000)

})

promise.then(onfullfillment).catch(onRejection)