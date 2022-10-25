import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const Prompt = (props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal
      {...props}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={props.onHide}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Create OR Join Room </ModalHeader>

        <ModalBody pb={6}>
          <FormControl isRequired={true}>
            <FormLabel> Room Name </FormLabel>
            <Input ref={initialRef} placeholder="Room Name" value={props.room} onChange={e => props.setRoom(e.target.value)}  />
          </FormControl>

          <FormControl mt={4} isRequired={true}>
            <FormLabel> User Name </FormLabel>
            <Input ref={initialRef} placeholder="User name" value={props.username} onChange={e => props.setName(e.target.value)} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onHide}>
            Start Chat
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Prompt;
