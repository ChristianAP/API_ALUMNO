import { Router } from 'express'
const router = Router();
import * as AlumnoCtrl from '../controllers/alumno.controller'

    router.get('/listar/', AlumnoCtrl.readAlumno); //// LISTAR ALUMNO

    router.get('/listarID/:id', AlumnoCtrl.readAlumnoID); //// LISTAR ALUMNO ID
    
    router.post('/create/', AlumnoCtrl.createAlumno); //// CREAR ALUMNO

    router.delete('/delete/:id', AlumnoCtrl.deleteAlumno); //// ELIMINAR ALUMNO

    router.put('/update/:id', AlumnoCtrl.updateAlumno); //// MODIFICAR ALUMNO

export default router;