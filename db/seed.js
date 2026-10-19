import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: "Ada Lovelace", birthday: "1990-12-10", salary: 95000 },
    { name: "Alan Turing", birthday: "1988-06-23", salary: 105000 },
    { name: "Brandon Gilligan", birthday: "1994-03-30", salary: 95000 },
    { name: "Peter VanWagenen", birthday: "1993-10-18", salary: 105000 },
    { name: "Neil Fabrizio", birthday: "1997-10-16", salary: 95000 },
    { name: "Shane Young", birthday: "1996-10-24", salary: 105000 },
    { name: "Adrianna Rocca-Weatherby", birthday: "1995-07-06", salary: 95000 },
    { name: "Celeste Gilligan", birthday: "1972-11-30", salary: 105000 },
    { name: "Nathan Fielder", birthday: "1980-12-10", salary: 95000 },
    { name: "Hideo Kojima", birthday: "1970-01-10", salary: 105000 },
  ];
  for (const employee of employees) {
    await createEmployee(employee);
  }
}
