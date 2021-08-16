import { animate, animation, keyframes, state, style, transition, trigger } from '@angular/animations';

const fadeOutLeft =  
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 1, transform: 'translateX(0)', easing: 'ease-out', offset: 0 }),
            style({ opacity: 0, transform: 'translateX(-4%)', easing: 'ease-out', offset: 1 }),
        ])),
    ]);

const fadeOutRight =  
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 1, transform: 'translateX(0)', easing: 'ease-out', offset: 0 }),
            style({ opacity: 0, transform: 'translateX(4%)', easing: 'ease-out', offset: 1 }),
        ])),
    ]);

export const fadeOutLeftAnimation =
    trigger('fadeOutLeft', [
        state('false',style({ opacity: 0 })),
        transition('* => false', [fadeOutLeft])
    ]);

export const fadeOutRightAnimation =
    trigger('fadeOutRight', [
        state('false',style({ opacity: 0 })),
        transition('* => false', [fadeOutRight])
    ]);
