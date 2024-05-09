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
exports.ListGroupsByGenerationController = void 0;
const ListGroupsByGenerationService_1 = require("../services/ListGroupsByGenerationService");
class ListGroupsByGenerationController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { generation } = request.query;
            const listGroupsByGenerationService = new ListGroupsByGenerationService_1.ListGroupsByGenerationService();
            const groups = yield listGroupsByGenerationService.execute({ generation });
            reply.send(groups);
        });
    }
}
exports.ListGroupsByGenerationController = ListGroupsByGenerationController;
