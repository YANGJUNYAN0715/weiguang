const dbModel = require("../lib/db");

exports.insertWall = async (req, res) => {
  let data = req.body;
  await dbModel
    .insertWall(
      data.type,
      data.message,
      data.name,
      data.userId,
      data.moment,
      data.label,
      data.color,
      data.imgurl
    )
    .then((result) => {
      res.send({
        code: 200,
        message: result,
      });
    });
};
