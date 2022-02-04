/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'NFT"s',
    title: 'Nfts',
    text:
      'the modern looking and secure way to store your digital assets. Nfts are a new way to store digital assets on the blockchain.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Developement',
    title: 'Developement',
    text:
      'Cryptostickies are still on the early stage of development. We are working hard to make it a better place for everyone.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Buy one',
    title: 'Buy One',
    text:
      'You are still early in this modern technology. We are working hard to make it a better place for everyone. Be a part of this revolution. Buy a Cryptostickies.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Fast response',
    title: 'Fast response',
    text:
      'after you purchase a nft you will get a response in less than a minute. be confident in your purchase.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan=""
          title="Buy a Cryptostickies"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
