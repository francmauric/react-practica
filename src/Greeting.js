export function Greeting({name, title="contact"}) {
    console.log(name, title)
  
    return <h1>{name}</h1>
}



export function Great (props) {

    console.log(props)
    return <div>
    <p>{props.name}</p>
    <p>{props.amount}</p>
    <p>{props.married ? "casado" : "soltero"}</p>
    <p>{props.points}</p>
    <p>{props.address.city}</p>
    <h2>2da funcion del componente greeting</h2>
    </div>
}