import Header from './header';
import Footer from './footer';
import './styles.css';

export default function Page({ children }) {
  return (
    <div className="page">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <hr />
      <Footer />
    </div>
  );
}

