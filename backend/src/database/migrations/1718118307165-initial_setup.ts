import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSetup1718118307165 implements MigrationInterface {
  name = 'InitialSetup1718118307165';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdated" TIMESTAMP NOT NULL DEFAULT now(), "title" text NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `INSERT INTO "task" ("id", "createdOn", "lastUpdated", "title") VALUES ('f7b3b3b4-4b1b-4b1b-8b1b-1b1b1b1b1b1b', '2021-10-11 00:00:00', '2021-10-11 00:00:00', 'First Task')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "task"`);
  }
}
