import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Home/NavBar';

const Root = () => {
    return (
      <div>
        <div className="max-w-6xl mx-auto px-4">
          <NavBar />
        </div>
        <Outlet />
        <Footer />
      </div>
    );
};

export default Root;