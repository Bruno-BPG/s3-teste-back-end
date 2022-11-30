import { MigrationInterface, QueryRunner } from "typeorm";

export class nomeDaMigration1669844544707 implements MigrationInterface {
    name = 'nomeDaMigration1669844544707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contatos" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "clienteeId" uuid, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_273b38561a7065c9349ddd4b6e0" FOREIGN KEY ("clienteeId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_273b38561a7065c9349ddd4b6e0"`);
        await queryRunner.query(`DROP TABLE "contatos"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
