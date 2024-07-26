const SidebarButton = ({ Icon, label }) => {
  return (
    <button
      className={`${label === "Sair" ? 'text-red-500' : 'text-white'} btn`}
    >
      <Icon
        size={20}
      />
      {label}
    </button>
  )
}

export default SidebarButton