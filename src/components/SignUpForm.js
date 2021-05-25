import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Stack,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { accountTypes, dialCodes } from "../utils/mock";
import styles from "./Form.module.css";
import { IoIosArrowBack } from "react-icons/io";
import CheckIcon from "./svg/CheckIcon";

const SignUpForm = () => {
  const history = useHistory();

  const [formStep, setFormStep] = React.useState(1);
  const [expandedIndex, setExpandedIndex] = React.useState(0);

  return (
    <AuthLayout bg="#7E51FF">
      <Stack align="center">
        <Flex
          alignSelf="flex-end"
          align="center"
          justify="space-between"
          mb="20"
          w="100%"
        >
          {formStep > 1 && (
            <Box
              alignSelf="flex-start"
              onClick={() => setFormStep(1)}
              border="1px solid #f1f1f7"
              p="2"
              cursor="pointer"
              borderRadius="1px"
            >
              <IoIosArrowBack />
            </Box>
          )}

          <Flex align="center" ml="auto">
            <Text fontSize="14px" fontWeight="600">
              Already have an account?
            </Text>
            <Link to="/signin">
              <Text
                ml="1"
                fontSize="14px"
                fontWeight="600"
                color="rgb(250, 74, 132)"
              >
                Sign In
              </Text>
            </Link>
          </Flex>
        </Flex>
        {formStep === 1 && (
          <Stack w={["100%", "40%"]} mx="auto">
            <Text fontSize="28px" fontWeight="600">
              Create your account
            </Text>
            <Text color="rgb(131, 151, 171)">
              A short decsription about account types
            </Text>
            <Box w="100%">
              <form>
                <input
                  type="text"
                  className={styles.FormInput}
                  placeholder="First Name"
                  autoComplete="off"
                />
                <input
                  type="text"
                  className={styles.FormInput}
                  placeholder="Last Name"
                />
                <div className={styles.SelectWrapper}>
                  <select className={styles.FormInput}>
                    {dialCodes.map((code) => (
                      <option placeholder="country">{code.dail_code}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className={styles.FormInput}
                    placeholder="Mobile Number"
                  />
                </div>
                <input
                  type="email"
                  className={styles.FormInput}
                  placeholder="Email Address"
                />
                <button
                  className={styles.Button}
                  onClick={() => setFormStep(2)}
                >
                  Next
                </button>
              </form>
            </Box>
          </Stack>
        )}
        {formStep === 2 && (
          <Box w={["100%", "40%"]}>
            <form>
              <Stack mx="auto">
                <Text fontSize="28px" fontWeight="600" lineHeight="1">
                  Open a new business account
                </Text>
                <Text color="rgb(131, 151, 171)" mb="4">
                  A short decsription comes here
                </Text>
                <Box w="100%">
                  <Accordion
                    allowToggle
                    defaultIndex={[0]}
                    onChange={(index) => setExpandedIndex(index)}
                    mt="4"
                  >
                    {accountTypes.map((type, idx) => (
                      <AccordionItem
                        key={idx}
                        shadow="lg"
                        mb="6"
                        border={expandedIndex === idx && "1px solid #f94a83"}
                      >
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton _focus={{ border: "none" }}>
                                <Box
                                  w="15px"
                                  h="15px"
                                  bg={
                                    expandedIndex === idx ? "#f94a83" : "#fff"
                                  }
                                  border="1px solid #ccc"
                                  borderRadius="50%"
                                ></Box>
                                <Box
                                  flex="1"
                                  textAlign="left"
                                  fontSize="16px"
                                  px="6"
                                  fontWeight="600"
                                  w="80%"
                                >
                                  {type.title}
                                </Box>
                                {/* <AccordionIcon /> */}
                              </AccordionButton>
                              <AccordionPanel pb={6} px="10">
                                <Text
                                  fontSize="13px"
                                  color="rgb(131, 151, 171)"
                                  mb="2"
                                >
                                  {type.description}
                                </Text>
                                {type.types.map((list) => (
                                  <List spacing="10">
                                    <ListItem
                                      fontSize="13px"
                                      color="rgb(131, 151, 171)"
                                      my="2"
                                      display="flex"
                                      alignItems="center"
                                    >
                                      <ListIcon
                                        as={CheckIcon}
                                        color="green.500"
                                      />
                                      <Text ml="2">{list}</Text>
                                    </ListItem>
                                  </List>
                                ))}
                              </AccordionPanel>
                            </h2>
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>
              </Stack>
              <button
                className={styles.Button}
                onClick={() => history.push("/dashboard")}
              >
                Next
              </button>
            </form>
          </Box>
        )}
      </Stack>
    </AuthLayout>
  );
};

export default SignUpForm;
