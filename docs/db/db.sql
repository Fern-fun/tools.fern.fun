CREATE TABLE "users" (
  "id" uuid,
  "username" varchar,
  "email" varchar,
  "password" varchar,
  "role_id" int,
  "modified_at" timestamp,
  "created_at" timestamp
);

CREATE TABLE "roles" (
  "id" int,
  "name" varchar,
  "permissions" json,
  "isAdmin" boolean,
  "modified_at" timestamp,
  "created_at" timestamp
);

CREATE TABLE "articles" (
  "id" uuid,
  "author" uuid,
  "title" varchar,
  "content" varchar,
  "modified_at" timestamp,
  "created_at" timestamp
);

ALTER TABLE "users" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id");

ALTER TABLE "articles" ADD FOREIGN KEY ("author") REFERENCES "users" ("id");
