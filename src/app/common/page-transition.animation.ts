import {animate, state, style, transition, trigger} from '@angular/animations';

export const pageScaleTransition =
  trigger('pageScaleTransition', [
    state('void', style({transform: 'scale(0.01)'})),
    state('*', style({transform: 'scale(1)'})),

    transition('void <=> *', [
      animate('350ms cubic-bezier(0.5949, -0.0017, 0.5949, 1.4)')
    ])
  ]);
