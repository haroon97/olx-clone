import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
const links = [
  {
    path: "/e-commerce",
    title: "Ecommerce stores",
  },
  {
    path: "#",
    title: "Physical businesses",
  },
  {
    path: "/mobile",
    title: "Amazon FBA stores",
  },
  {
    path: "#",
    title: "Youtube channels",
  },
  {
    path: "#",
    title: "SaaS businesses",
  },
  {
    path: "#",
    title: "Blogs",
  },
  {
    path: "#",
    title: "Apps",
  },
  {
    path: "#",
    title: "Social Media accounts",
  },
];

const DownNavbar = () => {
  const [isLargerThan425] = useMediaQuery("(min-width: 776px)");

  if (isLargerThan425) {
    return (
      <Box mt={10}>
        <HStack padding="25px 16px 0" boxShadow=" 0 1px 4px 0 rgb(0 0 0 / 10%)">
    
          <HStack lineHeight="3rem">
            {links.map((link) => (
              <Box
                className="navbox"
                _hover={{ color: "#23e5db" }}
                spacing="10px"
              >
                <Link
                  style={{ textDecoration: "none", paddingRight: "50px" }}
                  to={link.path}
                >
                  {link.title}
                </Link>
              </Box>
            ))}
          </HStack>
        </HStack>
      </Box>
    );
  }
};

export default DownNavbar;
