import { Image } from "@chakra-ui/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { IconContext } from "react-icons/lib";
// import avatar from "../assets/img/avatar.png";

const DashboardLayout = (props) => {
  return (
    <Flex w="100%" h="100vh">
      <Stack
        flexBasis="19.5%"
        bg="white"
        shadow="lg"
        h="100vh"
        // display={{ base: show ? "block" : "none", md: "flex" }}
        overflowY="hidden"
        position={["fixed", "relative"]}
        zIndex="100"
        alignItems="flex-start"
      ></Stack>
      <Flex
        flexBasis="81.5%"
        direction="column"
        h="100vh"
        w="100%"
        overflowY="scroll"
      >
        <Flex
          flexBasis="12%"
          shadow="sm"
          align="center"
          px="20"
          justify="space-between"
          py="4"
        >
          <Text fontSize="18px" fontWeight="700" color="rgb(131, 151, 171)">
            Dashboard
          </Text>
          <Flex align="center">
            <Box border="1px solid #d2d9e0" p="2" borderRadius="8px">
              <IconContext.Provider value={{ size: "24px", color: "#8297aa" }}>
                <IoMdNotifications />
              </IconContext.Provider>
            </Box>
            <Box overflow="hidden" w="50px" h="50px" rounded="full" ml="4">
              <Image
                src="https://pbs.twimg.com/profile_images/1381036282638442498/7JqAxvZI_400x400.jpg"
                w="100%"
                h="100%"
              />
            </Box>
          </Flex>
        </Flex>
        <Flex
          flexBasis="88%"
          bg="#f4f8fb"
          px="20"
          pt="10"
          direction="column"
          pb="40"
        >
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
