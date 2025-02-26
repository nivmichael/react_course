const Greetings = () => {
  const greeting = "Well hello there";
  const now = new Date();
  //const dateString = now.toLocaleDateString(); // e.g., "10/26/2023" (US format) or "26/10/2023" (UK format)

  return (
    <section>
        <div>{greeting}</div>
        <p>Today is the: {now.getDate()}</p>
    </section>
  )
}

export default Greetings