import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/e/ed/Shrek%28personagem%29.jpg",
      description: "shrek"
    },
    {
      url: "https://www.einerd.com.br/wp-content/uploads/2019/04/Shrek-Fiona-capa-890x466.jpg",
      description: "fiona"
    },
    {
      url: "https://i.pinimg.com/originals/91/f1/d2/91f1d28c883a0295c813943101be6e81.png",
      description: "biscoito"
    }
  ]
}
