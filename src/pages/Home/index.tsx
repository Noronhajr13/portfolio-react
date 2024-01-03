import styled from 'styled-components';
import Social from '../../Container/Social';
import General from '../../Container/General';

const HomeContainer = styled.div`
  min-width: 259px;
  margin: 15px 12px;
  margin-bottom: 75px;

  @media (min-width: 1250px) {
    max-width: 1400px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
  }

  /* @media (min-width: 1024px) {
    margin-bottom: 60px;
  }

  @media (min-width: 580px) {
    margin-top: 60px;
    margin-bottom: 100px;
  } */
`

export default function Home(): JSX.Element {
  return ( 
    <HomeContainer>
      <Social/>
      <General/>
    </HomeContainer>
  )
}