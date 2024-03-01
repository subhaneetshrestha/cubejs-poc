import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CubeWrapperComponent } from './cubejs-wrapper/cubejs-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CubeWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cubejs-poc';
}
