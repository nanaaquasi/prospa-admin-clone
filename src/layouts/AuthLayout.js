import React from "react";
import { Box, Text, Flex, Stack, Image } from "@chakra-ui/react";
import { Link, useHistory, useParams } from "react-router-dom";
import StoryBar from "../components/StoryBar";
import AuthImage from "../assets/img/auth-img.png";
import AuthNavigator from "../navigation/AuthNavigator";

const AuthLayout = (props) => {
  return (
    <Box d="flex" w="100%" h="100%" flexDirection={["column", "row"]}>
      <Flex
        direction="column"
        height="100%"
        overflowY="hidden"
        w={["100%", "23.5%"]}
        h={["200px", "100vh"]}
        bg="#7d51fe"
        p="8"
      >
        <Link to="/">
          <Box mb="14">
            <Image src="https://getprospa.com/static/icons/prospa-logo2.svg" />
          </Box>
        </Link>

        <StoryBar />
        <Stack spacing="4" my="10">
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
        </Stack>
        <Box w="250px" h="250px" mb="14">
          <Image w="100%" h="100%" src={AuthImage} alt="Auth Image" />
        </Box>
        <Text fontSize="14px" mt="20" color="#feffff">
          © {new Date().getFullYear()} Prospa Inc
        </Text>
      </Flex>

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
    </Box>
  );
};

export default AuthLayout;
