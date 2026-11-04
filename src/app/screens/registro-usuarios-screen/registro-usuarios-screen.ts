import { Component, inject, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-registro-usuarios-screen',
  imports: [
    ...SHARED_IMPORTS
  ],
  templateUrl: './registro-usuarios-screen.html',
  styleUrl: './registro-usuarios-screen.scss',
})
export class RegistroUsuariosScreen implements OnInit {
  private readonly router = inject(Router);
  public readonly authService = inject(AuthService);

  // Declarar variables globales que se utilizarán en el componente
  public editar: boolean = false;
  // JSON para almacenar los datos del usuario que se está registrando o editando
  public user: any = {};

  constructor() {}

  ngOnInit(): void {}

  public goBack(){
    this.router.navigate(['/login']);
  }

  public radioChange(event: any) {

  }

}
