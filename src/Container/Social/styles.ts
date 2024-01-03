import styled from 'styled-components';

export const SocialContainer = styled.div`
  background: #1e1e1f;
  border: 1px solid #383838;
  border-radius: 20px;
  box-shadow: 4px 8px 24px #00000040;
  margin-bottom: 15px;
  max-height: 1080px;
  overflow: hidden;
  padding: 20px;
  transition: 0.5s ease-in-out;
  z-index: 1;

  /* @media (min-width: 1250px) {
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
    //max-height: 180px;
    margin-bottom: 30px;
    width: 520px;
    margin-inline: auto;
    padding: 30px;
  } */
`

export const UpperSidebar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  position: relative;

  /* @media (min-width: 1050px) {
    flex-direction: column;
  }

  @media (min-width: 580px) {
    gap: 25px;
  } */
`

export const Image = styled.div`
  align-items: center;
  background: linear-gradient( to bottom right, #3f3f40 3%, #303030 97% );
  border-radius: 30px;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 150px;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  display: flex;
  margin-block-start: 10px;
  margin-block-end: 10px;
  white-space: nowrap;
  color: #fafafa;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.25px;
`

export const Position = styled.div`
  display: flex;
  align-self: center;
  background: #2b2b2c;
  font-size: 14px;
  font-weight: 600;
  width: max-content;
  padding: 4px 12px;
  border-radius: 8px;
`

export const DownSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Separator = styled.hr`
  width: 100%;
  margin: 32px 0;
  padding: 0;
  box-sizing: border-box;
  height: 1px;
  opacity: 1;
  background: #383838;
  visibility: visible;
`

export const Contacts = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Contact = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  font-size: 18px;
  position: relative;
  background: linear-gradient( to bottom right, #404040 0%, #40404000 50% );
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffdb70;
  box-shadow: -4px 8px 24px #00000020;
  z-index: 1;
`

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #fafafa;
    text-decoration: none;
  }

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`

export const SocialMedia = styled.p`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`


export const SocialItem = styled.div`
`