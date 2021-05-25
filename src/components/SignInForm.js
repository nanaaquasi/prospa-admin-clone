import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import styles from "./Form.module.css";

const SignInForm = () => {
  const history = useHistory();
  return (
    <AuthLayout>
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
        <Stack w="40%" mx="auto">
          <Text fontSize="28px" fontWeight="600">
            Welcome back to prospa
          </Text>
          <Text color="rgb(131, 151, 171)">
            An account, with powerful, personalised tools all in one place
          </Text>
          <Box w="100%">
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
          </Box>
        </Stack>
      </Stack>
    </AuthLayout>
  );
};

export default SignInForm;
