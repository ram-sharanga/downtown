"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Button,
  Group,
  Modal,
} from "@mantine/core";

export default function HeaderModalButtons() {
  const [
    signInModalOpened,
    { open: openSignInModal, close: closeSignInModal },
  ] = useDisclosure(false);

  const [
    selectCityModalOpened,
    { open: openSelectCityModal, close: closeSelectCityModal },
  ] = useDisclosure(false);
  
  return (
    <Group gap={9}>
      <Modal
        opened={selectCityModalOpened}
        onClose={closeSelectCityModal}
        title="Select City"
      ></Modal>
      <Button
        variant="subtle"
        color="primary.2"
        p={6}
        fz={{ base: 12, md: 14, xl: 16 }}
        onClick={openSelectCityModal}
      >
        Chennai
      </Button>
      <Modal
        opened={signInModalOpened}
        onClose={closeSignInModal}
        title="Authentication"
      ></Modal>
      <Button
        variant="subtle"
        color="primary.3"
        p={6}
        fz={{ base: 12, md: 14, xl: 16 }}
        onClick={openSignInModal}
      >
        Sign In
      </Button>
    </Group>
  );
}
