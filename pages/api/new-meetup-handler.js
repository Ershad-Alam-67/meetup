import { MongoClient } from "mongodb"
const handler = async (req, res) => {
  const data = req.body
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://ershad6732:Ershad6732@cluster0.9c9ilgh.mongodb.net/?retryWrites=true&w=majority"
    )
    const db = client.db()
    const meetupCollection = db.collection("meetups")
    const result = await meetupCollection.insertOne(data)
    console.log(result)
    client.close()
    res.status(201).json({ message: "Meetup inserted" })
  }
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://ershad6732:Ershad6732@cluster0.9c9ilgh.mongodb.net/?retryWrites=true&w=majority"
    )
    const db = client.db()
    const collection = db.collection("meetups")
    const data = await collection.find({}).toArray()
    console.log(data, "..........")
    res.status(200).json(data)
  }
}
export default handler
