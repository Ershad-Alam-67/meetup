import MeetupItem from "../components/meetups/MeetupItem"
import React from "react"
import { useRouter } from "next/router"
import { meetups } from "../pages/index"
const Id = () => {
  const id = useRouter().query.id
  console.log(id)
  const meetuptoshow = meetups.find((item) => item.id === parseInt(id))
  const imgst = {
    width: "50%",
  }
  return (
    <div
      style={{ textAlign: "center", borderRadius: "20px", marginTop: "5px" }}
    >
      <img style={imgst} src={meetuptoshow.image} alt="img" />
      <h1>{meetuptoshow.address}</h1>
      <h1>{meetuptoshow.title}</h1>
    </div>
  )
}

export default Id
