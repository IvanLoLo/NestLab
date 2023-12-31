import { ExhibitionEntity } from '../exhibition/exhibition.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class SponsorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  website: string;

  @OneToOne(() => ExhibitionEntity, exhibition => exhibition.sponsor)
  exhibition: ExhibitionEntity;
}
