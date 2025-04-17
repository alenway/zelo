import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://makren:makren1234@project0.vgwmmsr.mongodb.net/?retryWrites=true&w=majority&appName=Project0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
