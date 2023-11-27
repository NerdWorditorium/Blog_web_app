import { Link } from "react-router-dom";

function BlogsCard({title, body}){
    const maxString = 100;
    return <>
        <div className="bg-slate-300 p-5 w-[500px] m-10">
            <div className="text-lg font-bold mb-2 text-slate-700">
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
    </>
}

export default BlogsCard;