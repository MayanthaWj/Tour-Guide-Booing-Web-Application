import express from "express";
import {
  createTourGuide,
  deleteTourGuide,
  getAllTourGuide,
  getTourGuide,
  updateTourGuide,
  countByCity,
  countByProvince,
} from "../controllers/tourGuide.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREAT
router.post("/", verifyAdmin, createTourGuide);

//UPDATE
router.put("/:id", verifyAdmin, updateTourGuide);

//DELETE
router.delete("/:id", verifyAdmin, deleteTourGuide);

//READ
router.get("/", getAllTourGuide);
router.get("/find/:id", getTourGuide);

router.get("/countByCity", countByCity);
router.get("/countByProvince", countByProvince);

export default router;
