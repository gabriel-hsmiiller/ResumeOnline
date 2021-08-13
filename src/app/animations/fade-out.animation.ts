import { animate, animation, keyframes, state, style, transition, trigger } from '@angular/animations';

const fadeOutLeft =  
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 1, transform: 'translate3d(0,0,0)', easing: 'ease-out', offset: 0 }),
            style({ opacity: 0, transform: 'translate3d(-160px, 0, 0)', easing: 'ease-out', offset: 1 }),
        ])),
    ]);

const fadeOutRight =  
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 1, transform: 'translate3d(0,0,0)', easing: 'ease-out', offset: 0 }),
            style({ opacity: 0, transform: 'translate3d(160px, 0, 0)', easing: 'ease-out', offset: 1 }),
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
