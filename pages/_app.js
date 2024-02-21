import { useState } from "react"
import "../styles/globals.css"
import MyContext from "./MyContext"

function MyApp({ Component, pageProps }) {
  const [meetups, setMeetups] = useState({})
  console.log(meetups)
  const contextValue = {
    setMeetups,
    meetups,
  }
  return (
    <MyContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}

export default MyApp
