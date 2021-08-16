import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';

const slideInLeft =
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ transform: 'translateX(-100%)', easing: 'ease-out', offset: 0 }),
            style({ transform: 'translateX(0)', easing: 'ease-out', offset: 1 })
        ])),
    ]);

const slideInRight =
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ transform: 'translateX(100%)', easing: 'ease-out', offset: 0 }),
            style({ transform: 'translateX(0)', easing: 'ease-out', offset: 1 })
        ])),
    ]);
    
export const slideInLeftAnimation =
    trigger('slideInLeft', [
        transition('* => true', [slideInLeft])
    ]);

export const slideInRightAnimation =
    trigger('slideInRight', [
        transition('* => true', [slideInRight])
    ]);