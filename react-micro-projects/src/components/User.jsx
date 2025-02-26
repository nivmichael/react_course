const User = (props) => {
console.log(props)
  return (
    <div>
        <img src={props.img} width="200" style={{background:"black"}}/>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <div>Hobbies: {props.hobbies}</div>
    </div>
  )
}

export default User