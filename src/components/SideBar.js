import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import AccountIcon from "../assets/img/account-pink.png";
import TransferIcon from "../assets/img/transfer-alt.png";
import MgtIcon from "../assets/img/management.png";
import InvoiceIcon from "../assets/img/invoice.png";
import logo from "../assets/img/logo-alt.svg";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -50 },
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const stagger = {
  open: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MotionStack = motion(Stack);
const MotionFlex = motion(Flex);

const SideBar = () => {
  const sideNavLinks = [
    { title: "Accounts", icon: AccountIcon, link: "/dashboard" },
    { title: "Transfer", icon: TransferIcon, link: "/dashboard" },
    { title: "Invoice", icon: InvoiceIcon, link: "/dashboard" },
    { title: "Management", icon: MgtIcon, link: "/dashboard" },
    { title: "Security", icon: MgtIcon, link: "/dashboard" },
    { title: "Support", icon: MgtIcon, link: "/dashboard" },
  ];
  return (
    <Box p="6" height="100%">
      <Menu>
        <MenuButton w="100%">
          <Flex w="100%" align="center" justify="space-between">
            <Flex
              align="center"
              justify="center"
              w="45px"
              h="45px"
              rounded="full"
              bg="#1C1335"
              color="#fff"
              fontSize="14px"
            >
              BN
            </Flex>
            <Stack align="start" ml="2">
              <Text lineHeight="1" color="#1B003B" fontWeight="700">
                Clayvant Inc
              </Text>
              <Text lineHeight="1" fontSize="14px" color="#8397AB">
                Manage account
              </Text>
            </Stack>
            <Flex
              justify="center"
              align="center"
              bg="#F4F8FB"
              w="40px"
              h="40px"
              borderRadius="6px"
              ml="8"
            >
              <IconContext.Provider value={{ color: "#8397AB", size: "20px" }}>
                <BsChevronDown />
              </IconContext.Provider>
            </Flex>
          </Flex>
        </MenuButton>
        <MenuList fontSize="14px">
          <MenuItem>Clayvant Inc</MenuItem>
          <MenuDivider />
          <MenuItem color="#8397AB">Business Name 2</MenuItem>
          <MenuDivider />
          <MenuItem color="#8397AB">Business Name 3</MenuItem>
          <MenuDivider />
          <MenuItem color="#FA4A84" fontSize="12px">
            Add New Business
          </MenuItem>
        </MenuList>
      </Menu>
      <Box h="1px" w="100%" bg="#DCE7F2" my="4"></Box>
      <MotionStack
        initial="closed"
        animate="open"
        variants={stagger}
        spacing="10"
        mt="8"
        px="4"
      >
        {sideNavLinks.map((navLink, idx) => (
          <MotionFlex
            variants={variants}
            align="center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            cursor="pointer"
          >
            <Image src={navLink.icon} />
            <Text
              fontWeight="600"
              ml="4"
              color={idx === 0 ? "#FA4A84" : "#8397AB"}
            >
              {navLink.title}
            </Text>
          </MotionFlex>
        ))}
      </MotionStack>
      <Box mt={["72", "60"]}>
        <Image src={logo} />
      </Box>
    </Box>
  );
};

export default SideBar;
