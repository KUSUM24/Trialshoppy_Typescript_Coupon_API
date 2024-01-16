import express, { Request, Response } from "express";

import * as couponsService from "./coupons.service";
import { BaseCoupon, Coupon } from "./coupon.interface";

export const couponsRouter = express.Router();

couponsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const coupons: Coupon[] = await couponsService.findAll();

    res.status(200).send(coupons);
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).send(errorMessage);
  }
});

couponsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const coupon: Coupon = await couponsService.find(id);

    if (coupon) {
      return res.status(200).send(coupon);
    }

    res.status(404).send("coupon not found");
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).send(errorMessage);
  }
});

couponsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const coupon: BaseCoupon = req.body;

    const newCoupon = await couponsService.create(coupon);

    res.status(201).json(newCoupon);
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).send(errorMessage);
  }
});

couponsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const couponUpdate: Coupon = req.body;

    const existingCoupon: Coupon = await couponsService.find(id);

    if (existingCoupon) {
      const updatedCoupon = await couponsService.update(id, couponUpdate);
      return res.status(200).json(updatedCoupon);
    }

    const newCoupon = await couponsService.create(couponUpdate);

    res.status(201).json(newCoupon);
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).send(errorMessage);
  }
});

couponsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await couponsService.remove(id);

    res.sendStatus(204);
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).send(errorMessage);
  }
});
