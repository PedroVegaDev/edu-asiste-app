import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  text,
  time,
  date,
  pgEnum,
  pgView,
} from "drizzle-orm/pg-core";

// Roles Table
export const roles = pgTable("roles", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  role: text("role"),
});

// Work Areas Table
export const workAreas = pgTable("work_areas", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  area: text("area"),
});

// User Details Table
export const userDetails = pgTable("user_details", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email"),
  phone: text("phone"),
  idWorkArea: integer("id_work_area").references(() => workAreas.id),
});

// Users Table
export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  dni: text("dni"),
  password: text("password"),
  idUserDetail: integer("id_user_detail").references(() => userDetails.id),
  idRole: integer("id_role").references(() => roles.id),
});

// Schedules Table
export const schedules = pgTable("schedules", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  idUser: integer("id_user").references(() => users.id),
  dayOfWeek: text("day_of_week"),
  startTime: time("start_time"),
  endTime: time("end_time"),
});

export const typeEnum = pgEnum("type", ["entry", "exit"]);
export const statusEnum = pgEnum("status", ["on time", "late"]);

// Attendances Table
export const attendances = pgTable("attendances", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  idUser: integer("id_user").references(() => users.id),
  date: date("date"),
  time: time("time"),
  status: statusEnum(),
  type: typeEnum(),
});

export const viewAttendanceList = pgView("view_attendance_list", {
  id: integer(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  date: date(),
  time: time(),
  dni: text(),
  email: text(),
}).as(
  sql`SELECT attendances.id, user_details.first_name, user_details.last_name, attendances.date, attendances."time", users.dni, user_details.email FROM attendances JOIN users ON attendances.id_user = users.id JOIN user_details ON users.id_user_detail = user_details.id`
);

export const viewLogin = pgView("view_login", {
  id: integer(),
  dni: text(),
  password: text(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  role: text(),
}).as(
  sql`SELECT users.id, users.dni, users.password, user_details.first_name, user_details.last_name, roles.role FROM users JOIN roles ON users.id_role = roles.id JOIN user_details ON users.id_user_detail = user_details.id`
);

export type SelectViewLogin = typeof viewLogin.$inferSelect;
export type SelectViewAttendanceList = typeof viewAttendanceList.$inferSelect;
