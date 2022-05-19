const dbCon = require("../../database/database");
const ObjectId = require("mongodb").ObjectId;
class User {
  static home = (req, res) => {
    dbCon((err, db) => {
      if (err) return res.send(err);
      db.collection("data")
        .find()
        .toArray((err, users) => {
          if (err) return res.send(err);
          res.render("home", {
            users,
            hasUsers: users.length,
            pagetTitle: "add new user",
          });
        });
    });
  };
  static add = (req, res) => {
    res.render("add", { pagetTitle: "add new user" });
  };
  static addLogic = (req, res) => {
    const user = req.body;
    // res.send(req.body);
    dbCon((err, db) => {
      if (err) res.send(err);
      db.collection("data")
        .insertOne(user)
        .then(() => res.redirect("/"))
        .catch((e) => res.send(e));
    });
  };

  static edit = (req, res) => {
    dbCon((err, db) => {
      if (err) return res.send(err);
      db.collection("data").findOne(
        { _id: new ObjectId(req.params.id) },
        (err, user) => {
          if (err) return res, send(err);
          res.render("edite", { user });
        }
      );
    });
  };
  static editLogic = (req, res) => {
    dbCon((err, db) => {
      if (err) return res.send(err);
      db.collection("data")
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        .then(() => {
          res.redirect(`/single/${req.params.id}`);
        })
        .catch((e) => {
          res.render("error404", {
            pagetTitle: "err in update",
            errMass: e.message,
          });
        });
    });
  };

  static single = (req, res) => {
    dbCon((err, db) => {
      if (err) res.send(err);
      db.collection("data").findOne(
        { _id: new ObjectId(req.params.id) },
        (error, user) => {
          if (error) res.send(error);
          console.log(user);
          res.render("single", {
            pagetTitle: "add new user",
            user,
          });
        }
      );
    });
  };
  static delete = (req, res) => {
    dbCon((err, db) => {
      if (err) return res.send(err);
      db.collection("data")
        .deleteOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        .then(() => {
          res.redirect(`/`);
        })
        .catch((e) => {
          res.render("error404", {
            pagetTitle: "err in delete",
            errMass: e.message,
          });
        });
    });
  };
}
module.exports = User;
