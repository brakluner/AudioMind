const router = require("express").Router();
const booksController = require("../../controllers/filesController");

// Matches with "/files"
router.route("/")
  .get(booksController.findAll);
  
  

// Matches with "/files/:filename"
router
  .route("/:filename")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
