import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './shared/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from "./shared/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'dekodExercise';
  constructor(private http: HttpClient){}
}



