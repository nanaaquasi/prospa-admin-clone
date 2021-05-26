import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import styles from "./Form.module.css";

const MotionStack = motion(Stack);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const variants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -50 },
    },
  },
  leave: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const stagger = {
  enter: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
  leave: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const SignInForm = () => {
  const history = useHistory();
  return (
    <AuthLayout bg="#1C1335">
      <Stack align="center">
        <Flex
          alignSelf="flex-end"
          align="center"
          justify="space-between"
          mb="24"
        >
          <Box></Box>
          <Flex align="center">
            <Text fontSize="14px" fontWeight="600">
              Don't have an account?
            </Text>
            <Link to="/signup">
              <Text
                ml="1"
                fontSize="14px"
                fontWeight="600"
                color="rgb(250, 74, 132)"
              >
                Sign Up
              </Text>
            </Link>
          </Flex>
        </Flex>
        <MotionStack
          initial="leave"
          animate="enter"
          variants={variants}
          w={["100%", "40%"]}
          mx="auto"
        >
          <MotionText variants={stagger} fontSize="28px" fontWeight="600">
            Welcome back to prospa
          </MotionText>
          <Text variants={stagger} color="rgb(131, 151, 171)">
            An account, with powerful, personalised tools all in one place
          </Text>
          <MotionBox variants={stagger} w="100%">
            <form>
              <input
                type="email"
                className={styles.FormInput}
                placeholder="Email Address"
              />

              <input
                type="password"
                className={styles.FormInput}
                placeholder="Enter Password"
              />
            </form>
            <button
              className={styles.Button}
              onClick={() => history.push("/dashboard")}
            >
              Next
            </button>
          </MotionBox>
        </MotionStack>
      </Stack>
    </AuthLayout>
  );
};

export default SignInForm;
