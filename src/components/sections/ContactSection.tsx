import Section from '../layout/Section';
import { IonIcon } from '@ionic/react';

function ContactSection() {
  return (
    <Section sectionTitle='Contact' sectionId='contact'>
      <address className='text-center text-6xl active:opacity-60 transition-all duration-200'>
        <a href='mailto:gbeseme@gmail.com' aria-label='Email Guillaume Beseme'>
          <IonIcon name='mail-outline' className='lg:text-6xl text-[3rem]' />
        </a>
      </address>
    </Section>
  );
}

export default ContactSection;
