import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@Component({
  selector: 'lib-mr-ng-components',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  template: `
    <p>{{ 'mr-ng-components works, thanks kp!' | capitalize }} {{inputValue()}}</p>
  `,
  styles: [`:host { display: block; }`]
})
export class MrNgComponents {
  inputValue: InputSignal<string> = input.required<string>();
}
