import { Link } from "react-router-dom";
import {LikeOutlined, HeartOutlined } from "@ant-design/icons"
import Profile from "../app-images/blog_profile.jpg"

function BlogsCard({title, body}){
    const maxString = 200;
    return <>
        <div className="flex flex-row items-center border border-slate-200 bg-white shadow-lg w-[800px] my-5 rounded-sm">
            <div className="flex flex-row">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="px-7 pt-5">
                        <img src={Profile} className="w-32 h-32 rounded-full"/>
                    </div>
                    <div className="flex w-full justify-center bg-slate-300 py-2">
                        <button className=" flex-1 font-semibold text-gray-600 justify-center "><LikeOutlined/></button>
                        <div className="border-r border-gray-400"></div>
                        <button className="flex-1 text-gray-600 justify-center"><HeartOutlined/></button>
                    </div>
                </div>
                <div className="border-l h-auto border-slate-300 mt-4"></div>
            </div>
            <div className="flex-1 flex flex-col justify-center bg-gray-50 h-full w-full px-10">
                <div className="text-xl font-bold mb-2 text-slate-700">
                    {title}
                </div>
                {
                    (body.length>100) 
                    &&
                    <div className="text-slate-600">
                        {body.substring(0, maxString)+ '...'}
                        <Link to="/" className="float-right text-blue-600">see more...</Link>
                    </div>
                }
                {
                    (body.length<=100) 
                    &&
                    <div className="text-slate-600">
                        {body}
                        <Link to="/" className="float-right text-blue-600">see more...</Link>
                    </div>
                }
            </div>
        </div>
    </>
}

export default BlogsCard;