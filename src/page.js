import Header from './header';
import SideBar from './sideBar';
import Footer from './footer';
import './styles.css';

export default function Page({ children }) {
  return (
    <div class="container" className="body">
      <div class="row">
        <Header />
        <hr></hr>
      </div>
      <div class="flex-container m-5">
        <div class="row">
          <div class="col-12 col-lg-12 border rounded d-flex flex-column">
            <main>{children}</main>
          </div>
        </div>
      </div>  
      <div class="row">
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}

/* mentioned in sidebar.js why it's been removed
<div class="col-12 col-lg-3 border rounded d-flex flex-column">
            <SideBar />
          </div>
*/