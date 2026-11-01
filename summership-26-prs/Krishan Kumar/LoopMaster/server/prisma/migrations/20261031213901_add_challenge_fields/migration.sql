/*
  Warnings:

  - Added the required column `expectedOutput` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hint` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Challenge" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "starterCode" TEXT,
    "expectedOutput" TEXT NOT NULL,
    "hint" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Challenge" ("createdAt", "description", "difficulty", "id", "solution", "starterCode", "title", "topic") SELECT "createdAt", "description", "difficulty", "id", "solution", "starterCode", "title", "topic" FROM "Challenge";
DROP TABLE "Challenge";
ALTER TABLE "new_Challenge" RENAME TO "Challenge";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
