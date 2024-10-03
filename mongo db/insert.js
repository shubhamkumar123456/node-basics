const  getData = require('./db')

//insert data in mongo db
    const insert = async()=>{
        const db = await getData();
        const result = await db.insertOne({
            name:"abc",
            brand:"vivo",
            price:320,
            category:"mobile"
        })
        if(result.acknowledged){
            console.log("data inserted");
        }
    }
    // insert();

    //update data in mongo db

    // const updateData = async()=>{
    //     let data = await getData();
    //     let result = await data.updateOne({name:"abc"},{$set:{name:"bcd"}},{new:true})
    //     console.log(result)
    //     console.log("data updated successfully")
    // }
    // updateData()


    //delete data in mongo db

    const deleteData = async()=>{
        let data = await getData();
        let result = await data.deleteOne({name:"bcd"})
        console.log("deleted successfully")
    }
    // deleteData()