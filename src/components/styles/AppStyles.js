import styled from 'styled-components';

export const ContentWraper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 16em;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #9bd8db;
  overflow-x: hidden;
  padding-top: 0em;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 3em;
  }
`;

export const BodyWrapper = styled.div`
  flex: 1;
  margin-left: 16em;
  padding: 0 2em;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding: 0 1em;
  }
`;