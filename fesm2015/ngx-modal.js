import { Component, EventEmitter, ChangeDetectorRef, Input, Output, ViewChild, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalHeaderComponent {
}
ModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal-header',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
class ModalContentComponent {
}
ModalContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal-content',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
class ModalFooterComponent {
}
ModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal-footer',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
class ModalComponent {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.closeOnEscape = true;
        this.closeOnOutsideClick = true;
        this.hideCloseButton = false;
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onOpen = new EventEmitter(false);
        this.onClose = new EventEmitter(false);
        this.onSubmit = new EventEmitter(false);
        // -------------------------------------------------------------------------
        // Public properties
        // -------------------------------------------------------------------------
        this.isOpened = false;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.backdropElement &&
            this.backdropElement.parentNode === document.body) {
            document.body.removeChild(this.backdropElement);
        }
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * @param {...?} args
     * @return {?}
     */
    open(...args) {
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        this.backdropElement && document.body.appendChild(this.backdropElement);
        window.setTimeout((/**
         * @return {?}
         */
        () => this.modalRoot.nativeElement.focus()), 0);
        document.body.className += ' modal-open';
        this.cdr.detectChanges();
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    close(...args) {
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        this.backdropElement && document.body.removeChild(this.backdropElement);
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        this.cdr.detectChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkClose(event) {
        if (this.closeOnOutsideClick === true &&
            this.modalRoot.nativeElement === event.target) {
            this.close();
        }
    }
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * @private
     * @return {?}
     */
    createBackDrop() {
        if (!document.getElementById('modal-backdrop')) {
            this.backdropElement = document.createElement('div');
            this.backdropElement.setAttribute('id', 'modal-backdrop');
            this.backdropElement.classList.add('modal-backdrop');
            this.backdropElement.classList.add('fade');
            this.backdropElement.classList.add('in');
            this.backdropElement.classList.add('show');
        }
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal',
                template: `
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      #modalRoot
      (keydown.esc)="closeOnEscape ? close() : 0"
      [ngClass]="{ in: isOpened, fade: isOpened, show: isOpened }"
      [ngStyle]="{ display: isOpened ? 'block' : 'none' }"
      (mousedown)="checkClose($event)"
    >
      <div class="modal-dialog" [ngClass]="modalClass" #modalContent>
        <div class="modal-content" tabindex="0" *ngIf="isOpened">
          <div class="modal-header">
            <h4 class="modal-title" *ngIf="title">{{ title }}</h4>
            <ng-content select="modal-header"></ng-content>
            <button
              *ngIf="!hideCloseButton"
              type="button"
              class="close"
              data-dismiss="modal"
              [attr.aria-label]="cancelButtonLabel || 'Close'"
              (click)="close()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ng-content select="modal-content"></ng-content>
          </div>
          <div class="modal-footer">
            <ng-content select="modal-footer"></ng-content>
            <button
              *ngIf="cancelButtonLabel"
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              (click)="close()"
            >
              {{ cancelButtonLabel }}
            </button>
            <button
              *ngIf="submitButtonLabel"
              type="button"
              class="btn btn-primary"
              (click)="onSubmit.emit(undefined)"
            >
              {{ submitButtonLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ModalComponent.propDecorators = {
    modalClass: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    closeOnOutsideClick: [{ type: Input }],
    title: [{ type: Input }],
    hideCloseButton: [{ type: Input }],
    cancelButtonLabel: [{ type: Input }],
    submitButtonLabel: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onSubmit: [{ type: Output }],
    modalRoot: [{ type: ViewChild, args: ['modalRoot', { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouteModalComponent {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    /**
     * @param {?} router
     * @param {?} activatedRoute
     */
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.closeOnEscape = true;
        this.closeOnOutsideClick = true;
        this.hideCloseButton = false;
        this.backdrop = true;
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onOpen = new EventEmitter(false);
        this.onClose = new EventEmitter(false);
        this.onSubmit = new EventEmitter(false);
        this.isOpened = false;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    /**
     * @return {?}
     */
    ngOnInit() {
        this.open();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.backdropElement && this.backdropElement.parentNode === document.body) {
            document.body.removeChild(this.backdropElement);
        }
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * @param {...?} args
     * @return {?}
     */
    open(...args) {
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout((/**
         * @return {?}
         */
        () => this.modalRoot.nativeElement.focus()), 0);
        document.body.className += ' modal-open';
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    close(...args) {
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.cancelUrl) {
            /** @type {?} */
            let navigationExtras = {};
            if (this.cancelUrlExtras) {
                if (this.cancelUrlExtras.relative) {
                    navigationExtras.relativeTo = this.activatedRoute;
                }
                navigationExtras = ((/** @type {?} */ (Object))).assign(navigationExtras, this.cancelUrlExtras);
            }
            this.router.navigate(this.cancelUrl, navigationExtras);
        }
        else {
            window.history.back();
        }
    }
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * @param {?} event
     * @return {?}
     */
    checkClose(event) {
        if (this.closeOnOutsideClick === true && this.modalRoot.nativeElement === event.target) {
            this.close();
        }
    }
    /**
     * @private
     * @return {?}
     */
    createBackDrop() {
        this.backdropElement = document.createElement('div');
        this.backdropElement.classList.add('fade');
        this.backdropElement.classList.add('in');
        this.backdropElement.classList.add('show');
        if (this.backdrop) {
            this.backdropElement.classList.add('modal-backdrop');
        }
    }
}
RouteModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'route-modal',
                template: `
<div class="modal route-modal"
     tabindex="-1"
     role="dialog"
     #modalRoot
     (keydown.esc)="closeOnEscape ? close() : 0"
     [ngClass]="{ in: isOpened, fade: isOpened, show: isOpened}"
     [ngStyle]="{ display: isOpened ? 'block' : 'none' }"
     (click)="checkClose($event)">
    <div [class]="'modal-dialog ' + modalClass" #modalContent>
        <div class="modal-content" tabindex="0" *ngIf="isOpened">
            <div class="modal-header">
                <h4 class="modal-title" *ngIf="title">{{ title }}</h4>
                <ng-content select="modal-header"></ng-content>
                <button
                  *ngIf="!hideCloseButton"
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  [attr.aria-label]="cancelButtonLabel || 'Close'"
                  (click)="close()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <ng-content select="modal-content"></ng-content>
            </div>
            <div class="modal-footer">
                <ng-content select="modal-footer"></ng-content>
                <button
                  *ngIf="cancelButtonLabel"
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  (click)="close()"
                  >
                    {{ cancelButtonLabel }}
                  </button>
                <button
                  *ngIf="submitButtonLabel"
                  type="button"
                  class="btn btn-primary"
                  (click)="onSubmit.emit(undefined)"
                >
                    {{ submitButtonLabel }}
                </button>
            </div>
        </div>
    </div>
</div>
`
            }] }
];
/** @nocollapse */
RouteModalComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
RouteModalComponent.propDecorators = {
    cancelUrl: [{ type: Input }],
    cancelUrlExtras: [{ type: Input }],
    modalClass: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    closeOnOutsideClick: [{ type: Input }],
    title: [{ type: Input }],
    hideCloseButton: [{ type: Input }],
    cancelButtonLabel: [{ type: Input }],
    submitButtonLabel: [{ type: Input }],
    backdrop: [{ type: Input }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onSubmit: [{ type: Output }],
    modalRoot: [{ type: ViewChild, args: ['modalRoot', { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ModalComponent,
                    RouteModalComponent,
                    ModalHeaderComponent,
                    ModalContentComponent,
                    ModalFooterComponent,
                ],
                exports: [
                    ModalComponent,
                    RouteModalComponent,
                    ModalHeaderComponent,
                    ModalContentComponent,
                    ModalFooterComponent,
                ],
            },] }
];

export { ModalComponent as Modal, ModalComponent, ModalContentComponent as ModalContent, ModalContentComponent, ModalFooterComponent as ModalFooter, ModalFooterComponent, ModalHeaderComponent as ModalHeader, ModalHeaderComponent, ModalModule, RouteModalComponent as RouteModal, RouteModalComponent };
//# sourceMappingURL=ngx-modal.js.map
