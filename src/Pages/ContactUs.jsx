import {
  Alert,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { isValidElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactMessage } from "../Redux/ContactReducer/action";
import phone from "../utils/phone.png";
import message from "../utils/message.png";

const ContactUs = () => {
  const info = useSelector((state) => console.log(state.ContactReducer));
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    getContactMessage();
  }, [info, dispatch]);


  // const isValid = (value) => {
  //   if(value === ""){
  //     Alert("Please enter a valid email address")
  //   }
  // }
  // console.log(info);

  return (
    <Box height="800px">
      <Divider orientation="horizontal" />
      <Box width="1150px" position="center" margin="auto" >
        <Flex flexDirection="column">
          <Box width="100%">
            {/* top div */}
            <Box padding="19px 0px" width="20%" textAlign="left">
              <Breadcrumb fontWeight="light" fontSize="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/contact-us">Contact Us</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box width="100%" padding="42px 0px 20px">
              <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
                Contact Us
              </Heading>
            </Box>
            <Divider orientation="horizontal" />
          </Box>
          <Box
            width="100%"
            height="900px"
            textAlign="left"
            marginTop="50px"
          >
            <Flex>
              <Box flex="1.2" maxH="100%" padding="0px 30px 0px 30px">
                <Flex padding="7px 0px 26px">
                  <Box>
                    <Image src={`${phone}`} alt="call us" maxW="30px" />
                  </Box>
                  <Box marginLeft="20px">
                    <Heading as="h4" size="md" fontWeight="semibold">
                      Call to Us:
                    </Heading>
                  </Box>
                </Flex>
                <Box padding="0px 0px 22px" textAlign="left">
                  <Text fontSize="md">Mon To Sat : 10:00 Am to 6:00 Pm</Text>
                </Box>
                <Box>
                  <Heading
                    as="h5"
                    size="sm"
                    fontWeight="semibold"
                    padding="0px 0px 9px"
                  >
                    Customer Service:
                  </Heading>
                </Box>
                <Box margin="16px 0px 24px" textAlign="left">
                  <Text fontSize="md" fontWeight="medium">
                    +91 97243 82162
                    <br />
                    +91 82000 99386
                  </Text>
                </Box>
                <Flex padding="7px 0px 26px">
                  <Box>
                    <Image src={`${message}`} alt="call us" maxW="30px" />
                  </Box>
                  <Box marginLeft="18px">
                    <Heading as="h4" size="md" fontWeight="semibold">
                      Write to Us:
                    </Heading>
                  </Box>
                </Flex>
                <Box margin="16px 0px 24px" textAlign="left">
                  <Text fontSize="md">
                    Fill out our form and we will contact you
                    <br /> within 24 hours.
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as="h5"
                    size="sm"
                    fontWeight="semibold"
                    padding="0px 0px 9px"
                  >
                    Customer Service:
                  </Heading>
                </Box>
                <Box margin="16px 0px 24px" textAlign="left">
                  <Text fontSize="md">uboricllp@gmail.com</Text>
                </Box>
              </Box>
              <Box flex="2.8" >
                <FormControl>
                  <Stack spacing={8}>
                    <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="text"
                      placeholder="Your Name *"
                      size="lg"
                      _placeholder={{ color: "black.300", fontSize: "medium" }}
                      borderRadius="0px"
                    />
                    <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="email"
                      placeholder="Your Email *"
                      size="lg"
                      _placeholder={{ color: "black.400", fontSize: "medium" }}
                      borderRadius="0px"
                    />
                    <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="number"
                      placeholder="Your Phone *"
                      size="lg"
                      _placeholder={{ color: "black.400", fontSize: "medium" }}
                      borderRadius="0px"
                    />
                    <Textarea
                      value={value}
                      placeholder="Message *"
                      height="150px"
                      type="text"
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      borderRadius="0px"
                    />
                  </Stack>
                </FormControl>
                <Button
                  borderRadius="0px"
                  color="white"
                  background="#302C26"
                  padding="26px"
                  marginTop="50px"
                  _hover={{color:"#302C26", background:"#ffffff", border:"1px solid black"}}
                >
                  Send Message
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;
