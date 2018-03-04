import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title: string = 'PERÍODO LETIVO 2018/1';

  options:any = [
    { 
      title: 'Alunos', 
      icon: 'groups',
      url: '/form',
      selected: true
    },
    { 
      title: 'Disciplinas', 
      icon: 'books' 
    },

    { 
      title: 'Professores', 
      icon: 'teachers' 
    },

    { 
      title: 'Ferramentas', 
      icon: 'tools' 
    },

    { 
      title: 'Auditoria', 
      icon: 'audio' 
    },

    { 
      title: 'Matriz Currícular', 
      icon: 'axel' 
    },

    { 
      title: 'Plano de Aula', 
      icon: 'class' 
    },

    { 
      title: 'Solicitões', 
      icon: 'prancha' 
    }

    
  ];

  constructor( ) { }

  ngOnInit() {
  }


}
