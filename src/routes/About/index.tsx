import styled from 'styled-components'

const AboutMe = styled.p`
  color: #FFF;
  margin: 10px 0;
  padding: 5px;
  margin: 30px;
  line-height: 30px;

  .paragraph {
    padding-bottom: 10px;
  }

  .check-list {
    margin: 0;
    padding-left: 1.2rem;
  }

  .check-list li {
    position: relative;
    list-style-type: none;
    padding-left: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .check-list li:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: -2px;
      width: 5px;
      height: 11px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: #946A0A;
      transform-origin: bottom left;
      transform: rotate(45deg);
  }
`

export default function AboutTab(): JSX.Element {
  return (
    <AboutMe>
      <div className='paragraph'>
        Welcome to my world, I hope I can contribute in some way. I invite you to learn a little about my Professional Career.
      </div>
      <div className='paragraph'>
        I am 37 years old, married, graduated in information systems from the Centro de Ensino Superior de Juiz de Fora. I became an IT Professional at the age of 24 and have been working ever since. With a total of 13 years of experience in Systems Development and Analysis, working in senior and strategic positions. I worked in several companies, from different segments, where I had some obligations such as:
      </div>
      <div>
        <ul className="check-list">
          <li>Responsible for analyzing and designing systems to meet the company's needs.</li>
          <li>Expertise in innovating and making users’ lives easier through thoughtful systems and agile methodologies.</li>
          <li>Use of work tools, such as: Git, GitHub, Azure, Oracle, SQL Server, Dbeaver, VisualStudio Code, VisualStudio 2013, 2015, 2017, 2019 e 2022, Postman, Dynatrace, entre outras</li>
          <li>Interface with other areas of the company, carrying out actions to understand and discuss problems and proposed solutions.</li>
        </ul>
      </div>
    </AboutMe>
    )
}