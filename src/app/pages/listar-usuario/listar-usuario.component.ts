import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Usuarios } from 'src/app/domine/usuarios';
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  title = "Listar Usuarios"

  lstUsuarios = new Array()
  usuarios: any
  constructor(
    private router: Router,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    //this.lstProducts = this.productService.getProducts()
    this.usuarios = this.serviceService.getUsuarioFire()

    console.log(this.usuarios)
  }
}
