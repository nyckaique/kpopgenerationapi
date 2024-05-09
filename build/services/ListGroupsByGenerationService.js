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
exports.ListGroupsByGenerationService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ListGroupsByGenerationService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ generation }) {
            if (!generation) {
                throw new Error("Solicitação inválida");
            }
            const groups = yield prisma_1.default.group.findMany({
                where: {
                    generation: generation,
                },
                select: {
                    id: true,
                    name: true,
                    image_url: true,
                },
            });
            return groups;
        });
    }
}
exports.ListGroupsByGenerationService = ListGroupsByGenerationService;
