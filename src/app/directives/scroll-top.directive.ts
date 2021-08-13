import { Directive, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Directive({
    selector: '[scrollTop]',
    outputs: ['onScrollTop']
})
export class ScrollTopDirective {

    private emitted = false;

    @Output() onScrollTop: EventEmitter<boolean> = new EventEmitter<boolean>();
    @HostListener('mousewheel', ['$event']) scroll(event: WheelEvent){
        if(event.deltaY < 0 && !this.emitted){
            this.emitted = true
            this.onScrollTop.emit(true);
        }
    }
}