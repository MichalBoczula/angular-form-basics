import { Component } from '@angular/core';
import { BasicFromModule } from './basic-from-model';

@Component({
  selector: 'form-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {
  private basicFromModule: BasicFromModule = {
    name: "test",
    email: true,
    color: "black",
    option: "first",
    info: "lorem ipsum"
  }

  basicFromModuleVM: BasicFromModule = { ...this.basicFromModule }


}
