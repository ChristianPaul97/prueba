import { Injectable } from '@angular/core';
import { Usuarios } from '../domine/usuarios';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  lstUsuarios = new Array()


  private usuarioCollection: AngularFirestoreCollection<Usuarios>
  constructor(private afs: AngularFirestore) {
    this.usuarioCollection = afs.collection<Usuarios>('usuarios')
  }
  getUsuarioFire(){
    return this.usuarioCollection.valueChanges();
  }
}



