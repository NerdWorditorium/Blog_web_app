import { Link } from "react-router-dom";
import { UserOutlined, SettingFilled, LogoutOutlined, MenuOutlined } from "@ant-design/icons"
import { Modal, Button} from "antd";
import DropdownMenu from "./Dropdown";
import { useState } from "react";

function NavBar({loggedIn, username}){
    const [modal_visible,setVisible] = useState(false);
    const [showMenu, setMenu] = useState(true);
    function toggleMenu(){
        if(showMenu){
            setMenu(false);
        } else{
            setMenu(true);
        }
    }
    const dropdown_style = "flex flex-row gap-3 text-md font-bold text-black px-3";
    function signout(){
        console.log("Log out");
        setVisible(false);
    }
    const items = [
        {
            label: <Link to='/create' className={dropdown_style}>
                        <UserOutlined className="self-center border border-black rounded-full"/>
                        User Details
                </Link>,
            key: '0',
        },
        {
            label: <Link to='/create' className={dropdown_style}>
                    <SettingFilled className="self-center"/>
                    Settings
                </Link>,
          key: '1',
        },
        {
            type: 'divider'
        },
        {
            label: <button onClick={()=>{setVisible(true)}} className={dropdown_style}>
                    <LogoutOutlined className="self-center"/>
                    Signout
                </button>,
          key: '3',
        },
      ];
    return <div className="tablet:block tablet:px-8 tablet:py-3 text-lg font-bold bg-slate-700 text-white">
        <div className="tablet:inline-block tablet:gap-0 flex tablet:p-0 mobile:px-8 py-3 flex-row gap-3 font-extrabold text-xl">
            <button 
                className="tablet:hidden flex border p-1 border-gray-50 text-gray-50 rounded-sm"
                onClick={()=>toggleMenu()}
            >
                <MenuOutlined className="self-center"/>
            </button>
            <Link to='/'>Blog App</Link>
        </div>
        <div className={`tablet:inline-block tablet:float-right tablet:bg-inherit tablet:p-0 ${showMenu ? 'flex bg-slate-500 px-8 py-3' : 'hidden'}`}>
            {
                !loggedIn
                &&
                <span className="tablet:flex tablet:flex-row tablet:gap-11 flex flex-col gap-2">
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </span>
            }
            {
                loggedIn
                &&
                <span className="tablet:flex tablet:flex-row tablet:gap-11 flex flex-col gap-2">
                    <Link to='/create'>Create</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/personalblogs'>Created Blogs</Link>
                    <DropdownMenu 
                        items={items} 
                        value={username} 
                        icon={<UserOutlined className="tablet:flex hidden self-center border-2 rounded-full"/>}
                    />
                </span>
            }
            <Modal
            title = "Alert"
            open = {modal_visible}
            centered
            footer = {(_)=>(
                <>
                    <Button
                        onClick={()=>setVisible(false)}
                    >
                        Cancel
                    </Button>
                    <Button 
                        type="primary" 
                        ghost
                        onClick={(event)=>{signout(event)}}
                    >
                        Logout
                    </Button>
                </>
            )}
            >
                <p>Are you sure you want to signout?</p>
            </Modal>
           
        </div>
    </div>
}

export default NavBar;