import express from "express";
const router = express.Router();
export default router;

import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

router.get("/", async (req, res) => {
  res.send(await getEmployees());
});

router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).send("Request body is required");
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary)
    return res.status(400).send("Request body needs name, birthday, salary");

  const employee = await createEmployee({ name, birthday, salary });
  res.status(201).send(employee);
});

router.get("/:id", async (req, res) => {
  const employee = await getEmployee(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.send(employee);
});

router.delete("/:id", async (req, res) => {
  const employee = await deleteEmployee(req.params.id);
  if (!employee) return res.status(404).send("Employee not found");
  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  if (!req.body) return res.status(400).send("Request body is required");
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary)
    return res
      .status(400)
      .send("Request body needs name, birthday, and salary");

  const employee = await updateEmployee({
    id: req.params.id,
    name,
    birthday,
    salary,
  });
  if (!employee) return res.status(404).send("Employee not found");
  res.send(employee);
});
