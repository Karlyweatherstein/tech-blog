const router = require("express").Router();

const homeRoutes = require("./home-routes.js");

// const apiRoutes = require("controllers/api/index.js");

router.use("/", homeRoutes);
// router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
