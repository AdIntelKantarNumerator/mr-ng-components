import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-mr-ng-components',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      mr-ng-components works!
    </p>
  `,
  styles: [`:host { display: block; }`]
})
export class MrNgComponents {

}
