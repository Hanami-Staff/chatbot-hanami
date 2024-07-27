import { FaUser, FaPencilAlt } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { ChatInput } from "../components";
// import { useParams } from "react-router-dom";

const ChatRoom = () => {
  // const { id } = useParams();

  return (
    <div className="flex flex-col pt-5 pb-2 w-[93%] left-8 absolute h-full">
      <div className="chat grow align-self-end overflow-y-auto">
        {/* Request */}
        <div className="flex gap-3 mb-7 max max-w-3xl">
          <div className="text-[#603CFF] size-10 rounded-full flex items-center justify-center border border-white">
            <FaUser size={15} />
          </div>

          <div
            action=""
            className="items-center border border-white border-solid backdrop-blur-lg bg-opacity-10  max-md:flex-wrap max-md:pr-5 max-md:mt-10 rounded-xl bg-transparent p-4 grow max-w-[90%]"
          >
            <span
              type="text"
              className="bg-transparent border rounded-md border-none outline-none text-opacity-30 leading-6 font-medium text-base my-auto w-full"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sequi officia iure natus? Aliquid, qui ipsum optio debitis nostrum
              suscipit nihil veritatis nam omnis, quam ipsa tempora sequi
              dolorem necessitatibus!
            </span>

          </div>
        </div>

        {/* response */}
        <div className="chat flex flex-col items-end ">
          <div className="flex items-center gap-4 max-w-3xl min-w-80">
            <div className="size-10 rounded-full bg-[#ED58C3] flex items-center justify-center ">
              <IoSparklesOutline size={20} className="text-white " />
            </div>

            <div className="grow max-w-[90%] rounded-md bg-white h-fit text-black p-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, eaque vitae nam aliquam expedita veniam. Quaerat ipsam id a praesentium eius. Voluptate delectus harum exercitationem pariatur repellendus cupiditate voluptatum quas.
              <FaPencilAlt className="inline ml-1 mb-1" size={15} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <ChatInput />
        <p className="text-[#718096] text-sm text-center">
          © 2024 Hanami. Todos Direitos Reservados.
        </p>
      </div>
    </div>
  );
};

export default ChatRoom;
