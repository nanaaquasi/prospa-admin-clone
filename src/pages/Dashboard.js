import {
  Box,
  Button,
  Flex,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { cashOutflow } from "../utils/mock";
import BankIcon from "../assets/img/bank-icon.png";
import TransferIcon from "../assets/img/transfer-2.png";
import CardIcon from "../assets/img/card.png";
import CardIconAlt from "../assets/img/card-alt.png";
import Graph from "../components/Graph";

const Dashboard = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <DashboardLayout show={show} toggle={handleToggle} setShow={setShow}>
      <Stack spacing="8">
        <Flex
          justify="space-between"
          direction={["column", "row"]}
          flexWrap={["nowrap", "wrap"]}
        >
          <Stack spacing={["2", "0"]}>
            <Text fontSize="24px" fontWeight="600">
              Welcome back, Kathy
            </Text>
            <Text fontSize="16px" fontWeight="400" w={["100%", "100%"]}>
              Here's what has been happening in the last
              <span
                style={{
                  color: "#f94a83",
                  textDecoration: "underline",
                  marginLeft: "6px",
                }}
              >
                7 days
              </span>
            </Text>
          </Stack>
          <Button
            bg="#FA4A84"
            color="#fff"
            _hover={{ color: "#fff", bg: "#D43F70" }}
            fontWeight="400"
            px="6"
            alignSelf={["start", "start"]}
            mt={["12px", "0"]}
          >
            Add a sub account
          </Button>
        </Flex>
        <Flex direction={["column", "row"]} flexWrap={["nowrap", "wrap"]}>
          <Flex
            direction="column"
            justify="space-between"
            // height={["auto", "200px"]}
            shadow="md"
            bg="#fff"
            flexBasis={["100%", "49%"]}
            p="4"
          >
            <Flex justify="space-between" align="center">
              <Stack>
                <Text textTransform="uppercase" fontWeight="700" lineHeight="1">
                  Current Account
                </Text>
                <Text fontSize="13px" lineHeight="1" color="#8397AB">
                  PROVIDUS BANK - 9906533917
                </Text>
              </Stack>
              <Flex
                w="60px"
                h="60px"
                borderRadius="20px"
                align="center"
                justify="center"
              >
                <Image src={CardIcon} />
              </Flex>
            </Flex>
            <Text mt="10" fontSize={["26px", "32px"]} color="rgb(28, 19, 53)">
              N 814,800.45
            </Text>
          </Flex>
          <Box flexBasis={["2%"]}></Box>
          <Flex
            direction="column"
            justify="space-between"
            flexWrap={["nowrap", "wrap"]}
            shadow="md"
            bg="#fff"
            flexBasis={["100%", "49%"]}
            p="4"
            mt={["4", "0"]}
          >
            <Flex justify="space-between" align="center">
              <Stack>
                <Text textTransform="uppercase" fontWeight="700" lineHeight="1">
                  SAVINGS ACCOUNT
                </Text>
                <Text fontSize="13px" lineHeight="1" color="#8397AB">
                  SUB ACCOUNT - 12346789
                </Text>
              </Stack>
              <Flex
                w="60px"
                h="60px"
                borderRadius="20px"
                align="center"
                justify="center"
              >
                <Image src={CardIconAlt} />
              </Flex>
            </Flex>
            <Text mt="10" fontSize={["26px", "32px"]} color="rgb(28, 19, 53)">
              N 814,800.45
            </Text>
          </Flex>
        </Flex>
        <Flex direction={["column", "row"]} flexWrap={["nowrap", "wrap"]}>
          <Flex
            flexBasis={["100%", "55%"]}
            direction="column"
            p="6"
            shadow="md"
            bg="#fff"
            mb={["6", "0"]}
          >
            <Text fontWeight="700" fontSize="17px">
              June Summary
            </Text>
            <Flex w={["100%", "70%"]} justify="space-between" mt="6">
              <Stack spacing="2">
                <Text lineHeight="1" fontSize="14px" color="#8397AB">
                  Money In
                </Text>
                <Text lineHeight="1" fontSize="14px" fontWeight="700">
                  N 5,650,000
                </Text>
              </Stack>
              <Stack spacing="2">
                <Text lineHeight="1" fontSize="14px" color="#8397AB">
                  Money Out
                </Text>
                <Text lineHeight="1" fontSize="14px" fontWeight="700">
                  N 5,650,000
                </Text>
              </Stack>
              <Stack spacing="2">
                <Text lineHeight="1" fontSize="14px" color="#8397AB">
                  Difference
                </Text>
                <Text lineHeight="1" fontSize="14px" fontWeight="700">
                  N 5,650,000
                </Text>
              </Stack>
            </Flex>
            <Box w="100%" my="4" pb="6">
              <Graph />
            </Box>
          </Flex>
          <Box flexBasis="2%"></Box>
          <Flex
            flexBasis={["100%", "43%"]}
            direction="column"
            // justify="space-between"
            p="6"
            height="auto"
            shadow="md"
            bg="#fff"
          >
            <Text fontWeight="700" fontSize="17px">
              Cash outflow
            </Text>
            <Stack mt="8" spacing="10">
              {cashOutflow.map((cash) => (
                <Flex align="center" justify="space-between">
                  <Flex flexBasis={["36%", "40%"]} align="center">
                    <Box
                      width="25px"
                      h="25px"
                      bg={cash.bg}
                      borderRadius="5px"
                      d="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image src={cash.icon} />
                    </Box>
                    <Text ml="4" fontSize="14px">
                      {cash.type}
                    </Text>
                  </Flex>
                  <Stack flexBasis={["62%", "60%"]} spacing="1" ml={["6", "1"]}>
                    <Text fontSize={["13px", "14px"]}>{cash.amount}</Text>
                    <Progress
                      value={cash.progress}
                      colorScheme="yellow"
                      borderRadius="20px"
                      h={["4px", "6px"]}
                    />
                  </Stack>
                </Flex>
              ))}
            </Stack>
          </Flex>
        </Flex>
        <Stack spacing="6" p="6" shadow="md" bg="#fff" w="100%">
          <Flex justify="space-between" align="center" mb="4">
            <Text fontWeight="700" fontSize="17px">
              Recent Transactions
            </Text>
            <Button
              variant="outline"
              fontSize="14px"
              borderColor="#FA4A84"
              color="#FA4A84"
              _hover={{ bg: "#FA4A84", color: "#fff" }}
            >
              See All
            </Button>
          </Flex>
          <Flex justify="space-between">
            <Flex align="center">
              <Flex
                align="center"
                justify="center"
                w="45px"
                h="45px"
                bg="#F4F8FB"
                rounded="full"
              >
                <Image src={BankIcon} />
              </Flex>
              <Stack ml="4">
                <Text lineHeight="1" fontWeight="600">
                  Transfer Fee
                </Text>
                <Text lineHeight="1" fontSize="14px">
                  12:49 AM
                </Text>
              </Stack>
            </Flex>
            <Text justifySelf="end">-N145.90</Text>
          </Flex>
          <Box h="1px" w="100%" bg="#DCE7F2" my="2"></Box>
          <Flex justify="space-between">
            <Flex align="center">
              <Flex
                align="center"
                justify="center"
                w="45px"
                h="45px"
                bg="#F4F8FB"
                rounded="full"
              >
                <Image src={TransferIcon} />
              </Flex>
              <Stack ml="4">
                <Text lineHeight="1" fontWeight="600">
                  Adam Chapman
                </Text>
                <Text lineHeight="1" fontSize="14px">
                  12:49 AM
                </Text>
              </Stack>
            </Flex>
            <Text justifySelf="end">-N145.90</Text>
          </Flex>
          <Box h="1px" w="100%" bg="#DCE7F2" my="2"></Box>
          <Flex justify="space-between">
            <Flex align="center">
              <Flex
                align="center"
                justify="center"
                w="45px"
                h="45px"
                bg="#F4F8FB"
                rounded="full"
              >
                <Image src={TransferIcon} />
              </Flex>
              <Stack ml="4">
                <Text lineHeight="1" fontWeight="600">
                  Shirley Barnes
                </Text>
                <Text lineHeight="1" fontSize="14px">
                  12:49 AM
                </Text>
              </Stack>
            </Flex>
            <Text justifySelf="end">-N145.90</Text>
          </Flex>
          <Box h="1px" w="100%" bg="#DCE7F2" my="2"></Box>
          <Flex justify="space-between">
            <Flex align="center">
              <Flex
                align="center"
                justify="center"
                w="45px"
                h="45px"
                bg="#F4F8FB"
                rounded="full"
              >
                <Image src={TransferIcon} />
              </Flex>
              <Stack ml="4">
                <Text lineHeight="1" fontWeight="600">
                  Shirley Barnes
                </Text>
                <Text lineHeight="1" fontSize="14px">
                  12:49 AM
                </Text>
              </Stack>
            </Flex>
            <Text justifySelf="end">-N145.90</Text>
          </Flex>
        </Stack>
      </Stack>
    </DashboardLayout>
  );
};

export default Dashboard;
