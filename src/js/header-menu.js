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
  step: 1,
  details: [
    {
      id: 0,
      img: CatalogImage,
      title: 'Каталог',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 1,
      img: PromoImage,
      title: 'Акции',
      step: 2,
    },
    {
      id: 2,
      img: HotOfferImage,
      title: 'Горячее предложение',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 3,
      img: GiftImage,
      title: 'Подарочные наборы',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 4,
      img: EventImage,
      title: 'События',
      step: 2,
      details: headerCatalogMenu,
    },
    {
      id: 5,
      img: BrandsImage,
      title: 'Наши бренды',
      step: 2,
    },
  ],
}
