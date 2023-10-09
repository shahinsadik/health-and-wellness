import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const Blog = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
    toast.success("Blog post has been submitted");
   }
  const posts = useLoaderData();
  return (
    <div className="lg:mx-20 mx-5 pt-24 mb-10">
      <h1 className="text-4xl font-bold text-center my-5 mb-5 text-[#6c63ff]">
        Blog
      </h1><Toaster></Toaster>
      <div className="lg:grid-cols-3 gap-5 grid">
      <div className=" grid md:grid-cols-2 grid-cols-1  gap-5 lg:col-span-2">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="card bg-base-100 shadow-xl ">
              <figure>
                <img className=" h-52 w-full" src={post.image} alt="image" />
              </figure>
              <div className="px-2 mt-2">
                <div className=" flex justify-between mb-3 ">
                  <p className="font-semibold text-[#6243d1]">
                    Published: {post.date}
                  </p>
                  <p className="font-semibold text-[#6243d1]">
                    Author: {post.author}
                  </p>
                </div>

                <h2 className="card-title  text-2xl mb-3">{post.title}</h2>
                <p className="text-justify">{post.content}</p>
              </div>
              <div>
                <div className="card-body">
                  <button  className="btn btn-info">read more</button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mb-5">
      <form
             
             className="card-body   bg-[#baade9] rounded-xl">
               <h1 className='text-2xl font-bold text-center text-white mb-10'>Write Blog Post</h1>
             <div className="">
               
               <div>
               <input
                 name="name"
                 type="text"
                 placeholder="Your first name"
                 className="input input-bordered w-full"
                 required
               />
               </div>
               <div>
               <input
                 name="name"
                 type="text"
                 placeholder="Your last name"
                 className="input input-bordered w-full mt-2"
                 required
               />
               </div>
             </div>
             <div className="form-control">
               
               <input
                 name="email"
                 type="email"
                 placeholder="Enter your email"
                 className="input input-bordered"
                 required
               />
               
             </div>
             <div className="form-control">
               
               <input
                 type="text"
                 name="subject"
                 placeholder="Subject"
                 className="input input-bordered"
                 required
               />
               <textarea
                   
                 type="input"
                 name="Message"
                 placeholder="Write Your Post"
                 className="input input-bordered textarea-lg  w-full mt-2 "
                 required
               />
               
             </div>
             <div className="form-control mt-6">
               <button onClick={handleSubmit} className="mb-2 btn btn-info ">
                 Submit Post
               </button>
               <div></div>
               
               <div className="flex gap-4 items-center justify-center mt-2">
                 
                 
               </div>
               
             </div>
           </form>
      </div>
      </div>
    </div>
  );
};

export default Blog;
