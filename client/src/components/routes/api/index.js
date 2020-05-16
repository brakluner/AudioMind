const router = require("express").Router();
const fileRoutes = require("./files");

// Book routes
router.use("/files", fileRoutes);

module.exports = router;