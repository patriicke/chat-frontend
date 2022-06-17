import ChatTab from "./Chat/ChatTab";
import ActiveUsers from "./Users/ActiveUsers";
import UserDescription from "./Descriptions/UserDescription";
export default function ChatBody() {
  return (
    <div className="h-[95%] flex gap-2">
      <ActiveUsers />
      <ChatTab />
      <UserDescription />
    </div>
  );
}
