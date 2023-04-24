import { ReactNode } from 'react';
import "./Navbar.module.css"
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs

import rahul_resume from "../../Docs/Rahul_Resume.pdf"
import { HiDownload } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      // bg: useColorModeValue('gray.200', 'gray.700'),
      bg: useColorModeValue('gray.700', 'gray.200'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {

  const breakpoints = {
    sm: '500px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
  
  // 3. Extend the theme
  const theme = extendTheme({ breakpoints })


  const openLink = (url) => {
    window.open(url);
  };
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <>
      {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id="nav-menu" className="navbar"> */}
      <Box bg={useColorModeValue('gray.900', 'gray.100')} px={4} id="nav-menu" className="navbar" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} color={useColorModeValue('gray.100', 'gray.900')}>
          <Link
            to="home"
            smooth={"true"}
            textDecoration="none"
            offset={-100}
            duration={500}
            className="nav-link home"
            fontWeight="bold"
            fontSize={{base:"18px",sm:"27px"}}
            color={useColorModeValue("rgb(200 100 50)","rgb(42 92 135)")}

            ml="10px"
          >
            {"< Rahul />"}
          </Link>
          <Link
            to="about"
            smooth={"true"}
            offset={-79}
            duration={500}
            className="nav-link about"
            display={{base:"none",sm:"block"}}
            
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={"true"}
            offset={-79}
            duration={500}
            className="nav-link skills"
            display={{base:"none",sm:"block"}}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={"true"}
            offset={-79}
            duration={500}
            className="nav-link projects"
            display={{base:"none",sm:"block"}}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={"true"}
            offset={-79}
            duration={500}
            className="nav-link contact"
            display={{base:"none",sm:"block"}}
          >
            Contact
          </Link>
          <Link
            href=""
            className="nav-link resume"
            id="resume-link-1"
            // download = {rahul_resume}
            download="Rahul_Resume.pdf"
            display={{base:"none",sm:"block"}}
          >
            <Flex
              alignItems={"center"}
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1oUG0-EfArwMZ74GxSaxT9QKL8VYQdoK1/view?usp=share_link"
                )
              }
              className="navbar-resume"
              id="resume-button-1"
            >
              Resume <HiDownload />
            </Flex>
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} color={useColorModeValue('gray.900', 'gray.900')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu theme = {theme}>
                
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  display={{base:"block",sm:"none"}}
                  // bg={useColorModeValue('white','white')}
                  color={useColorModeValue('gray.100', 'gray.900')}
                  minW={0}>
                  <RxHamburgerMenu />
                </MenuButton>
                <MenuList alignItems={'center'} bg={useColorModeValue('gray.900', 'gray.100')}>
                  {/* <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br /> */}
                  <MenuDivider />
                  <MenuItem bg={useColorModeValue('gray.900', 'gray.100')}>
                    <Link
                      to="about"
                      smooth={"true"}
                      offset={-79}
                      duration={500}
                      className="nav-link about"

                    >
                      About
                    </Link>
                  </MenuItem>
                  <MenuItem bg={useColorModeValue('gray.900', 'gray.100')}>
                    <Link
                      to="skills"
                      smooth={"true"}
                      offset={-79}
                      duration={500}
                      className="nav-link skills"
                    >
                      Skills
                    </Link>
                  </MenuItem>
                  <MenuItem bg={useColorModeValue('gray.900', 'gray.100')}>
                    <Link
                      to="projects"
                      smooth={"true"}
                      offset={-79}
                      duration={500}
                      className="nav-link projects"
                    >
                      Projects
                    </Link>
                  </MenuItem>
                  <MenuItem bg={useColorModeValue('gray.900', 'gray.100')}>
                    <Link
                      to="contact"
                      smooth={"true"}
                      offset={-79}
                      duration={500}
                      className="nav-link contact"
                    >
                      Contact
                    </Link>
                  </MenuItem>
                  <MenuItem bg={useColorModeValue('gray.900', 'gray.100')}>
                    <Link
                      href=""
                      className="nav-link resume"
                      id="resume-link-1"
                      // download = {rahul_resume}
                      download="Rahul_Resume.pdf"
                    >
                      <Flex
                        alignItems={"center"}
                        onClick={() =>
                          openLink(
                            "https://drive.google.com/file/d/1oUG0-EfArwMZ74GxSaxT9QKL8VYQdoK1/view?usp=share_link"
                          )
                        }
                        className="navbar-resume"
                        id="resume-button-1"
                      >
                        Resume <HiDownload />
                      </Flex>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}