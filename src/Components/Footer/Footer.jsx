import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import styles from "./Footer.module.css"

const Myp = styled.p`
  color: ${props => (props.theme === 'light' ? 'red' : 'black')};
`;

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="footer" style={{marginBottom:"3vh"}}>
      <p style={{textAlign:"center",fontWeight:"600"}}>Designed and build by ❤️Rahul, 2023 All right reserved.</p>
    </div>
  );
};

export default Footer;
