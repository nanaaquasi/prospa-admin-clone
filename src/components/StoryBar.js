import { Box, Stack } from "@chakra-ui/react";
import React from "react";

const StoryBar = () => {
  return (
    <Stack isInline p="1" spacing="1">
      <Box w="80px" h="2px" bg="white"></Box>
      <Box w="80px" h="2px" bg="white"></Box>
      <Box w="80px" h="2px" bg="#5b449c"></Box>
      <Box w="80px" h="2px" bg="#5b449c"></Box>
      <Box w="80px" h="2px" bg="#5b449c"></Box>
    </Stack>
  );
};

export default StoryBar;
