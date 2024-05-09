"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/ListGroupsByGenerationController.ts
var ListGroupsByGenerationController_exports = {};
__export(ListGroupsByGenerationController_exports, {
  ListGroupsByGenerationController: () => ListGroupsByGenerationController
});
module.exports = __toCommonJS(ListGroupsByGenerationController_exports);

// src/prisma/index.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/ListGroupsByGenerationService.ts
var ListGroupsByGenerationService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ generation }) {
      if (!generation) {
        throw new Error("Solicita\xE7\xE3o inv\xE1lida");
      }
      const groups = yield prisma_default.group.findMany({
        where: {
          generation
        },
        select: {
          id: true,
          name: true,
          image_url: true
        }
      });
      return groups;
    });
  }
};

// src/controllers/ListGroupsByGenerationController.ts
var ListGroupsByGenerationController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const { generation } = request.query;
      const listGroupsByGenerationService = new ListGroupsByGenerationService();
      const groups = yield listGroupsByGenerationService.execute({ generation });
      reply.send(groups);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListGroupsByGenerationController
});
