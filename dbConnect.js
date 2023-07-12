const mongoose=require('mongoose')

async function connection()
{
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/mycrud')
        console.log('Database is connected')
    }
    catch(error)
    {
        console.log(error)
    }
}
connection()


