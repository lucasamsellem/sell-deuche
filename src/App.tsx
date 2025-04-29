import Footer from './layout/Footer'
import Navbar from './layout/navbar/Navbar'
import Section from './layout/Section'
import AboutSection from './layout/sections/AboutSection'
import ContactSection from './layout/sections/ContactSection'
import Main from './layout/Main'
import AvailableUpholsteriesList from './components/upholsteries/AvailableUpholsteriesList'
import UpholsteriesGalleryList from './components/upholsteries/UpholsteriesGalleryList'

function App() {
  return (
    <div className="tracking-wider">
      <Navbar />

      <Main>
        <Section sectionId="gallery" sectionTitle="Galerie">
          <UpholsteriesGalleryList />
        </Section>
        <Section sectionId="available-upholsteries" sectionTitle="Selleries disponibles">
          <AvailableUpholsteriesList />
        </Section>
        <AboutSection />
        <ContactSection />
      </Main>

      <Footer />
    </div>
  )
}

export default App
