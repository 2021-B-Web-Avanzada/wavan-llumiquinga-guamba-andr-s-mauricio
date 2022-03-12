import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicoComponent } from './components/medico/medico.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { CitasComponent } from './components/citas/citas.component';
const routes: Routes = [
  {path:'paciente',component:PacienteComponent},
  {path:'medico',component:MedicoComponent},
  {path:'hospital',component:HospitalComponent},
  {path:'especialidades',component: EspecialidadComponent},
  {path:'citas', component :CitasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
