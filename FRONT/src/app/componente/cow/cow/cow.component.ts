import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CowService } from 'src/app/services/cows/cow.service';
import { Cow } from 'src/app/models/cow.models';
import { FiliaisService } from 'src/app/services/filiais/filiais.service';
import { Filial } from 'src/app/models/filial.model';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css']
})
export class CowComponent implements OnInit {
  public form: FormGroup;
  cow: any;
  filial: any;
  _idFilial: String;
  erro: any;
  public botao: Number = 1;

  constructor(private filialService: FiliaisService,private cowService: CowService,private fb: FormBuilder) { 
    this.form = this.fb.group({
      nomeCow: ['',Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
      selectFilial: ['',Validators.compose([
        Validators.required
      ])]
    });
    this.getter();
    this.getFiliais();
    this._idFilial = this._idFilial
  }
  ngOnInit(): void {
  }

  botaoVaca(botao: Number){
    this.botao = botao;
  }

  getter(){
    this.cowService.getCow().subscribe(
        (data: Cow) => {
          this.cow = data; 
          console.log("O data que recebemos: ",data);
          console.log("A variavel que preenchemos: ",this.cow);
        }, 
        (error: any) => {
          this.erro = error;
          console.error('Error: ',error)
        }
      );
  }

  getFiliais(){
    this.filialService.getFilial().subscribe(
      (data: Filial) => {
        this.filial = data; 
        console.log("O data de filiais que recebemos: ",data);
        console.log("A variavel de filiais que preenchemos: ",this.filial);
      }, 
      (error: any) => {
        this.erro = error;
        console.error('Error: ',error)
      }
    );
  }

  setter(){
    const cowAux = new Cow();
    console.log('ehiehiehiehiehe');
    cowAux.nomeCow = this.form.controls['nomeCow'].value;
    this.cow.idFilial = this.form.controls['selectFilial'].value;
    console.log(this.cow);
    this.cowService
    .setCow(cowAux).subscribe(
      (data: Cow) => {
        this.cow = data; 
        console.log("O data que recebemos: ",data);
        console.log("A variavel que preenchemos: ",this.cow);
      }, 
      (error: any) => {
        this.erro = error;
        console.error('Error: ',error)
      }
    );

    this.botao = 1;
  }

  filialEscolhida(){ 
    console.log("estou no cidade compo... " + this._idFilial); 
  }

}
