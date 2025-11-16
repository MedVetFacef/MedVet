import { clinicService } from "../services/clinicService.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandle.js";

export const clinicControllers = {
  create: catchAsyncErrors(async (req, res, next) => {
    const clinic = await clinicService.create(req.body);
    res.status(201).json(clinic);
  }),

  list: catchAsyncErrors(async (req, res, next) => {
    const clinics = await clinicService.list();
    res.status(200).json(clinics);
  }),

  getById: catchAsyncErrors(async (req, res, next) => {
    const clinic = await clinicService.getById(req.params.id);
    
    if (!clinic) {
      return next(new ErrorHandler("Clínica não encontrada", 404));
    }
    
    res.status(200).json(clinic);
  }),

  update: catchAsyncErrors(async (req, res, next) => {
    const clinic = await clinicService.update(req.params.id, req.body);
    res.status(200).json(clinic);
  }),

  delete: catchAsyncErrors(async (req, res, next) => {
    await clinicService.delete(req.params.id);
    res.status(200).json({ message: "Clínica deletada com sucesso" });
  })
};
