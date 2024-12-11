const { MongoClient } = require('mongodb');

const database = async () => {
    try {
        
        // MongoDB URI ve istemciyi ayarla
        const uri = process.env.MONGO_URI; // Çevre değişkeninin doğru yazıldığından emin olun.
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Veritabanına bağlan
        await client.connect();
        console.log('MongoDB connected');

    
        return client; // Gerekirse istemciyi döndürebilirsiniz.
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = database;
