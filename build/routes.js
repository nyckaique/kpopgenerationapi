"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
// import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
const CreateGroupController_1 = require("./controllers/CreateGroupController");
const ListGroupsController_1 = require("./controllers/ListGroupsController");
const DeleteGroupController_1 = require("./controllers/DeleteGroupController");
const UpdateGroupController_1 = require("./controllers/UpdateGroupController");
const ListGroupByIdController_1 = require("./controllers/ListGroupByIdController");
const ListGroupsByGenerationController_1 = require("./controllers/ListGroupsByGenerationController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post("/group", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateGroupController_1.CreateGroupController().handle(request, reply);
        }));
        fastify.get("/groups", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListGroupsController_1.ListGroupsController().handle(request, reply);
        }));
        fastify.get("/groups/generation", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListGroupsByGenerationController_1.ListGroupsByGenerationController().handle(request, reply);
        }));
        fastify.get("/group", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListGroupByIdController_1.ListGroupByIdController().handle(request, reply);
        }));
        fastify.delete("/group", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new DeleteGroupController_1.DeleteGroupController().handle(request, reply);
        }));
        fastify.put("/group", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new UpdateGroupController_1.UpdateGroupController().handle(request, reply);
        }));
    });
}
exports.routes = routes;
