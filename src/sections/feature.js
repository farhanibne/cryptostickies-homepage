/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
// import teacher from '../assets/teacher.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'CrytoStickies is a fast and secure platform for all your crypto-related needs. We are a team of experts who have been working on CrytoStickies for over a year.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'purchasing',
    title: 'Purchase with no hassle',
    text:
      'purchasing with no hassle , means a good minimal user experience.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Be Profitible',
    title: 'Be Profitible',
    text:
      'pricing of cryptostickies may increase in the near future. so, be profitible and buy it as soon as possible.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Security',
    title: 'Security',
    text:
      'the security of cryptostickies is our main priority. we use the latest technologies to protect your data.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan=""
          title="About this platform"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
