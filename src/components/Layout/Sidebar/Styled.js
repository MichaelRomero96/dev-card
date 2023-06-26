import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const { breakpoints, colors } = theme;

const HeaderWrapper = styled.div`
  display: none;
  @media (${breakpoints.mmdDown}) {
    display: block;
    text-align: center;
    background-color: ${colors.fonts.title.normal};
    padding: 0.5rem;
  }
`;

const NavbarWrapper = styled.article`
  padding: 1.3rem 1rem;
  padding-bottom: 0;

  @media (${breakpoints.mmdDown}) {
    padding: 0;
  }
`;

const WrapperRedes = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media (${breakpoints.mmdDown}) {
    justify-content: center;
    gap: 10px;
  }
`;

const AnclasWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 1.3rem;
  padding: 0 3.3rem;
  margin: 1.3rem 0 0.5rem;

  @media (${breakpoints.mmdDown}) {
    padding: 0;
  }
`;

const WrapperMorePages = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  background-color: rgb(72, 169, 124);

  @media (${breakpoints.mmdDown}) {
    width: 94%;
    text-align: start;
    margin: 0.5rem auto 1rem;
    padding: 0 0 0 30px;
    /* width: 93%; */
    /* ----------- margin-top: 1rem;
    flex-direction: row;
    justify-content: space-between;-------------- */
  }
`;

const Body = styled.section`
  position: fixed;
  display: block;
  background-color: ${colors.fonts.title.normal};
  width: 280px;
  height: 100vh;
  top: 0;
  left: 0;
  font-weight: 400;
  font-size: 1em;
  text-align: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  @media (${breakpoints.lgDown}) {
    height: 100%;
  }

  @media (${breakpoints.mmdDown}) {
    position: relative;
    width: 100%;
    height: 90%;
    padding: 0 1rem 1rem;
  }
`;

const HeaderTitle = styled.h1`
  padding-top: 24px;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;

  @media (${breakpoints.mmdDown}) {
    display: none;
  }
`;

const ProfileImg = styled.img`
  max-width: 160px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 12.5px;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #fff;
`;

const RedesIcons = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 50%;
  padding-top: 5px;
`;

const Anclas = styled.li`
  font-weight: 600;
  font-size: 16px;

  @media (${breakpoints.mmdDown}) {
    padding: 0;
  }
`;

const AnclasLink = styled(Link)`
  color: #fff;
  display: block;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
  }
  &.active {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
  }
`;

const ListMorePages = styled.li`
  &:hover {
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const ListLinksMorePages = styled.a`
  display: block;
  color: #fff;
  width: 170px;
  padding: 4px;
  margin: 0.5rem 0;
  font-size: 14px;
  font-weight: 600;
`;

const TitleDarkMode = styled.h4`
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const AnclaMorePage = styled.p`
  margin-top: 1.3rem;
  margin-right: 40px;
  color: #fff;
  display: block;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
  }
  &.active {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
  }

  @media (${breakpoints.mmdDown}) {
    width: 100%;
    text-align: start;
  }
`;

const Button = styled.button`
  all: unset;
  display: inline-block;
  padding: 0rem 1rem;
  height: 2.5rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: #1a2a2059;

  &:hover {
    background-color: #111a1465;
    transition: 0.3s;
  }

  @media (${breakpoints.mmdDown}) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Hr = styled.hr`
  border-color: rgba(0, 0, 0, 0.08);
  margin: 1rem 0 0.5rem 0;
  opacity: 0.25;
`;

export default {
  HeaderWrapper,
  Body,
  HeaderTitle,
  NavbarWrapper,
  ProfileImg,
  Description,
  WrapperRedes,
  RedesIcons,
  Hr,
  AnclasWrapper,
  Anclas,
  AnclasLink,
  WrapperMorePages,
  ListMorePages,
  ListLinksMorePages,
  Button,
  TitleDarkMode,
  AnclaMorePage,
};
