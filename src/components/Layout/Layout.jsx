import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/DetailSlice';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchUser())
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> : (
        <div >
          
          <CustomCursor />
          <Header />
          <Outlet />
          <Footer />
        </div>
      )
      }
    </>
  )
}
export default Layout;
