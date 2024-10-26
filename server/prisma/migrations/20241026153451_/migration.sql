/*
  Warnings:

  - A unique constraint covering the columns `[authorId,name]` on the table `lists` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "lists_authorId_name_key" ON "lists"("authorId", "name");
