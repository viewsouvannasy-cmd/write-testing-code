import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../index.js";

describe("GET / ", () => {
  it("it return ok and msg", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true, msg: "hello" });
  });
});

describe("POST /login", () => {
  it("Response Bed Request When Missing Name And Age", async () => {
    const res = await request(app).post("/login").send({ name: "", age: "" });
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ ok: false, msg: "Please Provide All Requries" });
  });

  it("Response Bed Request When Missing Name", async () => {
    const res = await request(app).post("/login").send({ name: "", age: 18 });
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ ok: false, msg: "Please Provide All Requries" });
  });

  it("Response Bed Request When Missing Age", async () => {
    const res = await request(app)
      .post("/login")
      .send({ name: "view", age: "" });
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ ok: false, msg: "Please Provide All Requries" });
  });

  it("Response Bed Request When Age Is Not Allow", async () => {
    const res = await request(app)
      .post("/login")
      .send({ name: "view", age: 12 });
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({ ok: false, msg: "You Too Young" });
  });

  it("Response Bed Request When Name Length  Is Less Then 3", async () => {
    const res = await request(app).post("/login").send({ name: "vi", age: 20 });
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({
      ok: false,
      msg: "Name Length Should More Then 3",
    });
  });

  it("Response Bed Request When Name Length  Is More Then 50", async () => {
    const res = await request(app).post("/login").send({
      name: "vsdfsldfjsdfslkdjfsdlkfjsdlkfsjdflskdjflsfdjsklfsjdflsji",
      age: 20,
    });
    expect(res.statusCode).toBe(401);
    expect(res.body).toEqual({
      ok: false,
      msg: "Name Length Should Less Then 50",
    });
  });

  it("Response Welcome When Pass All Validator", async () => {
    const res = await request(app).post("/login").send({
      name: "view",
      age: 20,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      ok: true,
      msg: "Welcome",
    });
  });
});
