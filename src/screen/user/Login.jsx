import { Form, Button, Input } from "antd";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const sign_up = (event)=>{
        event.preventDefault();
        alert(username);
        alert(password);
    }
    return <>
        <NavBar/>
        <div className="flex flex-row w-full justify-center py-20 gap-20">
        <div className="inline-block">
            <div className="flex flex-col justify-center w-full">
                <h1>Login to your account</h1>
                <Form
                    name="basic"
                    style={{
                        width:350,
                        maxWidth: 600,
                    }}
                    initialValues={{
                        layout: null
                    }}
                    autoComplete="off"
                >   
                    <label><h2>Username</h2></label>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input 
                            placeholder="Enter username" 
                            className="input"
                            value={username}
                            onChange={(event)=>{setUserName(event.target.value)}}
                        />
                    </Form.Item>
                    <label><h2>Password</h2></label>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password 
                            className="input"
                            placeholder="Enter password" 
                            value={password}
                            onChange={(event)=>{setPassword(event.target.value)}}
                        />
                    </Form.Item>
                    <div className="account">
                        Don't have an account? 
                        <Link to='/signup' className="link"> Signup</Link>
                    </div>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button 
                            className="button" 
                            htmlType="submit"
                            onClick={(event)=>{sign_up(event)}}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        <div className="desktop:inline-block desktop:bg-slate-300 desktop:basis-6/12 desktop:p-5 hidden">
            <div className="flex justify-center items-center h-full text-3xl font-extrabold text-slate-700">
                Create, Read and Find blogs
            </div>
        </div>
        </div>
    </>
}

export default Login;