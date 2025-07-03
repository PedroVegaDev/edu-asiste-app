import {
  integer,
  pgTable,
  varchar,
  real,
  text,
  time,
  date,
  pgEnum,
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

// Attendances Table
export const attendances = pgTable("attendances", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  idUser: integer("id_user").references(() => users.id),
  date: date("date"),
  time: time("time"),
  status: text("status"),
  type: typeEnum(),
});
