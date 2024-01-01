import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  width: max-content;
  border-radius: 0 20px;
  padding: 0 20px;
  box-shadow: none;
  background: #2b2b2cbf;
  backdrop-filter: blur(10px);
  border: 1px solid #383838;
  z-index: 5;
  margin: 0;
  box-sizing: border-box;
`

export const Options = styled.ul`
  gap: 30px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`

export const Option = styled.li`
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;

  .linkHeader {
    text-decoration: none;
    color: white;
  }
`

