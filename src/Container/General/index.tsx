import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import AboutPage from '../../routes/About';
import ResumePage from '../../routes/About';
import SkillsPage from '../../routes/About';
import ProjectsPage from '../../routes/About';
import ContactPage from '../../routes/About';

const GeneralContainer = styled.div`
  @media (min-width: 1250px) {
    min-width: 75%;
    width: 75%;
    margin: 0;
  }

  @media (min-width: 1024px) {
    position: relative;
    width: max-content;
    margin: auto;
  }
`

export default function General(): JSX.Element {
  return ( 
  <GeneralContainer>
    <Header></Header>
    <Routes>
      <Route path='/About' element={<AboutPage/>} />
      <Route path='/Resume' element={<ResumePage/>} />
      <Route path='/Skills' element={<SkillsPage/>} />
      <Route path='/Project' element={<ProjectsPage/>} />
      <Route path='/Contact' element={<ContactPage/>} />
    </Routes>
  </GeneralContainer>
  ) 
}