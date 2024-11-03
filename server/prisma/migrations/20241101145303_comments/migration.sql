/*
  Warnings:

  - Added the required column `filmId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "filmId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
