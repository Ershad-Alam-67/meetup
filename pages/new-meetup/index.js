import React from "react"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Layout from "../../components/layout/Layout"
//import "../api/new-meetup-handler"
const Lndex = () => {
  const handleAdd = async (dataa) => {
    const response = await fetch("../api/new-meetup-handler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataa),
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={handleAdd}></NewMeetupForm>
    </Layout>
  )
}

export default Lndex
