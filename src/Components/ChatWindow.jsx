import ChatNav from "./ChatNav";
import ChatBody from "./ChatBody";
function ChatWindow() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-1">
      <ChatNav />
      <ChatBody />
    </div>
  );
}

export default ChatWindow;
