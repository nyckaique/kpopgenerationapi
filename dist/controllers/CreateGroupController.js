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

// src/controllers/CreateGroupController.ts
var CreateGroupController_exports = {};
__export(CreateGroupController_exports, {
  CreateGroupController: () => CreateGroupController
});
module.exports = __toCommonJS(CreateGroupController_exports);

// src/prisma/index.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/CreateGroupService.ts
var CreateGroupService = class {
  execute(_0) {
    return __async(this, arguments, function* ({
      name,
      description,
      members,
      generation,
      debut_date,
      status,
      company,
      spotify,
      image_url
    }) {
      if (!name || !description || !members || !generation || !debut_date || !status || !company || !spotify || !image_url) {
        throw new Error("Preencha todos os campos");
      }
      const group = yield prisma_default.group.create({
        data: {
          name,
          description,
          members,
          generation,
          debut_date,
          status,
          company,
          spotify,
          image_url
        }
      });
      return group;
    });
  }
};

// src/controllers/CreateGroupController.ts
var CreateGroupController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const {
        name,
        description,
        members,
        generation,
        debut_date,
        status,
        company,
        spotify,
        image_url
      } = request.body;
      const groupService = new CreateGroupService();
      const group = yield groupService.execute({
        name,
        description,
        members,
        generation,
        debut_date,
        status,
        company,
        spotify,
        image_url
      });
      reply.send(group);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateGroupController
});
