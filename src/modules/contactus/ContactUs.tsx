import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const ContactUs = () => {
  const [somme, setSomme] = useState(0)
  const [somme2, setSomme2] = useState(0)
  const addToSomme = () => {
    setSomme(somme + 1)
  }
  const addToSomme2 = () => {
    setSomme2(somme2 + 1)
  }
  console.log('somme in out of effect', somme)

  useEffect(() => {
    console.log('somme in Effect', somme)
  }, [somme2])
  return (
    <div className="">
      <Box
        fontSize="xx-large"
        background="red"
        color="red"
        position="relative"
        display="flex"
      >
        {somme}
      </Box>

      <Box fontSize="xx-large">{somme2}</Box>
      <Text></Text>
      <Button
        colorScheme="blue"
        position="relative"
        zIndex={99}
        onClick={addToSomme}
      >
        add
      </Button>
      <Button
        colorScheme="blue"
        position="relative"
        zIndex={99}
        onClick={addToSomme2}
      >
        add2
      </Button>
    </div>
  )
}

export default ContactUs
