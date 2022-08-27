import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Box height="680px" bg="#ffffff" padding="0px">
      <Divider orientation="horizontal" />
      <Box
        width="1150px"
        position="center"
        margin="auto"
        padding="20px 0px 80px 0px"
        height="100%"
      >
        <Box width="20%" textAlign="left">
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-up">Sign-In</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box width="100%" padding="20px 0px 20px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Sign In
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box width="50%" margin="0 auto" padding="50px 0px 0px 0px">
          <Stack spacing={4}>
            <Box background="none" color="none">
              <FormControl>
                <FormLabel fontWeight="hairline">Full name *</FormLabel>
                <Input
                  focusBorderColor="#353535"
                  errorBorderColor="red.300"
                  type="text"
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Email address *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Phone *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Password *</FormLabel>
                <Input
                  min={6}
                  max={12}
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="number"
                  size="lg"
                  borderRadius="0px"
                />
              </FormControl>
            </Box>
          </Stack>
          <Box paddingTop="26px">
            Already a user?{" "}
            <Link color="teal.500" href="sign-in">
              Sign Up
            </Link>
          </Box>
          <Button
            borderRadius="0px"
            width="180px"
            color="white"
            background="#302C26"
            padding="20px"
            marginTop="20px"
            _hover={{
              color: "#302C26",
              background: "#ffffff",
              border: "1px solid black",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
