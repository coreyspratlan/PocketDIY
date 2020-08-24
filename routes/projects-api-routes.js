var db = require("../models");

// Routes
// GET route ===================================================
module.exports = function(app) {
  app.get("/api/projects", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    
    db.Project.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // POST route ================================================
  app.post("/api/projects", function(req, res) {
    // Create a new post object
    db.Projects.create({
      shape: req.body.shape,
      width: req.body.width,
      height: req.body.height,
      depth: req.body.depth,
      radius: req.body.radius,
      area: req.body.radius,
      parimeter: req.body.parameter,
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
    db.Projects.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // PUT route =================================================
  app.put("/api/projects", function(req, res) {
    db.Projects.update(req.body, {
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
