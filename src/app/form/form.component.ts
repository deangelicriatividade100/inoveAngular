import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    nome: string = 'Luis Melo Criativo';
    registerDate: Date = new Date("01/02/2018");
    registry: string = '0123456';
    cpf: string = '003821342-96';
    rg: string = '2376973-4';
    monther: string = "Nome da mãe";
    father: string = "Nome do pai";
    stateCity: string = "Cidade/Cidade";
    cep: string = "CEP";
    adress: string = "Endereço";
    bairro: string = "Bairro";
    phone:string = "3456-2543"; 
    cell: string = "99234-6543";
    mail: string = "luis.melo@gmail.com";
    //gender: string = 'masculino';

  constructor() { }

  ngOnInit() {
  }

}
