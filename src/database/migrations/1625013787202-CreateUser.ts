import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1625013787202 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: "users",

        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false
          },
          {
            name: "lastname",
            type: "varchar",
            isNullable: false
          },
          {
            name: "nickname",
            type: "varchar",
            isNullable: false,
            isUnique: true,
            length: "30"
          },
          {
            name: "address",
            type: "varchar",
            isNullable: false
          },
          {
            name: "bio",
            type: "varchar",
            length: "100",
            isNullable: true
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase("users");
  }

}
