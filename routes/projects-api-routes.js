var db = require("../models");

// Routes
// GET route ===================================================
module.exports = function(app) {
  app.get("/api/projects", function(req, res) {
    db.Project.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // POST route ================================================
  app.post("/api/projects", function(req, res) {
    db.Project.create({
      name: req.body.name,
      shape: req.body.shape,
      width: req.body.width,
      height: req.body.height,
      depth: req.body.depth,
      radius: req.body.radius,
      area: req.body.area,
      perimeter: req.body.perimeter,
      volume: req.body.volume,
      unit: req.body.unit,
      UserId: req.user.id
    })
      .then(function(dbProject) {
        res.json(dbProject);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route ===============================================
  app.delete("/api/projects/:id", function(req, res) {
    db.Project.destroy({
      where: {
        uuid: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // PUT route =================================================
  app.put("/api/projects", function(req, res) {
    db.Project.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbProject) {
        res.json(dbProject);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
