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

const SignIn = () => {
  return (
    <Box height="78vh" bg="#ffffff" padding="0px">
      <Divider orientation="horizontal" />
      <Box
        width="1150px"
        position="center"
        margin="auto"
        height="100%"
        padding="20px 0px 60px 0px"
      >
        <Box width="20%" textAlign="left" padding="">
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-in">Sign-In</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box width="100%" padding="20px 0px 50px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Welcome Back
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box width="50%" margin="0 auto" padding="50px 0px 50px 0px">
          <Stack spacing={4}>
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
          <Box paddingTop="50px">
            Are you new here 💅?{" "}
            <Link color="teal.500" href="sign-up">
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

export default SignIn;
