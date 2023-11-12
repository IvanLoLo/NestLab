/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumModule } from './museum/museum.module';
import { ExhibitionModule } from './exhibition/exhibition.module';
import { ArtworkModule } from './artwork/artwork.module';
import { ArtistModule } from './artist/artist.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { MovementModule } from './movement/movement.module';
import { ImageModule } from './image/image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from './museum/museum.entity';
import { ExhibitionEntity } from './exhibition/exhibition.entity';
import { ArtworkEntity } from './artwork/artwork.entity';
import { ArtistEntity } from './artist/artist.entity';
import { SponsorEntity } from './sponsor/sponsor.entity';
import { MovementEntity } from './movement/movement.entity';
import { ImageEntity } from './image/image.entity';

@Module({
  imports: [MuseumModule, ExhibitionModule, ArtworkModule, ArtistModule, SponsorModule, MovementModule, ImageModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'museum',
      entities: [MuseumEntity, ExhibitionEntity, ArtworkEntity, ArtistEntity, SponsorEntity, MovementEntity, ImageEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
