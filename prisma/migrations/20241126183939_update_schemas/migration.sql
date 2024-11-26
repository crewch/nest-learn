/*
  Warnings:

  - Made the column `updatedAt` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" SET NOT NULL;
