
import { FiliaisService } from './../../services/filiais/filiais.service';

import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/models/filial.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css']
})
export class FilialComponent implements OnInit {

  public form: FormGroup;
  filial: any;
  erro: any;
  public botao: Number = 1;

  constructor(private filialService: FiliaisService,private fb: FormBuilder) { 
    this.getter();
    this.form = this.fb.group({
      nomeFazenda: ['',Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
  }

  botaoFilial(botao: Number){
    this.botao = botao;
  }

  getter(){
    this.filialService.getFilial().subscribe(
        (data: Filial) => {
          this.filial = data; 
          console.log("O data que recebemos: ",data);
          console.log("A variavel que preenchemos: ",this.filial);
        }, 
        (error: any) => {
          this.erro = error;
          console.error('Error: ',error)
        }
      );
  }

  setter(){
    const filialAux = new Filial();
    console.log('ehiehiehiehiehe');
    filialAux.nomeFazenda = this.form.controls['nomeFazenda'].value;
    filialAux.ativo = true;
    console.log(filialAux)
    this.filialService
    .setFilial(filialAux).subscribe(
      (data: Filial) => {
        this.filial = data; 
        console.log("O data que recebemos: ",data);
        console.log("A variavel que preenchemos: ",this.filial);
      }, 
      (error: any) => {
        this.erro = error;
        console.error('Error: ',error)
      }
    );

    this.botao = 1;
  }

}
