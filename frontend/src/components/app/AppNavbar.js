import '../../App.css';
// import{Layout,Header,Navigation,Content,Drawer}from 'react-mdl';
import Project from '../portfolio/portfolio'
import Footer from '../footer/footer'
import{ Link}from 'react-router-dom';
function AppNavbar() {
  return (
    <div className="demo-big-content">

    {/* <Layout>
        <Header className="header-color" title="Portfolio" scroll>
       
            <Navigation>
            <Link to="/Profile">Profile</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/login">SignOut</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/Profile">Profile</Link>
            <Link to="/Resume">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Contact">Contact</Link> 
                <Link to="/Blog">Blog</Link>
                <Link to="/login">SignOut</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Nav/>
        </Content>
    </Layout> */}
    <div className="site-mobile-menu site-navbar-target">
<div className="site-mobile-menu-header">
<div className="site-mobile-menu-close">
<span className="icofont-close js-menu-toggle"></span>
</div>
</div>
<div className="site-mobile-menu-body"></div>
</div>
<nav className="site-nav dark mb-5 site-navbar-target">
<div className="container">
<div className="site-navigation">
<a href="index.html" class="logo m-0">Portfolio<span class="text-primary"></span></a>
<ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right">
<Link to="/Profile">Profile</Link>
            <Link to="/Resume">Resume</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/Contact">Contact</Link> 
                <Link to="/Blog">Blog</Link>
                <Link to="/login">SignOut</Link>

</ul>
<a href="portfolio-single-1.html#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block" data-toggle="collapse" data-target="#main-navbar">
<span></span>
</a>
</div>
</div>

</nav>

<Project/>
<Footer/>
</div>

  );
}

export default AppNavbar;