import { Flex, Heading } from "@chakra-ui/react";
import { useUser } from "@gadgetinc/react";
import CurrentChat from "../components/CurrentChat";
import LeftNav from "../components/LeftNav";
import { api } from "../api";

export default function () {
  const user = useUser(api);

  return user ? (
    <Flex flex="1" alignSelf="stretch">
      <LeftNav user={user} />
      <Flex direction="column" flex="1">
        <Flex py={4} mx={16} justifyContent="center" borderBottomWidth="1px" borderBottomColor="white">
          <Heading as='h1' size='4xl' color="white">Gadget x ChatGPT</Heading>
        </Flex>
        <CurrentChat user={user} />
      </Flex>
    </Flex>
  ) : null;
}
