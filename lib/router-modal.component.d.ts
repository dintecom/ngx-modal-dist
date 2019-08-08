import { EventEmitter, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
export declare class RouteModalComponent implements OnInit, OnDestroy {
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
}
