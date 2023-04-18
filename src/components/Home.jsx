import {useState} from "react"
import Login from "./Login.jsx";
import Signup from "./Singup.jsx"
import { Button } from "react-bootstrap";



export default function Home(){

    const[isMember, setIsMember] = useState(false)

    return (
        <>
        {
            (isMember)
            ? <Login/>
            :<Signup />
        }   
         <Button onClick={ () => setIsMember(!isMember)}>Switch Form</Button>
      </>
    )    
 }