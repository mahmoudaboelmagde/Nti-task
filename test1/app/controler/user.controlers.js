const userModel = require("../database/models/user.model");
class User {
  static addEmail = async (req, res) => {
    try {
      const user = new userModel(req.body);
      //   res.send(user);
      await user.save();
      res.status(200).send({
        apiStatus: true,
        data: true,
        message: "use added successfully",
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "user adding filed",
      });
    }
  };
}
module.exports = User;
