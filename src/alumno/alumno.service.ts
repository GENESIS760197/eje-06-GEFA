import { Injectable } from '@nestjs/common';

@Injectable()
export class AlumnoService {

  private alumnos: any[] = [];
  
  findAll() {
    return this.alumnos;
  }

  create(alumno: any) {
    this.alumnos.push(alumno);
    return alumno;
  }

  update(id: number, data: any) {
    this.alumnos[id] = data;
    return data;
  }

  remove(id: number) {
    const eliminado = this.alumnos[id];
    this.alumnos.splice(id, 1);
    return eliminado;
  }
}
