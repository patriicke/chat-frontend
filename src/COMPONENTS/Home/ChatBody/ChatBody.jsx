import ChatTab from "./Chat/ChatTab";
import Users from "./Users/Users";
import UserDescription from "./Descriptions/UserDescription";
export default function ChatBody() {
  return (
    <div className="h-[95%] flex gap-2">
      <Users />
      <ChatTab />
      <UserDescription />
    </div>
  );
}
