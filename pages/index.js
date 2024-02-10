import React from "react"
import MeetupList from "../components/meetups/MeetupList"
import Layout from "../components/layout/Layout"
export const meetups = [
  {
    id: 1,
    address: "kolkata",
    image:
      "https://media.istockphoto.com/id/1674497384/photo/colorful-leafy-corner-of-gamla-stan-stockholm-sweden-during-autumn.jpg?s=1024x1024&w=is&k=20&c=lgHDF99R61wcUW1vvcUS7aXS5zwUlUh1A4guJszU0JI=",
    title: "street",
  },
  {
    id: 2,
    address: "kolkata",
    image:
      "https://media.istockphoto.com/id/1674497384/photo/colorful-leafy-corner-of-gamla-stan-stockholm-sweden-during-autumn.jpg?s=1024x1024&w=is&k=20&c=lgHDF99R61wcUW1vvcUS7aXS5zwUlUh1A4guJszU0JI=",
    title: "street",
  },
  {
    id: 3,
    address: "kolkata",
    image:
      "https://media.istockphoto.com/id/1674497384/photo/colorful-leafy-corner-of-gamla-stan-stockholm-sweden-during-autumn.jpg?s=1024x1024&w=is&k=20&c=lgHDF99R61wcUW1vvcUS7aXS5zwUlUh1A4guJszU0JI=",
    title: "street",
  },
]
const Index = () => {
  return (
    <div>
      <Layout>
        <MeetupList meetups={meetups}></MeetupList>
      </Layout>
    </div>
  )
}

export default Index
