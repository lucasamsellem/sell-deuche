import Footer from './components/html-tags/Footer';
import Navbar from './components/navbar/Navbar';
import Section from './components/html-tags/Section';
import UpholsteriesList from './components/upholsteries/UpholsteriesList';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import {
  upholsteriesGallery,
  availableUpholsteries,
} from './data/upholsteriesData';
import AvailableUpholsteriesHeader from './components/upholsteries/AvailableUpholsteriesHeader';
import Main from './components/html-tags/Main';

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
