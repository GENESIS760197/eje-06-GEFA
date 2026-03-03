import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AlumnoService } from './alumno.service';

@Controller('alumnos')
export class AlumnoController {

  constructor(private readonly alumnoService: AlumnoService) {}

  @Get()
  getAlumnos() {
    return this.alumnoService.findAll();
  }

  @Post()
  createAlumno(@Body() body: any) {
    return this.alumnoService.create(body);
  }

  @Put(':id')
  updateAlumno(@Param('id') id: string, @Body() body: any) {
    return this.alumnoService.update(Number(id), body);
  }

  @Delete(':id')
  deleteAlumno(@Param('id') id: string) {
    return this.alumnoService.remove(Number(id));
  }
}
