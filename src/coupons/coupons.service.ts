import { BaseCoupon, Coupon } from "./coupon.interface";
import { Coupons } from "./coupons.interface";

let coupons: Coupons = {
  1: {
    id: 1,
    code: "abc",
    description: "Coupon ABC",
    discount: 5,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
  2: {
    id: 2,
    code: "def",
    description: "Coupon DEF",
    discount: 10,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
  3: {
    id: 3,
    code: "ghi",
    description: "Coupon GHI",
    discount: 15,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
  4: {
    id: 4,
    code: "jkl",
    description: "Coupon JKL",
    discount: 20,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
  5: {
    id: 5,
    code: "mno",
    description: "Coupon MNO",
    discount: 25,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
  6: {
    id: 6,
    code: "pqr",
    description: "Coupon PQR",
    discount: 30,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
  7: {
    id: 7,
    code: "stu",
    description: "Coupon STU",
    discount: 35,
    expiresAt: new Date("2021-10-01"),
    isActive: true,
  },
};

export const findAll = async (): Promise<Coupon[]> => Object.values(coupons);

export const find = async (id: number): Promise<Coupon> => coupons[id];

export const create = async (newCoupon: BaseCoupon): Promise<Coupon> => {
  const id = new Date().valueOf();

  coupons[id] = {
    id,
    ...newCoupon,
  };

  return coupons[id];
};

export const update = async (
  id: number,
  couponUpdate: BaseCoupon
): Promise<Coupon | null> => {
  const coupon = await find(id);

  if (!coupon) {
    return null;
  }

  coupons[id] = { id, ...couponUpdate };

  return coupons[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const coupon = await find(id);

  if (!coupon) {
    return null;
  }

  delete coupons[id];
};
