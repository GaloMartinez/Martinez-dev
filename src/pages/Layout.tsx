
import ScrollToTop from '../hooks/ScrollToTop';
import { Outlet} from "react-router-dom";
import Home from './Home';

export default function Layout() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Home/>
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      
    </div>
  );
}
