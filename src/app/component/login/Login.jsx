import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import url from '../../../url'
import '../../css/login.css'

const Login = () => {
    const navigate = useNavigate()
    const [login,setLogin] = React.useState({
        email:"",
        password:""
    })

    const inputData = (e) =>{
        const {name,value} = e.target

        setLogin((pre)=>{
            return{
                ...pre,
                [name]:value
            }
        })
    }

    useEffect(()=>{
        const auth = sessionStorage.getItem('key');
        if(auth){
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loginControl = (e) =>{
        e.preventDefault()
        axios.post(`${url.baseURL}/v1/api/userLogin`,login).then((data)=>{
            const token = sessionStorage.setItem('key',data.data.token)
            sessionStorage.setItem('user',JSON.stringify(data.data.data))
            if(token !== " "){
                navigate('/')
            }
        })
    }
    console.log(login)
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col col-5 login'>
                        <h3>Login</h3>
                        <hr />
                        <div className='col col-5'>
                            <form className='' onSubmit={loginControl}>
                                <label className='form-label'>User Name</label>
                                <input type='text' name='email' className='form-control' onChange={inputData}/>
                                <label className='form-label'>Password</label>
                                <input type='password' name='password' className='form-control' onChange={inputData}/>
                                <div className=''>
                                    <input type='submit' className='btn btn-info mt-3' value='Login' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login