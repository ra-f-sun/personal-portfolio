
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}


export default Layout