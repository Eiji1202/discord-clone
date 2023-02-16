import React from "react";
import "./ChatHeader.scss";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help";

type Props = {
  channelName: string | null;
};

const ChatHeader = (props: Props) => {
  const { channelName } = props;
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeaderRight">
        <ChatBubbleIcon />
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <InboxIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
