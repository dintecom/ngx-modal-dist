import * as i0 from '@angular/core';
import { Component, EventEmitter, ViewChild, Output, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/router';

class ModalHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.2", type: ModalHeaderComponent, isStandalone: false, selector: "modal-header", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: false,
                    selector: 'modal-header',
                    template: `
    <ng-content></ng-content>
  `,
                }]
        }] });
class ModalContentComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.2", type: ModalContentComponent, isStandalone: false, selector: "modal-content", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalContentComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: false,
                    selector: 'modal-content',
                    template: `
    <ng-content></ng-content>
  `,
                }]
        }] });
class ModalFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.2", type: ModalFooterComponent, isStandalone: false, selector: "modal-footer", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalFooterComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: false,
                    selector: 'modal-footer',
                    template: `
    <ng-content></ng-content>
  `,
                }]
        }] });
class ModalComponent {
    cdr;
    // -------------------------------------------------------------------------
    // Inputs
    // -------------------------------------------------------------------------
    modalClass;
    closeOnEscape = true;
    closeOnOutsideClick = true;
    title;
    hideCloseButton = false;
    cancelButtonLabel;
    submitButtonLabel;
    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------
    onOpen = new EventEmitter(false);
    onClose = new EventEmitter(false);
    onSubmit = new EventEmitter(false);
    // -------------------------------------------------------------------------
    // Public properties
    // -------------------------------------------------------------------------
    isOpened = false;
    // -------------------------------------------------------------------------
    // Private properties
    // -------------------------------------------------------------------------
    modalRoot;
    backdropElement;
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(cdr) {
        this.cdr = cdr;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
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
    open(...args) {
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        this.backdropElement && document.body.appendChild(this.backdropElement);
        window.setTimeout(() => this.modalRoot.nativeElement.focus(), 0);
        document.body.className += ' modal-open';
        this.cdr.detectChanges();
    }
    close(...args) {
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        this.backdropElement && document.body.removeChild(this.backdropElement);
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        this.cdr.detectChanges();
    }
    checkClose(event) {
        if (this.closeOnOutsideClick === true &&
            this.modalRoot.nativeElement === event.target) {
            this.close();
        }
    }
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.2", type: ModalComponent, isStandalone: false, selector: "modal", inputs: { modalClass: "modalClass", closeOnEscape: "closeOnEscape", closeOnOutsideClick: "closeOnOutsideClick", title: "title", hideCloseButton: "hideCloseButton", cancelButtonLabel: "cancelButtonLabel", submitButtonLabel: "submitButtonLabel" }, outputs: { onOpen: "onOpen", onClose: "onClose", onSubmit: "onSubmit" }, viewQueries: [{ propertyName: "modalRoot", first: true, predicate: ["modalRoot"], descendants: true, static: true }], ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: false,
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
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { modalClass: [{
                type: Input
            }], closeOnEscape: [{
                type: Input
            }], closeOnOutsideClick: [{
                type: Input
            }], title: [{
                type: Input
            }], hideCloseButton: [{
                type: Input
            }], cancelButtonLabel: [{
                type: Input
            }], submitButtonLabel: [{
                type: Input
            }], onOpen: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onSubmit: [{
                type: Output
            }], modalRoot: [{
                type: ViewChild,
                args: ['modalRoot', { static: true }]
            }] } });

class RouteModalComponent {
    router;
    activatedRoute;
    // -------------------------------------------------------------------------
    // Inputs
    // -------------------------------------------------------------------------
    cancelUrl;
    cancelUrlExtras;
    modalClass;
    closeOnEscape = true;
    closeOnOutsideClick = true;
    title;
    hideCloseButton = false;
    cancelButtonLabel;
    submitButtonLabel;
    backdrop = true;
    // -------------------------------------------------------------------------
    // Outputs
    // -------------------------------------------------------------------------
    onOpen = new EventEmitter(false);
    onClose = new EventEmitter(false);
    onSubmit = new EventEmitter(false);
    // -------------------------------------------------------------------------
    // Private properties
    // -------------------------------------------------------------------------
    modalRoot;
    isOpened = false;
    backdropElement;
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.createBackDrop();
    }
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    ngOnInit() {
        this.open();
    }
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
    open(...args) {
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout(() => this.modalRoot.nativeElement.focus(), 0);
        document.body.className += ' modal-open';
    }
    close(...args) {
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.cancelUrl) {
            let navigationExtras = {};
            if (this.cancelUrlExtras) {
                if (this.cancelUrlExtras.relative) {
                    navigationExtras.relativeTo = this.activatedRoute;
                }
                navigationExtras = Object.assign(navigationExtras, this.cancelUrlExtras);
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
    checkClose(event) {
        if (this.closeOnOutsideClick === true &&
            this.modalRoot.nativeElement === event.target) {
            this.close();
        }
    }
    createBackDrop() {
        this.backdropElement = document.createElement('div');
        this.backdropElement.classList.add('fade');
        this.backdropElement.classList.add('in');
        this.backdropElement.classList.add('show');
        if (this.backdrop) {
            this.backdropElement.classList.add('modal-backdrop');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: RouteModalComponent, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.2", type: RouteModalComponent, isStandalone: false, selector: "route-modal", inputs: { cancelUrl: "cancelUrl", cancelUrlExtras: "cancelUrlExtras", modalClass: "modalClass", closeOnEscape: "closeOnEscape", closeOnOutsideClick: "closeOnOutsideClick", title: "title", hideCloseButton: "hideCloseButton", cancelButtonLabel: "cancelButtonLabel", submitButtonLabel: "submitButtonLabel", backdrop: "backdrop" }, outputs: { onOpen: "onOpen", onClose: "onClose", onSubmit: "onSubmit" }, viewQueries: [{ propertyName: "modalRoot", first: true, predicate: ["modalRoot"], descendants: true, static: true }], ngImport: i0, template: `
    <div
      class="modal route-modal"
      tabindex="-1"
      role="dialog"
      #modalRoot
      (keydown.esc)="closeOnEscape ? close() : 0"
      [ngClass]="{ in: isOpened, fade: isOpened, show: isOpened }"
      [ngStyle]="{ display: isOpened ? 'block' : 'none' }"
      (click)="checkClose($event)"
    >
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: RouteModalComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: false,
                    selector: 'route-modal',
                    template: `
    <div
      class="modal route-modal"
      tabindex="-1"
      role="dialog"
      #modalRoot
      (keydown.esc)="closeOnEscape ? close() : 0"
      [ngClass]="{ in: isOpened, fade: isOpened, show: isOpened }"
      [ngStyle]="{ display: isOpened ? 'block' : 'none' }"
      (click)="checkClose($event)"
    >
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
  `,
                }]
        }], ctorParameters: () => [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }], propDecorators: { cancelUrl: [{
                type: Input
            }], cancelUrlExtras: [{
                type: Input
            }], modalClass: [{
                type: Input
            }], closeOnEscape: [{
                type: Input
            }], closeOnOutsideClick: [{
                type: Input
            }], title: [{
                type: Input
            }], hideCloseButton: [{
                type: Input
            }], cancelButtonLabel: [{
                type: Input
            }], submitButtonLabel: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], onOpen: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onSubmit: [{
                type: Output
            }], modalRoot: [{
                type: ViewChild,
                args: ['modalRoot', { static: true }]
            }] } });

class ModalModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.2", ngImport: i0, type: ModalModule, declarations: [ModalComponent,
            RouteModalComponent,
            ModalHeaderComponent,
            ModalContentComponent,
            ModalFooterComponent], imports: [CommonModule], exports: [ModalComponent,
            RouteModalComponent,
            ModalHeaderComponent,
            ModalContentComponent,
            ModalFooterComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: ModalModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

/*
 * Public API Surface of ngx-modal
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ModalComponent as Modal, ModalComponent, ModalContentComponent as ModalContent, ModalContentComponent, ModalFooterComponent as ModalFooter, ModalFooterComponent, ModalHeaderComponent as ModalHeader, ModalHeaderComponent, ModalModule, RouteModalComponent as RouteModal, RouteModalComponent };
//# sourceMappingURL=ngx-modal.mjs.map
