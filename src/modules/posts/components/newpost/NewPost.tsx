import {
  Avatar,
  Box,
  chakra,
  Divider,
  Flex,
  Icon,
  Input,
  Text,
  Textarea,
  useOutsideClick,
} from '@chakra-ui/react'
import EmojiPicker from 'emoji-picker-react'

import React, { useState } from 'react'
import { AiFillFileImage, AiFillSmile } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { openModalInfo } from '../../../../layout/sharedSlice/sharedSlice'
const NewPost = () => {
  const [showEmoji, setShowEmoji] = useState(false)
  const [text, setText] = useState('')
  const ref = React.useRef<any>()
  const refText = React.useRef<any>()
  const dispatch = useDispatch()

  useOutsideClick({
    ref,
    handler: () => setShowEmoji(false),
  })

  return (
    <Box
      alignSelf="self-start"
      background="white"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      p="1rem"
      rounded="lg"
      w="full"
    >
      <Box w="full">
        <Flex alignItems="baseline" gap=".5rem" w="full">
          <Avatar name="Ayoub Sayah" />
          <Textarea
            ref={refText}
            defaultValue={text}
            placeholder="What do u have in Mind?"
            w="full"
            onChange={(e) => setText(e.target.value)}
          />
        </Flex>
      </Box>
      <Divider my="1rem" />
      <Flex justifyContent="space-between">
        <Flex
          _hover={{ background: 'gray.200' }}
          alignItems="center"
          as={'label'}
          cursor="pointer"
          gap=".5rem"
          htmlFor="upload-image"
          justifyContent="center"
          mx="auto"
          p="1rem"
          rounded="lg"
          w="full"
        >
          <Icon as={AiFillFileImage} color="red.500" h="1.5rem" w="1.5rem" />
          <Text fontWeight="bold">Upload Pictures</Text>
          <Input display="none" id="upload-image" type="file" />
        </Flex>

        <Flex
          _hover={{ background: 'gray.200' }}
          alignItems="center"
          cursor="pointer"
          gap=".5rem"
          justifyContent="center"
          mx="auto"
          p="1rem"
          pos="relative"
          rounded="lg"
          w="full"
          onClick={() => setShowEmoji(true)}
        >
          <Icon as={AiFillSmile} color="blue.500" h="1.5rem" w="1.5rem" />
          <Text fontWeight="bold">Emojies</Text>

          {
            <Box
              ref={ref}
              display={showEmoji ? 'block' : 'none'}
              pos="absolute"
              top="100%"
              zIndex={15}
            >
              <EmojiPicker
                categories={[
                  {
                    category: 'suggested',
                    name: 'Recently Used',
                  },
                  { category: 'smileys_people', name: 'Faces...' },
                  { category: 'flags', name: 'flags' },
                ]}
                lazyLoadEmojis={true}
                previewConfig={{
                  showPreview: false,
                  defaultCaption: '',
                }}
                searchDisabled={true}
                skinTonesDisabled={true}
                onEmojiClick={(event, emojiObject) => {
                  console.log('emoji', event)
                  console.log(event.emoji, 'emojiiiiiiiii')
                  if (event.emoji === '🏳️‍🌈') {
                    dispatch(openModalInfo({ message: 'Orzon ya Feryeelll' }))
                    return
                  }
                  if (event.emoji === '🫠') {
                    return
                  }
                  setText(`${text}${event.emoji}`)
                  refText.current.value = `${text}${event.emoji}`
                  console.log('emoj', emojiObject)
                }}
              />
            </Box>
          }
        </Flex>
      </Flex>
    </Box>
  )
}

export default NewPost
