const companiesController = require("../Controller/empresasControllers")
const express = require("express");
const router = express.Router();

router.get("/allCompanies", companiesController.findCompanies);

router.post("/addCompany", companiesController.addCompany);

router.patch("/:id", companiesController.updateCompany);

router.delete("/:id", companiesController.deleteCompany);

router.get("/search", companiesController.findCompanyByLocation);

module.exports = router;