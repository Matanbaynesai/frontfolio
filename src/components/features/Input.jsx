import React, {useEffect , useRef} from 'react'
import './input.css';
import { Form , Button } from 'react-bootstrap'

export default function Input() {
  const inputRef = useRef();
  useEffect (()=>{
    inputRef.current.focus()
  },[])
    return (
             <div class="contact" >
            <h1 class="contacth1">You can make contact with me</h1>
        <Form action="https://formsubmit.co/matanb2296@gmail.com" method="POST" >
    <Form.Label>Name:</Form.Label>
    <Form.Control ref = {inputRef} name="name" type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted"></Form.Text>
    <Form.Label>Last name:</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter Last name" />
    <Form.Text className="text-muted"></Form.Text>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>your Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
        ...
    </Form.Text>
  </Form.Group>
   <textarea name="text" rows="3" cols="30" placeholder="So im hired ? "></textarea><br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<img class="contact-me" src="./contactme.jpg"  width="1550px"/>
</div>
      
    )
}
