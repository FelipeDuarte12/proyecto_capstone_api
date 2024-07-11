import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { nombre } from '../modelos/interfaces/nombre.interface';
import { EstadoUsuario } from 'src/modelos/clases/estado_usuario.entity';
import { EstadoUsuarioService } from '../modelos/servicios/estado_usuario.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estado Usuario')
@Controller('estado_usuario')
export class EstadoUsuarioController {

    constructor(private readonly estadoUsuarioService: EstadoUsuarioService) {}

    @Post()
    async crearEstadoUsuario(@Body() EstadoUsuario: nombre) {
        return this.estadoUsuarioService.crearEstadoUsuario(EstadoUsuario);
    }

    @Get()
    async buscarTodo(): Promise<EstadoUsuario[]> {
        return this.estadoUsuarioService.buscarTodo();
    }

    @Get(':id')
    async getEstadoUsuarioById(@Param('id') id: number): Promise<EstadoUsuario | undefined> {
        return this.estadoUsuarioService.getEstadoUsuarioById(id);
    }

    @Patch(':id')
    async actualizar(@Param('id') id: number, @Body() actualizarEstadoUsuario: nombre) {
        return this.estadoUsuarioService.actualizar(id, actualizarEstadoUsuario);
    }

    @Delete(':id')
    async eliminar(@Param('id') id: number): Promise<void> {
        return this.estadoUsuarioService.eliminar(id);
    }
}
