import { EventEmitter, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
export declare class ModalHeaderComponent {
}
export declare class ModalContentComponent {
}
export declare class ModalFooterComponent {
}
export declare class ModalComponent implements OnDestroy {
    private readonly cdr;
    modalClass: string;
    closeOnEscape: boolean;
    closeOnOutsideClick: boolean;
    title: string;
    hideCloseButton: boolean;
    cancelButtonLabel: string;
    submitButtonLabel: string;
    onOpen: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onSubmit: EventEmitter<any>;
    isOpened: boolean;
    modalRoot: ElementRef;
    private backdropElement;
    constructor(cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    open(...args: any[]): void;
    close(...args: any[]): void;
    checkClose(event: MouseEvent): void;
    private createBackDrop;
}
