import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasicFromModule } from './basic-from-model';

@Component({
  selector: 'form-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {
  private basicFromModule: BasicFromModule = {
    name: '',
    email: true,
    color: "black",
    option: "first",
    info: "lorem ipsum"
  }

  show:boolean = true;
  basicFromModuleVM: BasicFromModule = { ...this.basicFromModule }

  onClick(){
    this.show = !this.show;
    setTimeout(() => this.show= !this.show, 2000);
  }

  onSubmit(form: NgForm)
  {
    console.log(form);
  }

}
