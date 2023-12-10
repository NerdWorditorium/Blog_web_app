import BlogsCard from "../../components/BlogsCard";
import NavBar from "../../components/Navbar";

function YourBlogs(){
    const title1 = "This is the title of the blogs";
    const body1 = "Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am."
    return <>
        <NavBar loggedIn={true} username={"username"}/>
        <div className="flex justify-center">
            <div className="px-20 py-10">
                <h1>Blogs</h1>
                <BlogsCard title={title1} body={body1}/>
                <BlogsCard title={title1} body={body1}/>
            </div>
        </div>
    </>
}

export default YourBlogs;