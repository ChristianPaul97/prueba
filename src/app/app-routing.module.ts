import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';

const routes: Routes = [
  { path: "usuario", component: ListarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
