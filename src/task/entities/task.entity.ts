import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class EntityTask {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date: string;

    @Column()
    hour: string;

    @Column()
    state: string;

    @Column()
    createAt: string;

    @Column()
    createBy: string;

    @Column()
    idinstitucion: string

}
