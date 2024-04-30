import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { login } from '../../../shared/MODELS/login.model';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: login[] = [];
  forms: FormGroup;

  Logincontrasena = '12345';

  constructor(private fb:FormBuilder, private localStorage: LocalStorageService){
    this.forms = this.fb.group({
      usuario: (''),
      contrasena: ('')
    })
  }

  SaveToLocalStorage(){
    this.localStorage.setItem('myKey', this.forms.value[1]);
    console.log(this.localStorage);
  }
  validarUsuarioYContrasena(){

  }
}
