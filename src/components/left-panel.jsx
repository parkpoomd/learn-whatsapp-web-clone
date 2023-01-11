import { Box } from "@chakra-ui/react";
import { ChatList } from "./chat-list";
import { Header } from "./header";
import { SearchPanel } from "./search-panel";

export function LeftPanel(props) {
  return (
    <Box {...props} w="30%">
      <Header />
      <SearchPanel />
      <ChatList />
    </Box>
  );
}
