import styled from "styled-components";

export const AppDiv = styled.div`
  margin: 0 5% 0 5%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
`;

export const HrLine = styled.hr`
  border: 1px solid #c0c4cc;
`;

export const Header = styled.header`
  padding: 20px;
`;

export const MovieTitleMain = styled.span`
  height: 20px;
  left: 1004px;
  top: 313px;
  font-size: 16px;

  display: block;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
  padding: 5px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 2.5rem;
`;

export const Card = styled.div`
  width: 282px;
  height: 400px;
  left: 918px;
  top: 0px;
  border: 2px solid #e7e7e7;
  background: #ffffff;
  border: 1px solid #e1e3e6;
  box-sizing: border-box;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  margin-top: 80px;
`;

export const VotingAverage = styled.p`
  position: absolute;
  border-radius: 50%;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
  width: 30px;
  height: 27px;

  background: #ffffff;
  border: 1px solid #000000;
  margin-left: 10px;
  text-align: center;
`;

export const SearchBox = styled.input`
  float: right;
  clear: both;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;

  position: relative;
  width: 180px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #c0c4cc;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const GridImage = styled.img`
  width: 280px;
  height: 85%;
  left: 613px;
  top: 1px;
  border-radius: 7px 7px 0px 0px;
`;
