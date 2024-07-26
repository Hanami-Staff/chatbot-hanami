import { ChatInput, FunctionalityCard } from "./components";
import { functionalities } from "./constants";

function App() {
  return (
    <main
      className="pl-[300px] py-4  bg-black h-screen text-white "
    >
      <div
        className="mx-4 bg-[#222222] rounded-lg h-full bg-late-500 relative overflow-hidden border border-white/15"
      >

        <div
          className="size-[1528px] bg-gradient-to-tr from-[#FA6CD2CC] to-[#222222] filter blur-3xl  rounded-full absolute bottom-0 -translate-x-1/2 translate-y-1/2"
        />


        <div
          className="flex flex-col items-center justify-center h-full"
        >
          <div
            className="text-center text absolute w-[70%] max-w-[800px]"
          >

            <h1
              className="text-5xl font-semibold"
            >
              Bem-vindo(a) ao <span className="span">HanaBot</span>
            </h1>

            <p className="mt-4 mb-[68px]">
              Floresça seu conhecimento em lógica e programação com o poder da IA.
            </p>

            <ChatInput />

            <div
              className="flex gap-12 pt-[104px] justify-center"
            >
              {functionalities.map((functionality, i) => (
                <FunctionalityCard
                  key={i}
                  {...functionality}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
