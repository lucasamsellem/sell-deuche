import Footer from './components/layout/Footer';
import Navbar from './components/layout/navbar/Navbar';
import Section from './components/layout/Section';
import UpholsteriesList from './components/upholsteries/UpholsteriesList';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import {
  upholsteriesGallery,
  availableUpholsteries,
} from './data/upholsteriesData';
import AvailableUpholsteriesHeader from './components/upholsteries/AvailableUpholsteriesHeader';
import Main from './components/layout/Main';

function App() {
  return (
    <div className='tracking-wider'>
      <Navbar />

      <Main>
        <Section sectionId='gallery' sectionTitle='Galerie'>
          <UpholsteriesList upholsteriesGallery={upholsteriesGallery} />
        </Section>

        <Section
          sectionId='available-upholsteries'
          sectionTitle='Selleries disponibles'
        >
          <AvailableUpholsteriesHeader />
          <UpholsteriesList availableUpholsteries={availableUpholsteries} />
        </Section>

        <AboutSection />

        <ContactSection />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
