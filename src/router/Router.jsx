import { 
    BrowserRouter as  Router,
    Routes,
    Route
} from "react-router-dom";
import App from "../App";
import SignUp from "../screen/user/SignUp";
import Login from "../screen/user/Login";
import UserDetail from "../screen/user/Detail";
import Create from "../screen/blogs/Create";
import Blogs from "../screen/blogs/Blogs";
import UpdateBlogs from "../screen/blogs/Update";
import YourBlogs from "../screen/blogs/YourBlogs";

function AppRouter(){
    return <>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>

                {/* User route */}
                <Route path="signup" element={<SignUp/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="userdetails" element={<UserDetail/>}/>

                {/* Blogs route */}
                <Route path="create" element={<Create/>}/>
                <Route path="blogs" element={<Blogs/>}/>
                <Route path="personalblogs" element={<YourBlogs/>}/>
                <Route path="updateblogs" element={<UpdateBlogs/>}/>

            </Routes>
        </Router>
    </>
}

export default AppRouter;