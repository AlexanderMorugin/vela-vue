import CatalogImage from '../img/img-catalog.svg'
import PromoImage from '../img/img-promo.svg'
import HotOfferImage from '../img/img-hot-offer.svg'
import GiftImage from '../img/img-gift.svg'
import EventImage from '../img/img-event.svg'
import BrandsImage from '../img/img-brands.svg'
import { headerCatalogMenu } from './header-catalog-menu'

export const headerMenu = {
  id: 'Head-1',
  text: 'Каталог',
  // collection: 'headerMenu',
  category: [
    {
      id: 'Catalog-0',
      // collection: 'headerMenu',
      img: CatalogImage,
      text: 'Каталог',
      category: headerCatalogMenu,
    },
    { id: 'Catalog-1', collection: 'headerMenu', img: PromoImage, text: 'Акции' },
    {
      id: 'Catalog-2',
      // collection: 'headerMenu',
      img: HotOfferImage,
      text: 'Горячее предложение',
      category: headerCatalogMenu,
    },
    {
      id: 'Catalog-3',
      // collection: 'headerMenu',
      img: GiftImage,
      text: 'Подарочные наборы',
      category: headerCatalogMenu,
    },
    {
      id: 'Catalog-4',
      // collection: 'headerMenu',
      img: EventImage,
      text: 'События',
      category: headerCatalogMenu,
    },
    {
      id: 'Catalog-5',
      // collection: 'headerMenu',
      img: BrandsImage,
      text: 'Наши бренды',
    },
  ],
}
