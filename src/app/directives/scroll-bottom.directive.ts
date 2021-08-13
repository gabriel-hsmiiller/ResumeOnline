import { Directive, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Directive({
    selector: '[scrollBottom]',
    outputs: ['onScrollBottom']
})
export class ScrollBottomDirective {

    private emitted = false;

    @Output() onScrollBottom: EventEmitter<boolean> = new EventEmitter<boolean>();
    @HostListener('mousewheel', ['$event']) scroll(event: WheelEvent){
        if(event.deltaY > 0 && !this.emitted){
            this.emitted = true
            this.onScrollBottom.emit(true);
        }
    }
}