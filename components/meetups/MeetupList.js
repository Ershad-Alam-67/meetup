import MeetupItem from "./MeetupItem"
import classes from "./MeetupList.module.css"
// import '../../pages/api/new-meetup-handler'
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id}
          id={meetup._id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  )
}

export default MeetupList
// export async function getStaticProps() {
//   const res = await fetch("../../pages/api/new-meetup-handler")
//   const data = await res.json()
//    console.log(data);
//   return {
//     props: {
//       meetups: data,
//     },
//   }
// }
