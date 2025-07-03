import {
  roles,
  workAreas,
  userDetails,
  users,
  schedules,
  attendances,
} from "@/schemas";
import { db } from ".";

async function executeSeed() {
  // Seed para roles
  await db.insert(roles).values([{ role: "admin" }, { role: "user" }]);
  console.log("Roles inserted");

  // Seed para work areas
  await db
    .insert(workAreas)
    .values([{ area: "IT" }, { area: "HR" }, { area: "Finanzas" }]);
  console.log("Work areas inserted");

  // Seed para user_details
  await db.insert(userDetails).values([
    {
      firstName: "Juan",
      lastName: "Pérez",
      email: "juan.perez@example.com",
      phone: "123456789",
      idWorkArea: 1,
    },
    {
      firstName: "Ana",
      lastName: "López",
      email: "ana.lopez@example.com",
      phone: "987654321",
      idWorkArea: 2,
    },
    {
      firstName: "Luis",
      lastName: "Martínez",
      email: "luis.martinez@example.com",
      phone: "456789123",
      idWorkArea: 3,
    },
  ]);
  console.log("User details inserted");

  // Seed para users
  await db.insert(users).values([
    {
      dni: "73150987",
      password: "123456",
      idUserDetail: 1,
      idRole: 1,
    },
    {
      dni: "11112222",
      password: "test123",
      idUserDetail: 2,
      idRole: 2,
    },
    {
      dni: "12345678",
      password: "password789",
      idUserDetail: 3,
      idRole: 2,
    },
  ]);
  console.log("Users inserted");

  // Seed para schedules
  await db.insert(schedules).values([
    {
      idUser: 3,
      dayOfWeek: "Lunes",
      startTime: "09:00",
      endTime: "17:00",
    },
    {
      idUser: 2,
      dayOfWeek: "Martes",
      startTime: "08:00",
      endTime: "16:00",
    },
    {
      idUser: 3,
      dayOfWeek: "Miércoles",
      startTime: "10:00",
      endTime: "18:00",
    },
  ]);
  console.log("Schedules inserted");

  // Seed para attendances
  await db.insert(attendances).values([
    {
      idUser: 2,
      date: "2024-09-12",
      time: "09:00",
      status: "on time",
      type: "entry",
    },
    {
      idUser: 2,
      date: "2024-09-12",
      time: "17:00",
      status: "on time",
      type: "exit",
    },
    {
      idUser: 3,
      date: "2024-09-12",
      time: "08:15",
      status: "late",
      type: "entry",
    },
  ]);
  console.log("Attendances inserted");
}

executeSeed().catch((err) => {
  console.error("Seed failed:", err);
});
