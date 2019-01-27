export type Phone = {
  id: number,
  name: string,
  price: number,
  image: string,
};

export type WishListPhone = {
  ...Phone,
  time: Date,
};

export type OrderPhone = {
  ...Phone,
  count: number,
  selected: number,
};

export type CatalogProps = {
  phones: Array<Phone>,
  onClickToWishList: Function,
  wishList: Array<WishListPhone>,
  openOrderDialog: Function,
};
