import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Textarea,
  HStack,
  Text
} from "@chakra-ui/react";
const ContactUs = () => {



  return (
    <Flex align="center" justify="center">
      <Box my="4rem" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" bg="white" p={6} rounded="md" w={480} zIndex={15} position="relative">
      <Text padding={10} textTransform="capitalize" fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }} fontWeight="extrabold" textAlign="center" >Let's keep in touch</Text>
        <Formik
          initialValues={{
            firstName:"",
            lastName:"",
            email: "",
            message:""
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <HStack spacing='24px'>
                <FormControl isInvalid={!!errors.firstName && touched.firstName }>
                  <FormLabel htmlFor="firstName"> First Name</FormLabel>
                  <Field
                    as={Input}
                    id="firstName"
                    name="firstName"
                    type="text"
                    variant="filled"
                    validate={(value: string) => {
                      let error
                      if(value ===""){
                        error = "First Name is required";
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName && touched.lastName }>
                  <FormLabel htmlFor="lastName" > Last Name</FormLabel>
                  <Field
                    as={Input}
                    id="lastName"
                    name="lastName"
                    type="text"
                    variant="filled"
                    validate={(value: string) => {
                      let error
                      if(value ===""){
                        error = "Last Name is required";
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                </FormControl>
                </HStack>
                
                <FormControl isInvalid={!!errors.email && touched.email }>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={(value: string) => {
                      let error
                      if(value ===""){
                        error = "Email is required";
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.message && touched.message } >
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Field
                  as={Textarea}
                  id="message"
                  name="message"
                  type="text"
                  variant="filled"
                  validate={(value: string) => {
                  let error
                  if(value ===""){
                    error = "Message is required";
                  }
                  return error;
                }}
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <Button type="submit" bg="primary.500" color="white" _hover={{background:"primary.600"}} width="full">
                  Send
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );

}

export default ContactUs
