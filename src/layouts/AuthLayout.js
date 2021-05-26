import React from "react";
import { Box, Text, Flex, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import StoryBar from "../components/StoryBar";
import AuthImage from "../assets/img/auth-img.png";
import { useWindowDimensions } from "../utils/hooks";
import logo from "../assets/img/logo.svg";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const AuthLayout = (props) => {
  const { width } = useWindowDimensions();

  const isMobile = width < 600;
  return (
    <MotionBox
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      d="flex"
      w="100%"
      h="100%"
      flexDirection={["column", "row"]}
    >
      {!isMobile && (
        <Flex
          direction="column"
          height="100%"
          overflowY="hidden"
          w={["100%", "23.5%"]}
          h={["200px", "100vh"]}
          bg={props.bg}
          p="8"
        >
          <Link to="/">
            <Box mb="14">
              <Image src={logo} alt="Prospa Logo" />
            </Box>
          </Link>

          <StoryBar />
          <MotionStack spacing="4" my="10">
            <Text
              fontSize="32px"
              fontWeight="bold"
              color="#feffff"
              lineHeight="1"
              // w="80%"
            >
              Create Multiple sub-accounts
            </Text>
            <Text
              color="#feffff"
              lineHeight="1.2"
              fontSize="14px"
              fontWeight="300"
              lineHeight="20px"
            >
              Organise your business finances easily with multiple accounts. No
              limits
            </Text>
          </MotionStack>
          <Box w="250px" h="250px" mb="14">
            <Image w="100%" h="100%" src={AuthImage} alt="Auth Image" />
          </Box>
          <Text fontSize="14px" mt="20" color="#feffff">
            © {new Date().getFullYear()} Prospa Inc
          </Text>
        </Flex>
      )}

      <Flex
        w={["100%", "76.5%"]}
        px="8"
        pt="8"
        h="100vh"
        bg="#fff"
        direction="column"
      >
        {props.children}
      </Flex>
    </MotionBox>
  );
};

export default AuthLayout;
