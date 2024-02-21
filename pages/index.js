import React, { useContext, useState } from "react"
import MeetupList from "../components/meetups/MeetupList"
import Layout from "../components/layout/Layout"
import MyContext from "./MyContext"
// import '../pages/api/new-meetup-handler'
// export const meetups = [
//   {
//     id: 1,
//     address: "kolkata",
//     image:
//       "https://media.istockphoto.com/id/1674497384/photo/colorful-leafy-corner-of-gamla-stan-stockholm-sweden-during-autumn.jpg?s=1024x1024&w=is&k=20&c=lgHDF99R61wcUW1vvcUS7aXS5zwUlUh1A4guJszU0JI=",
//     title: "street",
//   },
//   {
//     id: 2,
//     address: "kolkata",
//     image:
//       "https://media.istockphoto.com/id/1674497384/photo/colorful-leafy-corner-of-gamla-stan-stockholm-sweden-during-autumn.jpg?s=1024x1024&w=is&k=20&c=lgHDF99R61wcUW1vvcUS7aXS5zwUlUh1A4guJszU0JI=",
//     title: "street",
//   },
//   {
//     id: 3,
//     address: "kolkata",
//     image:
//       "https://media.istockphoto.com/id/1674497384/photo/colorful-leafy-corner-of-gamla-stan-stockholm-sweden-during-autumn.jpg?s=1024x1024&w=is&k=20&c=lgHDF99R61wcUW1vvcUS7aXS5zwUlUh1A4guJszU0JI=",
//     title: "street",
//   },
// ]
const Index = ({ meetups }) => {
  const context = useContext(MyContext)
  context.setMeetups(meetups)
  return (
    <div>
      <Layout>
        <MeetupList meetups={meetups}></MeetupList>
      </Layout>
    </div>
  )
}

export default Index
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/new-meetup-handler")
  const data = await res.json()
  console.log(data, "datadata")
  return {
    props: {
      meetups: data,
    },
  }
}
