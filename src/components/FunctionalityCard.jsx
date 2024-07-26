const FunctionalityCard = ({ Icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-center w-[200px] gap-1"
    >
      <Icon
        size={25}
      />
      <h2 className="font-semibold">
        {title}
      </h2>
      <p className="font-light text-sm">
        {description}
      </p>
    </div>
  )
}

export default FunctionalityCard