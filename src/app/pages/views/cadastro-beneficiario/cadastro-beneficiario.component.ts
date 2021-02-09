import { Validacao } from './../../../models/validacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-beneficiario',
  templateUrl: './cadastro-beneficiario.component.html',
  styleUrls: ['./cadastro-beneficiario.component.scss']
})
export class CadastroBeneficiarioComponent implements OnInit {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: [null, { validators: [Validators.required], updateOn: "change" }],
      cpf: [null, { validators: [Validators.required, Validacao.ValidaCpf], updateOn: "change" }],
      email: [null, { validators: [Validators.required, Validators.email], updateOn: "change" }],
      totalSaldoAposentadoria: [null, { validators: [Validators.required], updateOn: "change" }],
      qtdAnosAposentadoria: [null, { validators: [Validators.required], updateOn: "change" }],
    });

  }

  onSubmit(): void {

    if (this.form.valid) {

    } else {

    }

  }

}
