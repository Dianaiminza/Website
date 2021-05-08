
import './App.css';
import{Layout,Header,Navigation,Content,Drawer}from 'react-mdl';
import Main from './components/main/Main';
import{ Link}from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Blog">Blog</Link>
            </Navigation>
        </Header>
        
        <Drawer title="Title">
            <Navigation>
            <Link to="/Resume">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Blog">Blog</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Main/>
         
        </Content>
       
    </Layout>
    </div>
   
  );
}

export default App;



// import './App.css';
// import Footer from './components/footer/footer';
// import{Link}from 'react-router-dom';
// import{Content}from 'react-mdl';

// import Main from './components/main/Main';

// function App() {
  
//   return (
//     <div className="demo-big-content">
//     <div className="site-mobile-menu site-navbar-target">
// <div className="site-mobile-menu-header">
// <div className="site-mobile-menu-close">
// <span className="icofont-close js-menu-toggle"></span>
// </div>
// </div>
// <div className="site-mobile-menu-body"></div>
// </div>

// <nav className="site-nav dark mb-5 site-navbar-target">
// <div className="container">
// <div className="site-navigation">
// <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">

//  <Link to="/Resume" className="nav-link">Resume</Link>
//  <Link to="/Project"  className="nav-link">Projects</Link>
//  <Link to="/Blog" className="nav-link">Blog</Link>
         
// </ul>   

// <a href="portfolio-single-1.html#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block" data-toggle="collapse" data-target="#main-navbar">
// <span></span>
// </a> 
// </div>
// </div>
// </nav>
 
// <Content>
//             <div className="page-content"/>
//             <Main/>
//         </Content>
//         <Footer/>  
// </div>
//   );
// }

// export default App;



