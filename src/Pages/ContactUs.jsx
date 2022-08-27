import {
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
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactMessage } from "../Redux/ContactReducer/action";
import phone from "../utils/phone.png";
import message from "../utils/message.png";
=======
import React, { useReducer} from "react";
import { useDispatch } from "react-redux";
import { updateContactMessage} from "../Redux/ContactReducer/action";
import phone from "../utils/phone.png";
import message from "../utils/message.png";
import { useNavigate } from "react-router-dom";
import {ADD_MESSAGE_SUCCESS } from "../Redux/ContactReducer/actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "phone":
      return {
        ...state,
        phone: action.payload,
      };

    case "message":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)


const ContactUs = () => {
  const info = useSelector((state) => console.log(state.ContactReducer));
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

<<<<<<< HEAD
  useEffect(() => {
    getContactMessage();
  }, [info, dispatch]);
=======

  const messageHandler = () => {
    dispatch(updateContactMessage(state)).then((r) => {
      if (r === ADD_MESSAGE_SUCCESS) {
        navigate("/", { replace: true });
      }
    });
  };

  // useEffect(() => {
  //     dispatch(getContactMessage())
  // }, [info, dispatch]);
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)

  // console.log(info);

  return (
<<<<<<< HEAD
    <Box height="100vh" paddingBottom="300px">
=======
    <Box maxH="100vh" paddingBottom="300px"  marginBottom="100px" >
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
      <Divider orientation="horizontal" />
      <Box width="1150px" maxH="100%" position="center" margin="auto">
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
            maxH="100%"
            textAlign="left"
            marginTop="50px"
            paddingBottom="80px"
          >
            <Flex>
<<<<<<< HEAD
              <Box flex="1.2" maxH="100%">
=======
              <Box flex="1.2" maxH="100%" padding="10px" >
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
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
<<<<<<< HEAD
              <Box flex="2.8" padding="0px 30px 0px 30px">
                <FormControl>
                  <Stack spacing={8}>
                    <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="text"
=======
              <Box flex="2.8" >
             
                  <Stack spacing={8}>
                    <Box  background="none"
                      color="none">
                      <FormControl>
                      <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="text"
                      value={state.name}
                      onChange={(e) =>
                        setMessage({ type: "name", payload: e.target.value })
                      }
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
                      placeholder="Your Name *"
                      size="lg"
                      _placeholder={{ color: "black.300", fontSize: "medium" }}
                      borderRadius="0px"
                    />
<<<<<<< HEAD
=======
                      </FormControl>
                    </Box>
                   <Box>
                    <FormControl>
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
                    <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="email"
<<<<<<< HEAD
=======
                value={state.email}
                onChange={(e) =>
                  setMessage({ type: "email", payload: e.target.value })
                }
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
                      placeholder="Your Email *"
                      size="lg"
                      _placeholder={{ color: "black.400", fontSize: "medium" }}
                      borderRadius="0px"
                    />
<<<<<<< HEAD
                    <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="number"
=======
                    </FormControl>
                   </Box>
                    <Box>
                      <FormControl>
                      <Input
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      type="number"
                      value={state.phone}
                      onChange={(e) =>
                        setMessage({ type: "phone", payload: e.target.value })
                      }
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
                      placeholder="Your Phone *"
                      size="lg"
                      _placeholder={{ color: "black.400", fontSize: "medium" }}
                      borderRadius="0px"
                    />
<<<<<<< HEAD
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
=======
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl>
                      <Textarea
                      placeholder="Message *"
                      height="150px"
                      focusBorderColor="black"
                      errorBorderColor="red.300"
                      borderRadius="0px"
                      type="text"
                value={state.message}
                onChange={(e) =>
                  setMessage({ type: "message", payload: e.target.value })
                }
                    />
                      </FormControl>
                    </Box>
                  </Stack>
                <Button
                onClick={messageHandler}
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)
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
