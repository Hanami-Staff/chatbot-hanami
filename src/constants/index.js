import { BiTrendingUp, BiTargetLock } from "react-icons/bi";
import { VscSparkle } from "react-icons/vsc";
import { LuTrash, LuSun, LuPower } from "react-icons/lu";
import { MdOpenInNew } from "react-icons/md";

export const functionalities = [
  {
    Icon: VscSparkle,
    title: 'Auxílio em suas dúvidas',
    description: 'Receba suporte para suas dúvidas de lógica e programação'
  },
  {
    Icon: BiTargetLock,
    title: 'Interações intuitivas',
    description: 'Oferece uma experiência de aprendizado intuitiva e fácil de navegar.'
  },
  {
    Icon: BiTrendingUp,
    title: 'Maior eficiência',
    description: 'Aprimore sua eficiência no estudo com HanaBot, seu aliado inteligente'
  },
];

export const sidebarButtons = [
  {
    Icon: LuTrash,
    label: 'Apagar Todas Conversas'
  },
  {
    Icon: LuSun,
    label: 'Alternar Modo de Luz'
  },
  {
    Icon: MdOpenInNew,
    label: 'Dúvidas'
  },
  {
    Icon: LuPower,
    label: 'Sair'
  },
]