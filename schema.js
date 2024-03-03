const Createdb = require("./database.js")

async function create() {
    const options ={
    }
    const results = await Createdb.db()
    console.log(results)
}

create();