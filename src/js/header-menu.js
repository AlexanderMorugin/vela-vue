import CatalogImage from '../img/img-catalog.svg'
import PromoImage from '../img/img-promo.svg'
import HotOfferImage from '../img/img-hot-offer.svg'
import GiftImage from '../img/img-gift.svg'
import EventImage from '../img/img-event.svg'
import BrandsImage from '../img/img-brands.svg'
import { headerCatalogMenu } from './header-catalog-menu'

export const headerMenu = {
  id: 1,
  title: 'Каталог',
  // name: 'headerMenu',
  step: 1,
  details: [
    {
      id: 0,
      img: CatalogImage,
      title: 'Каталог',
      // name: 'catalog',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 1,
      img: PromoImage,
      title: 'Акции',
      // name: 'promo'
      step: 2,
    },
    {
      id: 2,
      img: HotOfferImage,
      title: 'Горячее предложение',
      // name: 'hot',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 3,
      img: GiftImage,
      title: 'Подарочные наборы',
      // name: 'gift',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 4,
      img: EventImage,
      title: 'События',
      // name: 'event',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 5,
      img: BrandsImage,
      title: 'Наши бренды',
      step: 2,
      // name: 'brands',
    },
  ],
}
