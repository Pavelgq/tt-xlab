import { ReactComponent as MainIcon} from "../../assets/svg/home.svg"
import { ReactComponent as SearchIcon} from "../../assets/svg/search.svg"
import { ReactComponent as TableIcon} from "../../assets/svg/tables.svg"
import { ReactComponent as CalendarIcon } from "../../assets/svg/calendar.svg"
import { ReactComponent as MapIcon} from "../../assets/svg/map.svg"
import { ReactComponent as VidgetsIcon} from "../../assets/svg/vidgets.svg"
import { ReactComponent as SettingIcon} from "../../assets/svg/settings.svg"
import { ReactComponent as SettingUserIcon} from "../../assets/svg/people.svg"
import { ReactComponent as FinanceIcon } from "../../assets/svg/finance.svg"
import { ReactComponent as ExitIcon } from "../../assets/svg/exit.svg"
export interface NavItemsI {
  name: string,
  link?: string,
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  subItems?: NavItemsI[]
}

export const navItems: NavItemsI[] = [
  {
    name: 'Главная',
    link: '/',
    Icon: MainIcon
  },
  {
    name: 'Поиск адресов',
    link: '/address',
    Icon: SearchIcon
  },
  {
    name: 'Таблицы',
    Icon: TableIcon
  },
  {
    name: 'Календарь',
    Icon: CalendarIcon
  },
  {
    name: 'Карты',
    Icon: MapIcon
  },
  {
    name: 'Виджеты',
    Icon: VidgetsIcon
  },
  {
    name: 'Настройки',
    Icon: SettingIcon,
    subItems: [
      {
        name: 'Настройки профиля',
        Icon: SettingUserIcon
      },
       {
        name: 'Управление финансами',
        Icon: FinanceIcon
      }
    ]
  },
  {
    name: 'Выход',
    Icon: ExitIcon
  }
]