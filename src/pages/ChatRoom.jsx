import { FaUser, FaPencilAlt } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { ChatInput } from "../components";

const ChatRoom = () => {
  return (
    <div
      className='flex flex-col py-10 w-[90%] left-10 absolute h-full'
    >
      <div
        className="flex items-center gap-3 mb-14"
      >
        <div
          className="text-[#603CFF] size-10 rounded-full flex items-center justify-center border border-white"
        >
          <FaUser
            size={15}
          />
        </div>

        <form
          action=""
          className="flex justify-between items-center border border-white border-solid backdrop-blur-lg bg-opacity-10 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 rounded-xl bg-transparent px-4"
        >

          <input
            type="text"
            placeholder='Exemplo: "Explique lógica de programação em termos simples."'
            className="bg-transparent h-[56px] border rounded-md border-none outline-none text-opacity-30 leading-6 font-medium text-base my-auto w-full"
          />

          <FaPencilAlt
            size={20}
          />
        </form>
      </div>


      <div
        className="chat grow"
      >
        <div
          className="flex items-center gap-4"
        >
          <div
            className="size-10 rounded-full bg-[#ED58C3]  flex items-center justify-center"
          >
            <IoSparklesOutline
              size={20}
              className="text-white"
            />
          </div>

          <div
            className="w-full rounded-md bg-white h-fit text-black px-3"
          >
            Mensagem
          </div>
        </div>

      </div>


      <div
        className="space-y-2"
      >
        <ChatInput />
        <p
          className="text-[#718096] text-sm text-center"
        >
          © 2024 Hanami. Todos Direitos Reservados.
        </p>
      </div>
    </div>

  )
}

export default ChatRoom