"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluation_controller_1 = require("../controllers/evaluation_controller");
var main_1 = require("../main");
function initRoutes() {
    main_1.default.router.get("/evaluation/:anime_id", evaluation_controller_1.getEvaluation);
    main_1.default.router.post("/evaluate", evaluation_controller_1.evaluate);
}
exports.default = initRoutes;
