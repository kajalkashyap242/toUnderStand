import { Button } from '@mui/material';
import React, { useState } from 'react'

const Prtc = () => {
    const [data, setdata] = useState(null)
    const [print, setPrint] = useState(false)
    function getData(val) {
        console.warn(val.target.value)
        setdata(val.target.value)
        setPrint(false)
    }
    return (
        <>
            {
                print ?
                    <h1>{data}</h1>
                    : null
            }
            <input type='text' onChange={getData} />
            <Button onClick={() => setPrint(true)}>Print data</Button>
        </>
    );
};
export const Prtc2 = () => {
    const [status, setstatus] = React.useState(true)
    return (
        <>
            {
                status ? <h1>hey listen</h1>
                    : "flase"
            }
            <Button onClick={(() => setstatus(false))}>Hide</Button>
            <Button onClick={(() => setstatus(true))}>Show</Button>
        </>
    )
};
export const Prtc3 = () => {
    const [input, setinput] = useState(true)
    return (
        <>
            {
                input ? <h1>Hey Girl</h1> : null
            }
            {/* <Button onClick={(()=>setinput(true))}>true</Button>
       <Button onClick={(()=>setinput(false))}>flase</Button> */}
            <Button onClick={(() => setinput(!input))}>Toggle</Button>
        </>
    )
};

export const Form = () => {
    const [Name, setName] = useState("");
    const [tnc, settnc] = useState(false);
    const [intrest, setintrest] = useState("")
    function getdata(e) {
        console.log(Name, tnc, intrest)
        e.preventDefault()

    }
    return (
        <>
            <br></br>
            <form onSubmit={getdata}>
                <input type='text' placeholder='enter name' value={Name} onChange={(e) => setName(e.target.value)} /><br></br>
                <select onChange={(e) => setintrest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <br></br>
                <input type='checkbox' onChange={(e) => settnc(e.target.checked)} /><span>Accept Terms and Conditions</span>
                <br></br>
                <Button type='submit'>Submit</Button>
            </form>
        </>
    )
};
export const Profile = () => {
    const [logged, setlogged] = useState(1)
    //1,2,3
    return(
        <>
        {logged==1?
        <h1>Welcome to my website</h1>
        :logged==2?<h1>Welcome Guest</h1>
        :<h1>Welcome User3</h1>
        
    }
        </>
    )
};
export const Login=()=>{
    const[user,setuser]=useState("")
    const[password,setpassword]=useState("")
    function loginhandle(e)
    {
        alert("Hello")
        e.preventDefault()
    }
    function loginHandler(e){
        console.warn(e.target.value)
    }
    return(
        <>
        <form onSubmit={loginhandle}>
        <br/> <br/>
        <input type='text' placeholder='Enter username' onChange={loginHandler}/>
        <br/>  <br/>
        <input type='password' placeholder='Enter Password'/>
        <br/> <br/>
        <Button type='submit' color='inherite' className='border-e-blue-200'>Login</Button>
        </form>
        </>
    )
};

export default Prtc;