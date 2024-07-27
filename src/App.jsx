import { useContext } from "react";
import { StartChat } from "./components";
import { BotContext } from "./context/BotContext";

function App() {
  const { isNew, answer, isStreaming } = useContext(BotContext);


  return (
    <main className="pl-[300px] py-4  bg-black h-screen text-white ">
      {isNew === true ? 
        <StartChat />
       : (
        <div className="mx-4 bg-[#222222] rounded-lg h-full bg-late-500 relative overflow-hidden border border-white/15">
          <div className="size-[1528px] bg-gradient-to-tr from-[#FA6CD2CC] to-[#222222] filter blur-3xl  rounded-full absolute bottom-0 -translate-x-1/2 translate-y-1/2" />
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center text absolute w-[70%] max-w-[800px]">
              <p className="mt-4 mb-[68px]">
                {answer}
                {isStreaming && <span>...</span>}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
