import { Form, Button, Checkbox, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignupMutation } from "../../redux/api/api";
import NavBar from "../../components/Navbar";

function SignUp(){
    const [signup_user, {isError, isSuccess, isLoading}] = useSignupMutation();
    const [messageApi, contextHolder] = message.useMessage();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message_visibility, setVisibility] = useState(false);
    const navigate = useNavigate();

    const openMessage = (type, content) => {
        messageApi.open({
            key: 'updatable',
            type: type,
            content: content,
            duration: 1.5
        });
    };

    const sign_up = async(event)=>{
        event.preventDefault();
        const user = {
            username: username,
            email: email,
            password: password
        };
        try {
            var response = await signup_user(user);
            if (response.data.status===201){
                openMessage(response.data.message);
                navigate('/blogs')
            } else{
                openMessage("error", response.data.message);
            }
            
        } catch(error){
            console.log(error.message);
            throw error;
        }
    };
    return <>
        <NavBar/>
        {contextHolder}
        <div className="flex flex-row w-full justify-center py-20 gap-20">
        <div className="inline-block">
            <div className="flex flex-col justify-center w-full">
                <h1>Create an account</h1>
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
                    <label><h2>Email</h2></label>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input 
                            placeholder="Enter email" 
                            className="input"
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
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
                        Already have an account? 
                        <Link to='/login' className="link"> Login</Link>
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
                            Create account
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

export default SignUp;