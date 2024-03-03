const mysql = require('mysql')
class Createdb {
    constructor(name , host , password, options){
        this.name = name;
        this.host = host;
        this.password = password;
        this.options ={
            dailet,
            host,
        }

        async function db() {
          const db = mysql.createPool(users , albert , password, {
            dailet: mysql,
            host: localhost
          })   

          return db
        }
    }

}

module.exports = Createdb