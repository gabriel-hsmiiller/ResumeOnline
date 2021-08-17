import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';

const fadeIn =
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 0, easing: 'ease-out', offset: 0 }),
            style({ opacity: .5, easing: 'ease-out', offset: 1 })
        ])),
    ]);

const fadeInLeft =
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 0, transform: 'translate(-4%)', easing: 'ease-out', offset: 0 }),
            style({ opacity: 1, transform: 'translate(0)', easing: 'ease-out', offset: 1 })
        ])),
    ]);

const fadeInRight =
    animation([
        animate('500ms 0ms ease-out', keyframes([
            style({ opacity: 0, transform: 'translate(4%)', easing: 'ease-out', offset: 0 }),
            style({ opacity: 1, transform: 'translate(0)', easing: 'ease-out', offset: 1 })
        ])),
    ]);
    
export const fadeInAnimation =
    trigger('fadeIn', [
        transition('* => true', [fadeIn])
    ]);
    
export const fadeInLeftAnimation =
    trigger('fadeInLeft', [
        transition('* => true', [fadeInLeft])
    ]);

export const fadeInRightAnimation =
    trigger('fadeInRight', [
        transition('* => true', [fadeInRight])
    ]);