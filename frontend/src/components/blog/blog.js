import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Footer from '../footer/footer'
const FileUpload = () => {
  const userSignin = useSelector((state) => state.userSignin.userInfo);
  // const { userInfo } = userSignin;
  const [blog, setBlog] = useState([]);
     useEffect(() => {
    axios.get(`http://localhost:5000/blogs`)
      .then((res) => {
        console.log(res.data)
        setBlog(res.data);
      })
  }, 
  []);
  
  const deleteBlog=(blogid)=> {
    let selectblog=blog.find(function(blog){
     return blog.id ===blogid;
     
     });
     const yesdelete= window.confirm(`Do you want to delete ${selectblog.title}?`);
     
     if(yesdelete){

     const res =axios.delete("http://localhost:5000/blogs/delete/" +selectblog.blogid ,{
      
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
       },
       
      })
      console.log(res)
      .then((res) => {
        if (res) {
            alert("Deleted successfully!");  
        }
    })
    .catch((e) => {
        alert(e);
    });
      console.log(res)
  }else{
    alert("Delete cancelled");
   }
  }    
  return (
<div className="untree_co-section untree_co-section-4 pb-0" id="portfolio-section">
<div className="container">
<div className="portfolio-single-wrap unslate_co--section" id="portfolio-single-section">
<div className="portfolio-single-inner">
<h2 className="heading-portfolio-single-h2 text-black">Blogs</h2>
<div className="img-grid">
{blog.map(blog =>(
     <div className="row justify-content-between mb-5"> 
    <div className="thumbnail">
    <figure className="mb-4">
    <img src={blog.blogimg}  alt="light" style={{width:"100%",height:"auto"}} />
</figure>
<div className="col-12 my-5">
<div className="row">
<div className="col-sm-6 col-md-6 col-lg-3">
<div className="detail-v1">
<span className="detail-label">Blog Date</span>
<span className="detail-val">March 9th, 2020</span>
</div>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
<div className="detail-v1">
<span className="detail-label">Title</span>
<span className="detail-val">{blog.title}</span>
 </div>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
<div className="detail-v1">
<span className="detail-label">Visit</span>
<span className="detail-val"><a href={blog.url} rel="noopener noreferrer"target="_blank">View</a></span>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<p>{blog.description}</p>  

{userSignin?.user ? <div> 

  <h3>Edit</h3>
             <>
             <Link to ={`/blogs/${blog.blogid}/edit`} >Edit</Link>
             <button  onClick={() => deleteBlog(blog.id)} >Delete</button>
             </>
 </div> :
   <div>
   Please <Link to="/login">Sign-in</Link> to edit.
 </div>
 
  }
  
</div>

</div>
</div>
))}

</div>
</div>
</div>
</div>
<Footer/>
</div>
  );
    
};

export default FileUpload;