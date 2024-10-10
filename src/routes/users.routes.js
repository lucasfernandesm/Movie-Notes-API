

const { Router } = require("express");

const usersRoutes = Router();


const multer = require("multer");
const uploadConfig = require("../configs/upload");
const upload = multer(uploadConfig.MULTER);


const UsersController = require("../controllers/UsersController");

const UserAvatarController = require("../controllers/UserAvatarController");

const userController = new UsersController();

const userAvatarController = new UserAvatarController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;