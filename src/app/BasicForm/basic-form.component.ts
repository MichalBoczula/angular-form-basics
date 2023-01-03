import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../Data/data-service.service';
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

  constructor(private dataService: DataService) {}

  onClick(){
    this.show = !this.show;
    setTimeout(() => this.show= !this.show, 2000);
  }

  onSubmit(form: NgForm)
  {
    this.dataService.postData(this.basicFromModuleVM).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
  }

}
