import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Footer from '../footer/footer'
// import LogIn from '../../pages/signin';
// import{Switch}from 'react-router-dom';
  const FileUpload = () => {
  const userSignin = useSelector((state) => state.userSignin.userInfo);
  
  // const { userInfo } = userSignin;
  const [project, setProject] = useState([]);
  // const [isLog, setLog] = useState({});
  
     useEffect(() => {
    axios.get(`http://localhost:5000/projects`)
      .then((res) => {
        console.log(res.data)
         setProject(res.data);
      })
  }, 
  []);
  console.log({userSignin})
  //  const handleLogin = (isLog)=>{
  //    setLog(isLog)
  //  console.log(isLog)
  // alert(isLog)
  //  }

  const deleteProject=(projectid)=> {
    let selectproject=project.find(function(project){
     return project.id === projectid;
     
     });
     const yesdelete= window.confirm(`Do you want to delete ${selectproject.title} ${selectproject.projectid}?`);
     
     if(yesdelete){

     const res =axios.delete("http://localhost:5000/projects/delete/" +selectproject.projectid ,{
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
       },
       
      })
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
<div class="relative"><div class="loader-portfolio-wrap"><div class="loader-portfolio"></div></div> </div>
<div id="portfolio-single-holder"></div>
<div className="portfolio-single-wrap unslate_co--section" id="portfolio-single-section">
<div className="portfolio-single-inner">
<h2 className="heading-portfolio-single-h2 text-black">Projects</h2>
<div className="img-grid">
{project.map(project =>(
     <div className="row justify-content-between mb-5"> 
    <div className="thumbnail">
    <figure className="mb-4">
    <img src={project.projectimg}  alt="light" style={{width:"100%",height:"auto"}} />
</figure>
<div className="col-12 my-5">
<div className="row">
<div className="col-sm-6 col-md-6 col-lg-3">
<div className="detail-v1">
<span className="detail-label">Project Date</span>
<span className="detail-val">March 9th, 2020</span>
</div>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
<div className="detail-v1">
<span className="detail-label">Title</span>
<span className="detail-val">{project.title}</span>
 </div>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
<div className="detail-v1">
<span className="detail-label">Visit</span>
<span className="detail-val"><a href={project.url} rel="noopener noreferrer"target="_blank">View</a></span>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<p>{project.description}</p>  

{userSignin?.user ? <div> 

  <h3>Edit</h3>
             <>
             <Link to ={`/projects/${project.projectid}/edit`} >Edit</Link>
             <button  onClick={() => deleteProject(project.id)} >Delete</button>
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
