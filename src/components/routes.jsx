import { Route, Routes } from 'react-router-dom';
import Registration from './registration/index';
import AboutUs from '../components/about us/aboutUs';
import TypesOfCleaning from '../components/types of cleaning/index';
import Api from './Test-api';

const Navigation = () => (
  <div>
    <Routes>
      <Route exact path='/' Component={TypesOfCleaning} />
      <Route path='/about-us' Component={AboutUs} />
      <Route path='/api' Component={Api} />
      <Route path='/registration' Component={Registration} />
    </Routes>
  </div>
);
export default Navigation;
