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
exports.ListGroupByIdController = void 0;
const ListGroupByIdService_1 = require("../services/ListGroupByIdService");
class ListGroupByIdController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.query;
            const listGroupByIdService = new ListGroupByIdService_1.ListGroupByIdService();
            const group = yield listGroupByIdService.execute({ id });
            reply.send(group);
        });
    }
}
exports.ListGroupByIdController = ListGroupByIdController;
