import ToWhomImage from '../img/img-to-whom.svg'
import ReasonImage from '../img/img-reason.svg'
import FillingImage from '../img/img-filling.svg'

export const headerHotOfferMenu = [
  {
    id: 1,
    img: ToWhomImage,
    title: 'Кому',
    step: 3,
    details: [
      { id: 1, title: 'Для мужчин', quantity: 123 },
      { id: 2, title: 'Для женщин', quantity: 63 },
      { id: 3, title: 'Папе', quantity: 120 },
      { id: 4, title: 'Сотрудникам', quantity: 30 },
      { id: 5, title: 'Мужу', quantity: 120 },
      { id: 6, title: 'Корпоративный', quantity: 100 },
    ],
  },
  {
    id: 2,
    img: ReasonImage,
    title: 'Повод',
    step: 3,
    details: [
      { id: 1, title: 'Свадьба', quantity: 732 },
      { id: 2, title: 'День рождения', quantity: 456 },
      { id: 3, title: 'Новый год', quantity: 100 },
      { id: 4, title: 'День победы', quantity: 80 },
    ],
  },
  {
    id: 3,
    img: FillingImage,
    title: 'Наполнение',
    step: 3,
    details: [
      { id: 1, title: 'С цветами', quantity: 213 },
      { id: 2, title: 'С ведущим', quantity: 154 },
      { id: 2, title: 'С украшениями', quantity: 72 },
      { id: 2, title: 'С деликатесами', quantity: 59 },
    ],
  },
]
