import { animate, animation, keyframes, state, style, transition, trigger } from '@angular/animations';

const slideOutLeft =  
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ transform: 'translateX(0)', easing: 'ease-out', offset: 0 }),
            style({ transform: 'translateX(-100%)', easing: 'ease-out', offset: 1 }),
        ])),
    ]);

const slideOutRight =  
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ transform: 'translateX(0)', easing: 'ease-out', offset: 0 }),
            style({ transform: 'translateX(100%)', easing: 'ease-out', offset: 1 }),
        ])),
    ]);

export const slideOutLeftAnimation =
    trigger('slideOutLeft', [
        state('false', style({transform: 'translateX(-100%)'})),
        transition('* => false', [slideOutLeft])
    ]);

export const slideOutRightAnimation =
    trigger('slideOutRight', [
        state('false', style({transform: 'translateX(100%)'})),
        transition('* => false', [slideOutRight])
    ]);
