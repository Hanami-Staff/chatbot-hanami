import ChatCard from "./ChatCard"
import CTA from "./CTA"
import { FaUser } from "react-icons/fa";
import { sidebarButtons } from "../constants";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {

  const chats = [
    'Teste 1',
    'Teste 2',
    'Teste 3'
  ]

  return (
    <div
      className="bg-[#222222] w-[300px] h-screen p-4 flex flex-col fixed top-0 left-0"
    >
      <div
        className="bg-white/5 w-full h-[64px] rounded-md flex items-center py-3 px-4 gap-3"
      >
        <div
          className="bg-[#222222] text-[#603CFF] size-10 rounded-full flex items-center justify-center"
        >
          <FaUser />
        </div>
        <p
          className="text-white"
        >
          Usuario
        </p>
      </div>

      <div
        className="grow space-y-1 mt-4"
      >
        {chats.map((chat, i) => (
          <ChatCard
            key={i}
            title={chat}
          />
        ))}
        <CTA />
      </div>


      <div
        className="border-t-2 border-t-white/10"
      >
        {sidebarButtons.map((button, i) => (
          <SidebarButton
            key={i}
            {...button}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar