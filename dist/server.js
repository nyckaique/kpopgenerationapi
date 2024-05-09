"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

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

// src/services/ListGroupsService.ts
var ListGroupsService = class {
  execute() {
    return __async(this, null, function* () {
      const groups = yield prisma_default.group.findMany({
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

// src/controllers/ListGroupsController.ts
var ListGroupsController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const listGroupsService = new ListGroupsService();
      const groups = yield listGroupsService.execute();
      reply.send(groups);
    });
  }
};

// src/services/DeleteGroupService.ts
var DeleteGroupService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ id }) {
      if (!id) {
        throw new Error("Solicita\xE7\xE3o inv\xE1lida");
      }
      const findGroup = yield prisma_default.group.findFirst({
        where: {
          id
        }
      });
      if (!findGroup) {
        throw new Error("Grupo n\xE3o existe");
      }
      yield prisma_default.group.delete({
        where: {
          id: findGroup.id
        }
      });
      return { message: "Deletado com sucesso" };
    });
  }
};

// src/controllers/DeleteGroupController.ts
var DeleteGroupController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const { id } = request.query;
      const groupService = new DeleteGroupService();
      const group = yield groupService.execute({ id });
      reply.send(group);
    });
  }
};

// src/services/UpdateGroupService.ts
var UpdateGroupService = class {
  execute(_0) {
    return __async(this, arguments, function* ({
      id,
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
      if (!id) {
        throw new Error("Solicita\xE7\xE3o inv\xE1lida");
      }
      const findGroup = yield prisma_default.group.findFirst({
        where: {
          id
        }
      });
      if (!findGroup) {
        throw new Error("Grupo n\xE3o existe");
      }
      const group = yield prisma_default.group.update({
        where: {
          id: findGroup.id
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
          image_url
        }
      });
      return group;
    });
  }
};

// src/controllers/UpdateGroupController.ts
var UpdateGroupController = class {
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
      const { id } = request.query;
      const groupService = new UpdateGroupService();
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
        image_url
      });
      reply.send(group);
    });
  }
};

// src/services/ListGroupByIdService.ts
var ListGroupByIdService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ id }) {
      if (!id) {
        throw new Error("Solicita\xE7\xE3o inv\xE1lida");
      }
      const group = yield prisma_default.group.findFirst({
        where: {
          id
        }
      });
      return group;
    });
  }
};

// src/controllers/ListGroupByIdController.ts
var ListGroupByIdController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const { id } = request.query;
      const listGroupByIdService = new ListGroupByIdService();
      const group = yield listGroupByIdService.execute({ id });
      reply.send(group);
    });
  }
};

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

// src/routes.ts
function routes(fastify, options) {
  return __async(this, null, function* () {
    fastify.post(
      "/group",
      (request, reply) => __async(this, null, function* () {
        return new CreateGroupController().handle(request, reply);
      })
    );
    fastify.get(
      "/groups",
      (request, reply) => __async(this, null, function* () {
        return new ListGroupsController().handle(request, reply);
      })
    );
    fastify.get(
      "/groups/generation",
      (request, reply) => __async(this, null, function* () {
        return new ListGroupsByGenerationController().handle(request, reply);
      })
    );
    fastify.get(
      "/group",
      (request, reply) => __async(this, null, function* () {
        return new ListGroupByIdController().handle(request, reply);
      })
    );
    fastify.delete(
      "/group",
      (request, reply) => __async(this, null, function* () {
        return new DeleteGroupController().handle(request, reply);
      })
    );
    fastify.put(
      "/group",
      (request, reply) => __async(this, null, function* () {
        return new UpdateGroupController().handle(request, reply);
      })
    );
  });
}

// src/server.ts
var app = (0, import_fastify.default)({ logger: true });
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});
var start = () => __async(exports, null, function* () {
  yield app.register(import_cors.default);
  yield app.register(routes);
  try {
    yield app.listen({
      host: "0.0.0.0",
      port: process.env.PORT ? Number(process.env.PORT) : 3333
    });
  } catch (err) {
    process.exit(1);
  }
});
start();
