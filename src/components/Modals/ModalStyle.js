import styled from "styled-components";

export const ModalBox = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.7);
`;

export const MovieTitle = styled.div``;

export const CloseButton = styled.span`
  float: right;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid #141e35;
  outline: none;
  background-color: #fff;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  /* width: 30%; */
  width: 583px;
  height: 474px;
  left: 431px;
  top: 332px;
`;

export const MoviePosterId = styled.img`
  width: 266px;
  height: 389px;
  left: 458px;
  top: 389px;
`;

export const MovieContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  width: 100%;
  height: 389px;
`;

export const ReleaseDate = styled.p`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

export const Overview = styled.p`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01em;
`;

export const Rating = styled.p`
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #000000;

  margin: 16px 0px;
`;
