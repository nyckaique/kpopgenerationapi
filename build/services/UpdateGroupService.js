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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UpdateGroupService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, name, description, members, generation, debut_date, status, company, spotify, image_url, }) {
            if (!id) {
                throw new Error("Solicitação inválida");
            }
            const findGroup = yield prisma_1.default.group.findFirst({
                where: {
                    id: id,
                },
            });
            if (!findGroup) {
                throw new Error("Grupo não existe");
            }
            const group = yield prisma_1.default.group.update({
                where: {
                    id: findGroup.id,
                },
                data: {
                    name,
                    description,
                    members,
                    generation,
                    debut_date,
                    status,
                    company,
                    spotify,
                    image_url,
                },
            });
            return group;
        });
    }
}
exports.UpdateGroupService = UpdateGroupService;
