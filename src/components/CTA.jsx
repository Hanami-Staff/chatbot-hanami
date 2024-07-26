import { LuPlus } from "react-icons/lu";

const CTA = () => {
  return (
    <button
      className="text-white bg-[#CA67AE] rounded-md flex h-12 items-center w-full gap-3 px-4 py-3 border border-emerald-600 transition-all duration-300 hover:bg-[#CA67AE]/90"
    >
      <LuPlus
        size={20}
      />
      Iniciar um novo bate-papo
    </button>
  )
}

export default CTA