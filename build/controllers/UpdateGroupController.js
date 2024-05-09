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
exports.UpdateGroupController = void 0;
const UpdateGroupService_1 = require("../services/UpdateGroupService");
class UpdateGroupController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, members, generation, debut_date, status, company, spotify, image_url, } = request.body;
            const { id } = request.query;
            const groupService = new UpdateGroupService_1.UpdateGroupService();
            const group = yield groupService.execute({
                id,
                name,
                description,
                members,
                generation,
                debut_date,
                status,
                company,
                spotify,
                image_url,
            });
            reply.send(group);
        });
    }
}
exports.UpdateGroupController = UpdateGroupController;
