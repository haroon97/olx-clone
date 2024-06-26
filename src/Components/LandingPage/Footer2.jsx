import { Box, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import playstore from "./Images/playstore.png";
import playtoreapple from "./Images/appstore.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { MdOutlinePlayCircle } from "react-icons/md";
const Footer2 = () => {
  return (
    <div>
      <Box bg="#ebeeef" border="1px solid #ebeeef">
        <SimpleGrid columns={[1, 2, 4, 5]} spacing="20px" mx="2rem" my="1rem">
          <Box>
            <Box>
              <Text as="b">POPULAR LOCATIONS</Text>
            </Box>
            <Box>
              <Link to="#">Lahore</Link>
            </Box>
            <Box>
              <Link to="#">Islamabad</Link>
            </Box>
            <Box>
              <Link to="#">Karachi</Link>
            </Box>
            <Box>
              <Link to="#">Faisalabad</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text as="b">TRENDING LOCATIONS</Text>
            </Box>
            <Box>
              <Link to="#">Islamabad</Link>
            </Box>
            <Box>
              <Link to="#">Lahore</Link>
            </Box>
            <Box>
              <Link to="#">Karachi</Link>
            </Box>
         
          </Box>
          <Box>
            <Box>
              <Text as="b">ABOUT US</Text>
            </Box>
            <Box>
              <Link to="#">About We Flip It</Link>
            </Box>
            <Box>
              <Link to="#">Careers</Link>
            </Box>
            <Box>
              <Link to="#">Contact Us</Link>
            </Box>
          
          </Box>
          <Box>
            <Box>
              <Text as="b">We Flip It</Text>
            </Box>
            <Box>
              <Link to="#">Help</Link>
            </Box>
            <Box>
              <Link to="#">Sitemap</Link>
            </Box>
            <Box>
              <Link to="#">Legal & Privacy information</Link>
            </Box>
            <Box>
              <Link to="#">Blog</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              {/* Folloe us section */}

              <Text as="b">FOLLOW US</Text>
              <Box mt="3px" mb="55px">
                <Flex gap="2">
                  <Link>
                    <TiSocialFacebookCircular size="20px" color="#557477" />
                  </Link>
                  <Link>
                    <RiInstagramLine size="20px" color="#557477" />
                  </Link>
                  <Link >
                    <TiSocialTwitterCircular size="20px" color="#557477" />
                  </Link>
                  <Link>
                    <MdOutlinePlayCircle size="20px" color="#557477" />
                  </Link>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Link>
                    <Image width="130px" src={playstore} alt="phone" />
                  </Link>

                  <Link>
                    <Image
                      height="35px"
                      px="5px"
                      width="130px"
                      src={playtoreapple}
                      alt="phone"
                    />
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        bg="
#002f34"
      >
        {" "}
        <Box mx="2rem" display="flex" pt="1rem" pb="1rem">
          <Text color="white">
             Developed by Umair Shahzad
          </Text>
          <Spacer />
          <Text color="white">All rights reserved © 2024 WE FLIP IT</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer2;
