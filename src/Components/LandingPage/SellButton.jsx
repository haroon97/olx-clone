import React from "react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";

const SellButton = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  if (isLargerThan780) {
    return (
      <Box position="sticky" top="0.8%" ml="87%" mt={-8} zIndex="1000">
        <Link to="/post">
          <Button
            bg="white"
            _hover="none"
            borderRadius="30px"
            p="17px"
            borderTop="5px solid #05101E"
            borderLeft="5px solid #05101E"
            borderRight="5px solid #05101E"
            borderBottom="5px solid #05101E"
            className="sellBtn"
          >
            <AddIcon mr="5px" />
            SELL
          </Button>
        </Link>
      </Box>
    );
  } else {
    return (
      <Box position="sticky" top="80%" ml="40%" zIndex="1000">
        <Link to="/post">
          <Button
            bg="white"
            _hover="none"
            borderRadius="30px"
            p="17px"
            borderTop="5px solid #05101E"
            borderLeft="5px solid #05101E"
            borderRight="5px solid #05101E"
            borderBottom="5px solid #05101E"
            className="sellBtn"
          >
            <AddIcon mr="5px" />
            SELL
          </Button>
        </Link>
      </Box>
    );
  }
};

export default SellButton;
