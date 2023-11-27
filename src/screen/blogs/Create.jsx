import { Form, Button, Checkbox, Input } from "antd";
import NavBar from "../../components/Navbar";
import { useState } from "react";
function Create(){
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const create_blog = (event)=>{
        event.preventDefault();
        alert(title);
        alert(body);
    }
    return <>
        <NavBar loggedIn={true} username={"TestUser"}/>
        <div className="flex flex-row w-full justify-center pt-5 gap-20">
        <div className="inline-block">
            <div className="flex flex-col justify-center w-full">
                <h1>Create a Blog</h1>
                <Form
                    name="basic"
                    style={{
                        width:800,
                    }}
                    initialValues={{
                        layout: null
                    }}
                    autoComplete="off"
                >   
                    <label><h2>Title</h2></label>
                    <Form.Item
                        name="title"
                        rules={[
                            {
                            required: true,
                            message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input 
                            className="input"
                            value={title}
                            onChange={(event)=>{setTitle(event.target.value)}}
                        />
                    </Form.Item>
                    <label><h2>Blog</h2></label>
                    <Form.Item
                        name="body"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your body!',
                            },
                        ]}
                    >
                        <Input.TextArea 
                            style={{height:'300px',}}
                            minLength={100}
                            maxLength={1000}
                            className="textarea"
                            value={body}
                            onChange={(event)=>{setBody(event.target.value)}}
                        />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button 
                            className="button" 
                            htmlType="submit"
                            onClick={(event)=>{create_blog(event)}}
                        >
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        </div>
    </>
} 

export default Create;