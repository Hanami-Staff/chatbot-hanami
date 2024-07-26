import { FiMessageSquare } from "react-icons/fi";


const ChatCard = ({ title }) => {
  return (
    <button
      className="text-white btn"
    >
      <FiMessageSquare
        size={20}
      />
      {title}
    </button>
  )
}

export default ChatCard