import * as i0 from '@angular/core';
import { OnDestroy, EventEmitter, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import * as i3 from '@angular/common';

declare class ModalHeaderComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalHeaderComponent, "modal-header", never, {}, {}, never, ["*"], false, never>;
}
declare class ModalContentComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalContentComponent, "modal-content", never, {}, {}, never, ["*"], false, never>;
}
declare class ModalFooterComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalFooterComponent, "modal-footer", never, {}, {}, never, ["*"], false, never>;
}
declare class ModalComponent implements OnDestroy {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "modal", never, { "modalClass": { "alias": "modalClass"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "closeOnOutsideClick": { "alias": "closeOnOutsideClick"; "required": false; }; "title": { "alias": "title"; "required": false; }; "hideCloseButton": { "alias": "hideCloseButton"; "required": false; }; "cancelButtonLabel": { "alias": "cancelButtonLabel"; "required": false; }; "submitButtonLabel": { "alias": "submitButtonLabel"; "required": false; }; }, { "onOpen": "onOpen"; "onClose": "onClose"; "onSubmit": "onSubmit"; }, never, ["modal-header", "modal-content", "modal-footer"], false, never>;
}

declare class RouteModalComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    cancelUrl: any[];
    cancelUrlExtras: {
        relative: boolean;
    } & NavigationExtras;
    modalClass: string;
    closeOnEscape: boolean;
    closeOnOutsideClick: boolean;
    title: string;
    hideCloseButton: boolean;
    cancelButtonLabel: string;
    submitButtonLabel: string;
    backdrop: boolean;
    onOpen: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onSubmit: EventEmitter<any>;
    modalRoot: ElementRef;
    isOpened: boolean;
    private backdropElement;
    constructor(router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    open(...args: any[]): void;
    close(...args: any[]): void;
    checkClose(event: MouseEvent): void;
    private createBackDrop;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouteModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RouteModalComponent, "route-modal", never, { "cancelUrl": { "alias": "cancelUrl"; "required": false; }; "cancelUrlExtras": { "alias": "cancelUrlExtras"; "required": false; }; "modalClass": { "alias": "modalClass"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "closeOnOutsideClick": { "alias": "closeOnOutsideClick"; "required": false; }; "title": { "alias": "title"; "required": false; }; "hideCloseButton": { "alias": "hideCloseButton"; "required": false; }; "cancelButtonLabel": { "alias": "cancelButtonLabel"; "required": false; }; "submitButtonLabel": { "alias": "submitButtonLabel"; "required": false; }; "backdrop": { "alias": "backdrop"; "required": false; }; }, { "onOpen": "onOpen"; "onClose": "onClose"; "onSubmit": "onSubmit"; }, never, ["modal-header", "modal-content", "modal-footer"], false, never>;
}

declare class ModalModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ModalModule, [typeof ModalComponent, typeof RouteModalComponent, typeof ModalHeaderComponent, typeof ModalContentComponent, typeof ModalFooterComponent], [typeof i3.CommonModule], [typeof ModalComponent, typeof RouteModalComponent, typeof ModalHeaderComponent, typeof ModalContentComponent, typeof ModalFooterComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ModalModule>;
}

export { ModalComponent as Modal, ModalComponent, ModalContentComponent as ModalContent, ModalContentComponent, ModalFooterComponent as ModalFooter, ModalFooterComponent, ModalHeaderComponent as ModalHeader, ModalHeaderComponent, ModalModule, RouteModalComponent as RouteModal, RouteModalComponent };
