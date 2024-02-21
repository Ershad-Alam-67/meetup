import { MongoClient, ObjectId } from "mongodb"
import React from "react"
import Layout from "../components/layout/Layout"
import MeetupDetails from "../components/meetups/MeetupDetails"
import Head from "next/head"

const Id = (props) => {
  console.log(props)

  return (
    <Layout>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.address} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
      />
    </Layout>
  )
}

export default Id

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://ershad6732:Ershad6732@cluster0.9c9ilgh.mongodb.net/?retryWrites=true&w=majority"
  )
  const db = client.db()
  const meetupCollection = db.collection("meetups")
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
  client.close()

  return {
    paths: meetups.map((meetup) => ({ params: { id: meetup._id.toString() } })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.id

  const client = await MongoClient.connect(
    "mongodb+srv://ershad6732:Ershad6732@cluster0.9c9ilgh.mongodb.net/?retryWrites=true&w=majority"
  )
  const db = client.db()
  const meetupCollection = db.collection("meetups")

  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  })

  client.close()

  const { _id, ...rest } = selectedMeetup
  const meetupData = { ...rest, id: _id.toString() }
  console.log(meetupData, "mdmdmdmmm")

  return {
    props: {
      meetupData,
    },
  }
}
