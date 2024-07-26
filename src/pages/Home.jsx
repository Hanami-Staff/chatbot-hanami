import { ChatInput, Container, FunctionalityCard } from "../components"
import { functionalities } from "../constants"


const Home = () => {
  return (
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
  )
}

export default Home