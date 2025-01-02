const mongoose=require('mongoose')

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const database = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI,clientOptions);
        await mongoose.connection.db.admin().command({ping:1});
        const databases=await admin.command({listDatabases:1})
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
        
        
    } catch (error) {
        console.log('Mongodb disconnected!',error);
        await mongoose.disconnect();//bağlantıyı kapat
        
        
    }
  
};

module.exports = database;
