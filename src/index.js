import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
/* import { Greeting, Great } from './Greeting'; */
/* import Product, {Navbar} from './Product'; */
import { Button } from "./Button";
import {TaskCard} from './Task'
import {Posts} from './Post.js'





/* traemos el elemento root */
/* const rootElement = document.getElementById('root') */
/* incializamos con reactDom y lo guardamos en una variable , "elemento raiz"*/
const root = ReactDOM.createRoot(document.getElementById("root"));
/* utilizamos la funcion render que nos pide children, elemento html para renderizar */

/* para el evento onChange le pasamos esta variable creada handlechange */
/* const handleChange =  function(e){
  console.log(e.target.value)
} */

const user = [
  {
    id:1,
    name: 'Ryan Ray',
    image: 'https://robohash.org/user1'
  },
  {
    id:2,
    name: 'Joe',
    image: 'https://robohash.org/user2'
  },
  {
    id:3,
    name: 'Joe',
    image: 'https://robohash.org/user3'
  }
]


function Counter() {
  
  const [counter, setCounter] = useState(10)
  console.log(counter)


  

  return (
     <div>
      <h1>Counter: {counter}</h1>
      <button onClick={ () =>{
        setCounter(counter + 10)
      }}>
        SUMAR
      </button>
     </div>
  )
}

function Mensaje() {
  /* useState recibe como primer parametro una variable y como segundo parametro una funcion que actualiza la primera variable */
  const [mensaje, setMensaje] = useState('')
  const [counter2, setCounter2] = useState(100)
  
  useEffect( () =>{
    console.log('render')
  }, [counter2])

  return (
    <div>
        <input onChange={e => setMensaje(e.target.value)} />
        <button onClick={() => {
          alert('El mensaje es: ' + mensaje)
        }}>
          Save
        </button>
        <hr/>
        <h1>contador : {counter2} </h1>
        <button onClick={()=>{
          {setCounter2(counter2 + 10)}
        }}>
          incrementar
        </button>
    </div>
  )
}


root.render(
  <div>
    {/* <Greeting name="franco" title="dev"/> */}
    {/* < Great
        name="ryan"
        amount={3000}
        married={false}
        points={[99,33.3,22.2]}
        address={{street: "123 main street", city: "new york"}}
        />
    <Great
        name="koby"
        amount={4000}
        married={true}
        points={[99,40,12]}
        address={{street:"32 manhatan", city: "los angeles"}}
    /> */}    
    
    
    
     {/* <TaskCard ready={true}/>
     <Button text='hol' capi="joe"/>
     <input id= "hola" />
    <form onSubmit={ (e) => {
        e.preventDefault()
        console.log('enviado')
    }}>
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
 */}


    <Posts />

    {/* {user.map((user,i) => {
        return (<div>
           <h1 key={i}>{user.name}</h1>
           <img src={user.image}/>
           </div>
        );
    })} */}
    
    <Counter />

    <Mensaje />
  </div>
);
