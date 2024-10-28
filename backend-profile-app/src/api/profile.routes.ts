// src/api/profile.routes.ts
import { Router } from "express";
import ProfileController from "../controllers/profile.controller";

const router = Router();

router.post("/", ProfileController.createProfile);
router.get("/", ProfileController.getProfiles);
router.get("/:id", ProfileController.getProfileById);
router.put("/:id", ProfileController.updateProfile);
router.delete("/:id", ProfileController.deleteProfile);

export default router;
