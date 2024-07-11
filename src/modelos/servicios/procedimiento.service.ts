import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { nombre } from '../interfaces/nombre.interface';
import { Procedimiento } from 'src/modelos/clases/procedimiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProcedimientoService {

    constructor(@InjectRepository(Procedimiento) private repoProcedimiento: Repository<Procedimiento>){}

    async crearProcedimiento(nombreProcedimiento: nombre){
        const ProcedimientoNueva = this.repoProcedimiento.create(nombreProcedimiento);
        return await this.repoProcedimiento.save(ProcedimientoNueva);
    }

    async buscarTodo(): Promise<Procedimiento[]> {
        return await this.repoProcedimiento.find();
    }

    async getProcedimientoById(id: number): Promise<Procedimiento | undefined> {
        return await this.repoProcedimiento.findOne({ where: { id_procedimiento: id }});
    }

    async actualizar(id: number, actualizarProcedimiento: nombre): Promise<Procedimiento> {
        const procedimiento = await this.repoProcedimiento.findOne({ where: { id_procedimiento: id } });
        if (!procedimiento) {
            return null;
        }
        Object.assign(procedimiento, actualizarProcedimiento);
        return await this.repoProcedimiento.save(procedimiento);
    }

    async eliminar(id: number): Promise<void> {
        const result = await this.repoProcedimiento.delete(id);
        if (result.affected === 0) {
            throw new Error(`No se encontró el procedimiento con ID ${id}`);
        }
    }
}
