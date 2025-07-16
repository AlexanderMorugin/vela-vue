import PromoImage from '../img/img-promo.svg'
import SmartPhoneImage from '../img/img-smart-phone.svg'
import NotebookImage from '../img/img-notebook.svg'
import MonitorImage from '../img/img-monitor.svg'
import SpeakerImage from '../img/img-speaker.svg'
import NewBadgeImage from '../img/img-new-badge.svg'

export const headerCatalogMenu = [
  {
    id: 1,
    img: SmartPhoneImage,
    title: 'Смартфоны и гаджеты',
    step: 3,
    // name: 'smartphonesGadgets',
    details: [
      {
        id: 1,
        title: 'Смартфоны',
        name: 'smartphones',
        step: 4,
        details: [
          { id: 1, title: 'Apple iPhone', quantity: 123 },
          { id: 2, title: 'Смартфоны', quantity: 227 },
          { id: 3, title: 'iPhone 16', quantity: 120 },
          { id: 4, title: 'Складные', quantity: 30 },
          { id: 5, title: 'realme', quantity: 120 },
          { id: 6, title: 'Huawei Mate X6', quantity: 100 },
          { id: 7, title: 'Кнопочные', quantity: 23 },
          { id: 8, title: 'Домашние', quantity: 17 },
          { id: 9, title: 'Samsung', quantity: 27 },
        ],
      },
      {
        id: 2,
        title: 'Гаджеты',
        name: 'gadgets',
        step: 4,
        details: [
          { id: 1, title: 'Смарт-часы', quantity: 15 },
          { id: 2, title: 'Смарт-кольца', quantity: 34 },
          { id: 3, title: 'Наушники', quantity: 21 },
          { id: 4, title: 'Гарнитуры', quantity: 12 },
          { id: 5, title: 'Портативное аудио', quantity: 42 },
          { id: 6, title: 'Умные гаджеты', quantity: 46 },
          { id: 7, title: 'Очки VR', quantity: 49 },
          { id: 8, title: 'Для блогеров', quantity: 32 },
        ],
      },
    ],
  },
  {
    id: 2,
    img: NotebookImage,
    title: 'Ноутбуки и компьютеры',
    step: 3,
    // name: 'notebooksComputers',
    details: [
      {
        id: 1,
        title: 'Ноутбуки',
        name: 'notebooks',
        details: [
          { id: 1, title: 'Lenovo', quantity: 732 },
          { id: 2, title: 'HP', quantity: 456 },
        ],
      },
      {
        id: 2,
        title: 'Компьютеры',
        name: 'computers',
        details: [
          { id: 1, title: 'Электроника', quantity: 51 },
          { id: 2, title: 'Samsung', quantity: 314 },
        ],
      },
    ],
  },
  {
    id: 3,
    img: MonitorImage,
    title: 'Телевизоры и цифровое ТВ',
    step: 3,
    // name: 'tvDigitalTv',
    details: [
      {
        id: 1,
        title: 'Телевизоры',
        name: 'tv',
        details: [
          { id: 1, title: 'Sony', quantity: 213 },
          { id: 2, title: 'Panasonic', quantity: 154 },
        ],
      },
      {
        id: 2,
        title: 'Цифровое ТВ',
        name: 'digitalTv',
        details: [
          { id: 1, title: 'Триколор', quantity: 4 },
          { id: 2, title: 'НТВ+', quantity: 2 },
        ],
      },
    ],
  },
  {
    id: 4,
    img: SpeakerImage,
    title: 'Аудиотехника',
    step: 3,
    // name: 'audio',
    details: [
      {
        id: 1,
        title: 'Домашние кинотеатры',
        details: [
          { id: 1, title: 'Sharp', quantity: 29 },
          { id: 2, title: 'Kenwood', quantity: 43 },
        ],
      },
      {
        id: 2,
        title: 'Магнитафоны',
        details: [
          { id: 1, title: 'Hitachi', quantity: 48 },
          { id: 2, title: 'Teac', quantity: 62 },
        ],
      },
    ],
  },
  {
    id: 5,
    img: PromoImage,
    title: 'Акции',
    step: 3,
    // name: 'promo'
  },
  {
    id: 6,
    img: NewBadgeImage,
    title: 'Новинки',
    step: 3,
    //  name: 'news'
  },
]
