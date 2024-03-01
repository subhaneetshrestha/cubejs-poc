import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QueryBuilder } from '@cubejs-client/playground';
import type { ComponentProps } from 'react';
import { ReactRendererDirective } from '../react-renderer.directive';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cube-wrapper',
  standalone: true,
  imports: [CommonModule, ReactRendererDirective],
  templateUrl: './cubejs-wrapper.component.html',
  styleUrl: './cubejs-wrapper.component.scss',
})
export class CubeWrapperComponent {
  queryBuilder = QueryBuilder;

  queryBuilderProps: ComponentProps<typeof QueryBuilder> = {
    apiUrl: environment.CUBEJS_API_URL,
    onTokenPayloadChange(payload, token): Promise<string> {
      return new Promise((resolve) => resolve(''));
    },
    token: environment.CUBEJS_TOKEN,
  };
}
