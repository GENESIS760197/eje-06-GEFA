import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { MateriaModule } from './materia/materia.module';
import { DocenteModule } from './docente/docente.module';

@Module({
  imports: [AlumnoModule, MateriaModule, DocenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
