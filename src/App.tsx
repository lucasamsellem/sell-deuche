import Footer from './layout/Footer';
import Section from './layout/Section';
import AboutSection from './layout/AboutSection';
import ContactSection from './layout/ContactSection';
import AvailableUpholsteriesList from './components/upholsteries/AvailableUpholsteriesList';
import UpholsteriesGalleryList from './components/upholsteries/UpholsteriesGalleryList';
import Header from './layout/Header';

function App() {
  return (
    <div className='tracking-wider'>
      <Header />

      <main className='max-w-[90rem] mx-auto lg:p-8 p-4'>
        <Section id='gallery' title='Galerie'>
          <UpholsteriesGalleryList />
        </Section>

        <Section id='available-upholsteries' title='Selleries disponibles'>
          <AvailableUpholsteriesList />
        </Section>

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
