/* eslint-disable prettier/prettier */
import { ArtistEntity } from 'src/artist/artist.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class MovementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  countryOfOrigin: string;

  @ManyToMany(() => ArtistEntity, artist => artist.movements)
  @JoinTable()
  artists: ArtistEntity[];
}
