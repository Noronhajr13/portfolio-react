import styled from 'styled-components';

export const SocialContainer = styled.div`
  margin-bottom: 15px;
  max-height: 112px;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  background: #1e1e1f;
  border: 1px solid #383838;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 4px 8px 24px #00000040;
  z-index: 1;

  @media (min-width: 1250px) {
    position: sticky;
    top: 60px;
    max-height: max-content;
    height: 100%;
    margin-bottom: 0;
    padding-top: 60px;
    z-index: 1;
    width: auto;
  }

  @media (min-width: 1024px) {
    width: 950px;
    box-shadow: 0 24px 80px #00000040;
  }

  @media (min-width: 768px) {
    width: 700px;
  }

  @media (min-width: 580px) {
    max-height: 180px;
    margin-bottom: 30px;
    width: 520px;
    margin-inline: auto;
    padding: 30px;
  }
`

export const UpperSidebar = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (min-width: 1050px) {
    flex-direction: column;
  }

  @media (min-width: 580px) {
    gap: 25px;
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient( to bottom right, #3f3f40 3%, #303030 97% );
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin-block-end: 20px;
`

export const InfoContent = styled.div`
`

export const Title = styled.p`
  display: flex;
  margin-block-start: 10px;
  margin-block-end: 10px;
  white-space: nowrap;
  color: #fafafa;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.25px;
`

export const Position = styled.div`
  display: flex;
  align-self: center;
  background: #2b2b2c;
  font-size: 14px;
  font-weight: 600;
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
`

export const DownSidebar = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 5px; */
`

export const Separator = styled.hr`
  width: 100%;
`

export const Contacts = styled.li`
  /* display: flex;
  flex-direction: row;
  gap: 10px; */
`

export const IconBox = styled.p`
  /* display: flex;
  margin-block-start: 5px;
  margin-block-end: 5px;
  gap: 15px;

  a {
    color: #fafafa;
    text-decoration: none;
  } */
`


export const ContactItem = styled.div`
  /* display: flex;
  flex-direction: column; */
`

export const SocialMedia = styled.div`
  /* position: relative;
  background: linear-gradient( to bottom right, #404040 0%, #40404000 50% );
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #ffdb70;
  box-shadow: -4px 8px 24px #00000020;
  z-index: 1; */
`

export const SocialItem = styled.div`
`