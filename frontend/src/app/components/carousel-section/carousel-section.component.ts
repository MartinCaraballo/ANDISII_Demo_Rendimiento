import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa módulos necesarios
import { RouterModule } from '@angular/router'; // Si usa rutas

@Component({
  selector: 'carousel-section-component',
  standalone: true, // Declarar como standalone
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.scss'],
  imports: [CommonModule, RouterModule] // Importar módulos necesarios para el componente
})
export class CarouselSectionComponent {}
