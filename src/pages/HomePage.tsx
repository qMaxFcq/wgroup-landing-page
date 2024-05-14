import Banner from '../components/customs/header/Banner';
import Product from '../components/customs/Detail/Product';
import Partner from '../components/customs/Detail/Partner';
// import People from '../components/customs/Detail/People';
import About from '../components/customs/Detail/About';
import CompanyDNA from '../components/customs/Detail/CompanyDNA';
import NavbarService from '../service/Navbar';
import Footer from '../service/Footer';
import Hiring from '../components/customs/Detail/Hiring';

export default function HomePage() {
  return (
    <div>
      <div>
        <div>
          <NavbarService />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <About />
        </div>
        <div>
          <CompanyDNA />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Hiring />
          <div>
            <Partner />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
