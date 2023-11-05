/*
  Warnings:

  - You are about to drop the column `url` on the `gambar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gambar" DROP COLUMN "url",
ADD COLUMN     "image" TEXT;
