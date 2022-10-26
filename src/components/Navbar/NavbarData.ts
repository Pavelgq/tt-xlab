export interface NavItemsI {
  name: string,
  link?: string,
  icon: string,
  subItems?: NavItemsI[]
}

export const navItems: NavItemsI[] = [
  {
    name: 'Главная',
    link: '/news',
    icon: "../../assets/svg/home.svg"
  },
  {
    name: 'Поиск адресов',
    link: '/address',
    icon: "../../assets/svg/search.svg"
  },
  {
    name: 'Таблицы',
    icon: "../../assets/svg/tables.svg"
  },
  {
    name: 'Календарь',
    icon: "../../assets/svg/calendar.svg"
  },
  {
    name: 'Карты',
    icon: "../../assets/svg/map.svg"
  },
  {
    name: 'Виджеты',
    icon: "../../assets/svg/vidgets.svg"
  },
  {
    name: 'Настройки',
    icon: "../../assets/svg/setting.svg",
    subItems: [
      {
        name: 'Настройки профиля',
        icon: "../../assets/svg/people.svg"
      },
       {
        name: 'Управление финансами',
        icon: "../../assets/svg/finance.svg"
      }
    ]
  },
  {
    name: 'Выход',
    icon: "../../assets/svg/exit.svg"
  }
]