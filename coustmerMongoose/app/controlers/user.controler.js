const UserModel = require("../../database/user.module");

class User {
  static showAll = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.render("showall", {
        pageTitle: "All User Data",
        users,
        hasUsers: users.length,
      });
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };
  static add = (req, res) => {
    res.render("add", {
      pageTitle: "add User Data",
    });
  };
  static addLogic = async (req, res) => {
    try {
      const user = new UserModel(req.body);
      await user.save();
      res.redirect("/");
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };

  static edit = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.render("edit", { user, pageTitle: "Edit User Data" });
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };
  static editLogic = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect(`/singl/${user._id}`);
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
      console.log(e.message);
    }
  };

  static singl = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.render("singl", { user, pageTitle: "Single User Data" });
      console.log(user);
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.redirect("/");
    } catch (e) {
      res.render("err404", {
        pageTitle: "Error in Database",
        errMassge: e.message,
      });
    }
  };
  static tran = async (req, res) => {
    // try {
    //   const user = await UserModel.findByIdAndDelete(req.params.id);
    //   res.redirect("/");
    // } catch (e) {
    //   res.render("err404", {
    //     pageTitle: "Error in Database",
    //     errMassge: e.message,
    //   });
    // }
    res.render("tran", {
      Tran: [{ Transaction: "add" }, { Transaction: "withdraw" }],
    });
  };
}

module.exports = User;
