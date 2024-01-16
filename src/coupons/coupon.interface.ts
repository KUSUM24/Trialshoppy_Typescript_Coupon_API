export interface BaseCoupon {
  code: string;
  description: string;
  discount: number;
  expiresAt: Date;
  isActive: boolean;
}
export interface Coupon extends BaseCoupon {
  id: number;
}
// Path: src/coupons/coupon.model.ts
