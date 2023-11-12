import { Module } from '@nestjs/common';
import { MuseumArtworkService } from './museum-artwork.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from 'src/museum/museum.entity';

@Module({
  providers: [MuseumArtworkService],
  imports: [TypeOrmModule.forFeature([MuseumEntity])],
})
export class MuseumArtworkModule {}
