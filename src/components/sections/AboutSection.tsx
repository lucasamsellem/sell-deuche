import Section from '../html-tags/Section'
import { renovatedUpholsteries } from '@/data/upholsteriesData'
import RenovatedUpholsteryImg from '../upholsteries/RenovatedUpholsteryImg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import SubsectionTitle from './SubsectionTitle'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { renovationTools } from '@/data/upholsteriesData'
import Subsection from './Subsection'

function AboutSection() {
  const carouselBtnsVariant = 'secondary'

  return (
    <Section sectionId="about" sectionTitle="A propos">
      <Subsection>
        <SubsectionTitle>Genèse</SubsectionTitle>
        <article className="lg:text-lg text-xs font-medium space-y-6 leading-6 text-justify">
          <p>
            La toute récente histoire de SELL-DEUCHE-77 puise ses racines dans ma démarche de
            reconversion professionnelle, ainsi que dans ma passion pour les bicylindres CITROËN.
            Après presque 30 ans passés comme manager dans le milieu automobile (tant dans le
            domaine du centre-auto que dans celui du vitrage), j’ai choisi en 2021 de faire une
            pause pour recentrer mon activité sur mes profondes aspirations.
          </p>
          <p>
            Nostalgique du break AMI6 qui a été mon premier véhicule, j’avais acquis en 2004 un
            Break AMI8, sur lequel j’ai refait la sellerie pendant le confinement. A cette occasion,
            j’ai pu mettre à profit ma minutie et ma patience pour effectuer une restauration dans
            les règles de l’art. Après avoir partagé ce travail sur les Réseaux Sociaux et auprès de
            divers clubs de 2CV et dérivés, j’ai eu la surprise d’être contacté par nombre de
            passionnés, non seulement pour me féliciter du résultat, mais aussi pour me solliciter
            pour refaire leurs propres selleries !! Quelle récompense pour moi !!
          </p>
          <p>
            De fil en aiguille, tout doucement, l’idée d’en faire une activité à part entière a
            commencé à faire son chemin dans mon esprit. Bien soutenu par mon entourage, le projet
            d’auto-entreprise était lancé ! En juin dernier, cette idée est officiellement devenue
            réalité, ainsi est né « SELL-DEUCHE-77 », à votre service pour tous projets de
            restauration de sellerie pour 2CV, DYANE, ACADIANE, AMI6, AMI8 et AMISUPER !
          </p>
        </article>
      </Subsection>

      <Subsection>
        <SubsectionTitle>Restauration</SubsectionTitle>
        <Carousel className="w-[95%] rounded-4xl p-4 mx-auto border-1 border-black/30">
          <h3 className="lg:text-xl text-md text-center font-bold mb-5">Avant / après</h3>
          <CarouselContent>
            {renovatedUpholsteries.map(({ before, after }, index) => (
              <CarouselItem
                key={index}
                className="lg:max-h-[20rem] max-h-[16rem] flex items-center justify-center gap-x-3"
              >
                <RenovatedUpholsteryImg condition={before} i={index} />
                <RenovatedUpholsteryImg condition={after} i={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant={carouselBtnsVariant} />
          <CarouselNext variant={carouselBtnsVariant} />
        </Carousel>
      </Subsection>

      <Subsection>
        <SubsectionTitle>Outils</SubsectionTitle>
        <Accordion type="single" collapsible>
          {Object.entries(renovationTools).map(([toolCategory, tools]) => (
            <AccordionItem value={toolCategory} className="lg:text-[1rem] text-sm">
              <AccordionTrigger>{toolCategory}</AccordionTrigger>
              <AccordionContent className="lg:text-[0.9rem] text-xs">{tools}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Subsection>
    </Section>
  )
}

export default AboutSection
