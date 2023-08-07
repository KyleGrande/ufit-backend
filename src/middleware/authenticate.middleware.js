const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const bearer = req.headers.bearer || req.headers.Bearer;
    if (!bearer) {
      return res.status(403).json({
        success: false,
        message: "Failure: Invalid token",
        data: null,
      });
    }
    
    console.log("-----------------------------------");
    console.log("bearer", bearer);
    console.log("-----------------------------------");

    jwt.verify(bearer, process.env.SECRET_KEY);

    return next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Failure: Invalid token",
      data: null,
    });
  }
};

module.exports = { authenticate };
