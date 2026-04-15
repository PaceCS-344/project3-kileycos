import ArtPortfolio from './artPortfolio';
import CodingPortfolio from './codingPortfolio';
import ContactPage from './contactPage';
import Home from './home';
import ProfilePage from './profilePage';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return(
    <BrowserRouter>
        <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/profile" element = {<ProfilePage />} />
              <Route path = "/art" element = {<ArtPortfolio />} />
              <Route path = "/code" element = {<CodingPortfolio />} />
              <Route path = "/contact" element = {<ContactPage />} />
          </Routes>
    </BrowserRouter>
  );
}


