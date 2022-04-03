import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EventController } from "../event.controller";
import { EventService } from "../event.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  alertSuppression: "true",
  changeNumber: "exampleChangeNumber",
  createdAt: new Date(),
  createWebex: "true",
  description: "exampleDescription",
  end: new Date(),
  id: "exampleId",
  start: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
  webexMeetingInfo: "exampleWebexMeetingInfo",
};
const CREATE_RESULT = {
  alertSuppression: "true",
  changeNumber: "exampleChangeNumber",
  createdAt: new Date(),
  createWebex: "true",
  description: "exampleDescription",
  end: new Date(),
  id: "exampleId",
  start: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
  webexMeetingInfo: "exampleWebexMeetingInfo",
};
const FIND_MANY_RESULT = [
  {
    alertSuppression: "true",
    changeNumber: "exampleChangeNumber",
    createdAt: new Date(),
    createWebex: "true",
    description: "exampleDescription",
    end: new Date(),
    id: "exampleId",
    start: new Date(),
    title: "exampleTitle",
    updatedAt: new Date(),
    webexMeetingInfo: "exampleWebexMeetingInfo",
  },
];
const FIND_ONE_RESULT = {
  alertSuppression: "true",
  changeNumber: "exampleChangeNumber",
  createdAt: new Date(),
  createWebex: "true",
  description: "exampleDescription",
  end: new Date(),
  id: "exampleId",
  start: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
  webexMeetingInfo: "exampleWebexMeetingInfo",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Event", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventService,
          useValue: service,
        },
      ],
      controllers: [EventController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /events", async () => {
    await request(app.getHttpServer())
      .post("/events")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        end: CREATE_RESULT.end.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /events", async () => {
    await request(app.getHttpServer())
      .get("/events")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          end: FIND_MANY_RESULT[0].end.toISOString(),
          start: FIND_MANY_RESULT[0].start.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /events/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /events/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        end: FIND_ONE_RESULT.end.toISOString(),
        start: FIND_ONE_RESULT.start.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
