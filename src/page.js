import Header from './header';
import Footer from './footer';
import './styles.css';

export default function Page({ children }) {
  return (
    <div className="container" className="body">
      <Header />
      <div className="flex-container m-5">
        <div className="row">
          <div className="col-12 col-lg-12 border rounded d-flex flex-column">
            <main>{children}</main>
          </div>
        </div>
      </div>  
      <div className="row">
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}

