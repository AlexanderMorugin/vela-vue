import PromoImage from '../img/img-promo.svg'
import SmartPhoneImage from '../img/img-smart-phone.svg'
import NotebookImage from '../img/img-notebook.svg'
import MonitorImage from '../img/img-monitor.svg'
import SpeakerImage from '../img/img-speaker.svg'
import NewBadgeImage from '../img/img-new-badge.svg'

export const headerCatalogMenu = [
  {
    id: 'Category-1',
    img: SmartPhoneImage,
    text: 'Смартфоны и гаджеты',
    category: [
      {
        id: 1,
        text: 'Смартфоны',
        items: [
          { id: 1, text: 'Apple iPhone', quantity: 123 },
          { id: 2, text: 'Смартфоны', quantity: 227 },
          { id: 3, text: 'iPhone 16', quantity: 120 },
          { id: 4, text: 'Складные', quantity: 30 },
          { id: 5, text: 'realme', quantity: 120 },
          { id: 6, text: 'Huawei Mate X6', quantity: 100 },
          { id: 7, text: 'Кнопочные', quantity: 23 },
          { id: 8, text: 'Домашние', quantity: 17 },
          { id: 9, text: 'Samsung', quantity: 27 },
        ],
      },
      {
        id: 2,
        text: 'Гаджеты',
        items: [
          { id: 1, text: 'Смарт-часы', quantity: 15 },
          { id: 2, text: 'Смарт-кольца', quantity: 34 },
          { id: 3, text: 'Наушники', quantity: 21 },
          { id: 4, text: 'Гарнитуры', quantity: 12 },
          { id: 5, text: 'Портативное аудио', quantity: 42 },
          { id: 6, text: 'Умные гаджеты', quantity: 46 },
          { id: 7, text: 'Очки VR', quantity: 49 },
          { id: 8, text: 'Для блогеров', quantity: 32 },
        ],
      },
    ],
  },
  {
    id: 'Category-2',
    img: NotebookImage,
    text: 'Ноутбуки и компьютеры',
    category: [
      {
        id: 1,
        text: 'Ноутбуки',
        items: [
          { id: 1, text: 'Lenovo', quantity: 732 },
          { id: 2, text: 'HP', quantity: 456 },
        ],
      },
      {
        id: 2,
        text: 'Компьютеры',
        items: [
          { id: 1, text: 'Электроника', quantity: 51 },
          { id: 2, text: 'Samsung', quantity: 314 },
        ],
      },
    ],
  },
  {
    id: 'Category-3',
    img: MonitorImage,
    text: 'Телевизоры и цифровое ТВ',
    category: [
      {
        id: 1,
        text: 'Телевизоры',
        items: [
          { id: 1, text: 'Sony', quantity: 213 },
          { id: 2, text: 'Panasonic', quantity: 154 },
        ],
      },
      {
        id: 2,
        text: 'Цифровое ТВ',
        items: [
          { id: 1, text: 'Триколор', quantity: 4 },
          { id: 2, text: 'НТВ+', quantity: 2 },
        ],
      },
    ],
  },
  {
    id: 'Category-4',
    img: SpeakerImage,
    text: 'Аудиотехника',
    category: [
      {
        id: 1,
        text: 'Домашние кинотеатры',
        items: [
          { id: 1, text: 'Sharp', quantity: 29 },
          { id: 2, text: 'Kenwood', quantity: 43 },
        ],
      },
      {
        id: 2,
        text: 'Магнитафоны',
        items: [
          { id: 1, text: 'Hitachi', quantity: 48 },
          { id: 2, text: 'Teac', quantity: 62 },
        ],
      },
    ],
  },
  { id: 'Category-5', img: PromoImage, text: 'Акции' },
  { id: 'Category-6', img: NewBadgeImage, text: 'Новинки' },
]
