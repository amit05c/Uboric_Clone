import React, { useState } from 'react'
import {FormControl, Input, Button,FormLabel, Box} from "@chakra-ui/react"

const SignUp = () => {
<<<<<<< HEAD
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
=======
>>>>>>> parent of d0ff962 (Updated Sign-in and Sign-up)

  // const registerUser = ({ serialized, fields, form }) => {
  //   return fetch('https://backend.dev', {
  //     body: JSON.stringify(serialized)
  //   })
  // }
  const [input, setInput] = useState('')

  const isError = input === ''
  
    return (
     <Box width="50%" margin="0 auto" height="80vh" padding="80px 0px 100px 0px" border="1px solid red">
       <form 
        // action={this.registerUser}
        // onSubmitStart={this.props.onSubmitStart}>
        style={{padding:"20px"}}
        >
           <Box  textAlign="left">
        <FormLabel>first name *</FormLabel>
        <FormControl isRequired name="primaryInfo" width="100%" >
          <Input
            name="firstName"
            label="First name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'lastName', 'value'])
            }} />
                  </FormControl>
        </Box>
        <Box  textAlign="left">
        <FormLabel>last name </FormLabel>
          <FormControl isRequired  width="100%"  >
          <Input
            name="lastName"
            label="Last name"
            required={({ get }) => {
              return !!get(['primaryInfo', 'firstName', 'value'])
            }} />
          </FormControl>
        </Box>
        <Box  textAlign="left">
        <FormLabel paddingRight="30px">Email *</FormLabel>
        <FormControl isRequired name="primaryInfo" width="100%"   >
          <Input
            name="userEmail"
            type="email"
            label="E-mail"
            required={true} />
        </FormControl>

        </Box>
        <Box  textAlign="left">
          
        <FormLabel>username *</FormLabel>
        <FormControl isRequired width="100%"  >
        <Input
          name="userPassword"
          type="username"
          required />
        </FormControl>
        </Box>
       <Box  textAlign="left">
       <FormLabel>password *</FormLabel>
        <FormControl isRequired  width="100%" >
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          required
          max={16} min={6}
          skip />
        </FormControl>
       </Box>
       
      </form>
      <Button primary>Register</Button>
     </Box>
    )
}

export default SignUp