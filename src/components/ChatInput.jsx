import { useContext, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BotContext } from "../context/BotContext";

const ChatInput = () => {
  const { setQuestion, startQuestion } = useContext(BotContext);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handlerQuestion = () => {
    startQuestion();
    setQuestion(text);
    setText("");
  };

  return (
    <form
      action=""
      className="px-2 flex justify-between items-center border border-white border-solid backdrop-blur-lg bg-white bg-opacity-10 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 rounded-xl bg-white/5"
    >
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder='Exemplo: "Explique lógica de programação em termos simples."'
        className="bg-transparent h-[56px] w-full border border-white/35 rounded-md border-none outline-none text-opacity-30 leading-6 font-medium text-base my-auto"
      />

      <button
        className="bg-[#FA6CD2] size-11 flex items-center justify-center rounded-xl"
        onClick={(e) => {
          e.preventDefault(); // Chama preventDefault para evitar o comportamento padrão
          handlerQuestion(); // Chama a função handlerQuestion
        }}
      >
        <IoMdSend />
      </button>
    </form>
  );
};

export default ChatInput;
