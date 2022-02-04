/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/l.png';
import Member2 from 'assets/sazz.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Farhan Ibne Saif',
    title: 'Farhan Ibne Saif',
    designation: 'Founder & Developer',
    socialProfile: [
    
      {
        id: 1,
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/farhan-ibne-saif-b752ab221/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/farhanibne_saif/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Sazzat Parvez',
    title: 'Sazzat Parvez',
    designation: 'Investor & suggester',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/sazzat.parvez.90',
        icon: <FaFacebookF />,
      },
     
      {
        id: 2,
        name: 'instagram',
        path: 'https://www.instagram.com/sazzatp/',
        icon: <FaInstagram />,
      },
    ],
  },
 
  
  
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="the persons behind the scene"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
