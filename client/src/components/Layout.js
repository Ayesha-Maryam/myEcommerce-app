import { React } from 'react';
import Header from './header';
import Footer from './layout/footer';
import {Helmet} from 'react-helmet';
const Layout=({children,title,description,keywords, author})=>{
    return(
        <div>
 <Helmet>
                           
      <meta charset="UTF-8"/>
  
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />

                <title>{title}</title>
    

 
            </Helmet>
<Header/>
<main style={{minHeight:"70vh"}}>
{children}
</main>
<Footer/>
        </div>
    )
};
Layout.defaultProps={
    title:'Ecommerce App - shop now',
    description:'mern Stack Project',
    keywords:'mern,reavy,node,mongodb',
   author:'Zareesha'
};
export default Layout;