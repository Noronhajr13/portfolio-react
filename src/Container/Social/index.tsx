import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faMobile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { 
  SocialContainer,
  UpperSidebar,
  Image,
  InfoContent,
  Title,
  Position,
  DownSidebar,
  Separator,
  Contacts,
  Contact,
  IconBox,
  ContactItem,
  SocialMedia,
  SocialItem
  } from './styles';

// const faInstagramPropIcon = faInstagram as IconProp;
// const faLinkedinPropIcon = faLinkedin as IconProp;
// const faGithubPropIcon = faGithub as IconProp;
// const faEnvelopePropIcon = faEnvelope as IconProp;
// const faMobilePropIcon = faMobile as IconProp
// const faCalendarPropIcon = faCalendar as IconProp
// const faLocationDotPropIcon = faLocationDot as IconProp

const SocialList = [ 
  { icon: faInstagram, link: 'https://www.instagram.com/noronhajf/'},
  { icon: faLinkedin, link: 'https://www.linkedin.com/in/claudionoronha01/'},
  { icon: faGithub, link: 'https://github.com/Noronhajr13'}
]

const ContactsList = [
  {icon: faEnvelope, title: 'EMAIL', contact: <a href="maito:noronhajf22@gmail.com">noronhajf22@gmail.com</a> },
  {icon: faMobile, title: 'PHONE', contact: <a href="https://api.whatsapp.com/send?phone=32984046885">+55 (32) 98404-6885</a>},
  {icon: faCalendar, title: 'BIRTHDAY', contact: 'September 20, 1986'},
  {icon: faLocationDot, title: 'LOCATION', contact: 'Juiz de Fora, MG, Brasil'}
]

export default function Social(): JSX.Element {
  return ( 
    <SocialContainer>
      <UpperSidebar>
        <Image>
          <img 
            src='/images/Cartoon.svg'
            alt="Noronha Jr"
            className='avatar'/>
        </Image>

        <InfoContent>
          <Title>Claudio Noronha Jr</Title>
          <Position>Full Stack Developer</Position>
        </InfoContent>

        {/* <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button> */}
      </UpperSidebar>

      <DownSidebar>
        <Separator/>

        <Contacts>
          {ContactsList.map((object) => (
            <Contact>
              <IconBox><FontAwesomeIcon icon={object.icon}/></IconBox>
              <ContactItem>
                <p>{object.title}</p>
                <p>{object.contact}</p>
              </ContactItem>
            </Contact>
          ))}
        </Contacts>
      
        <Separator/>

        <SocialMedia>
          {SocialList.map((object) => (
            <SocialItem><a href={object.link}><FontAwesomeIcon icon={object.icon}/></a></SocialItem>
          ))}
        </SocialMedia>

      </DownSidebar>

    </SocialContainer>
  )
}