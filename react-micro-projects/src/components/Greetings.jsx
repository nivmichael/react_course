const Greetings = ({timeOfDay}) => {
  // const greeting = "Well hello there";
  // const now = new Date();
  console.log(timeOfDay, 'ok'); 
  return timeOfDay === "morning" ? (
    <h5>Good Morning</h5>
  ) : (
    <h5>Good afternoon</h5>
  );
  //const dateString = now.toLocaleDateString(); // e.g., "10/26/2023" (US format) or "26/10/2023" (UK format)

  // return (
  //   <section>
  //       <div>{greeting}</div>
  //       <p>Today is the: {now.getDate()}</p>
  //   </section>
  // )
}

export default Greetings