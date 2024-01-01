import { HeaderContainer, Options, Option } from './styes';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  const textOption = ['About','Resume','Skills','Projects','Contact']

  return (
    <HeaderContainer>
      <Options>
        {textOption.map((texto) => (
          <Option>
            <Link 
              className='linkHeader'
              to={`/${texto}`}>{texto}</Link>
          </Option>
        ))}
      </Options>
    </HeaderContainer>
  )
}
