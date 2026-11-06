import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  cadastros: Cadastro[] = [];
  cadastro: Cadastro = { nome: '', email: '', senha: '' };
  btnCadastrar: boolean = true;

  constructor(private servico: CadastroService) {}

  ngOnInit(): void {
    this.selecionar();
  }

  selecionar(): void {
    this.servico.listar().subscribe(retorno => this.cadastros = retorno);
  }

  salvar(): void {
    if (!this.cadastro.id) {
      this.servico.cadastrar(this.cadastro).subscribe(() => {
        this.selecionar();
        this.limpar();
      });
    } else {
      this.servico.alterar(this.cadastro).subscribe(() => {
        this.selecionar();
        this.limpar();
      });
    }
  }

  selecionarCadastro(c: Cadastro): void {
    this.cadastro = { ...c };
    this.btnCadastrar = false;
  }

  remover(id: number): void {
    this.servico.remover(id).subscribe(() => {
      this.selecionar();
      this.limpar();
    });
  }

  limpar(): void {
    this.cadastro = { nome: '', email: '', senha: '' };
    this.btnCadastrar = true;
  }
}