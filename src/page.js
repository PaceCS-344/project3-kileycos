import Header from './header';
import Footer from './footer';
import './styles.css';

export default function Page({ children }) {
  return (
    <div className="container" className="body">
      <Header />
            <main>{children}</main>

        <hr></hr>
        <Footer />
      </div>
  );
}

