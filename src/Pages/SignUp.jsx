import React, { useState } from 'react'
import {FormControl, Input, Button,FormLabel, Box} from "@chakra-ui/react"

const SignUp = () => {

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