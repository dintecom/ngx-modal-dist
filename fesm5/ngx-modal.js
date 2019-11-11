import { Component, ChangeDetectorRef, Input, Output, ViewChild, EventEmitter, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalHeaderComponent = /** @class */ (function () {
    function ModalHeaderComponent() {
    }
    ModalHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal-header',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    return ModalHeaderComponent;
}());
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent() {
    }
    ModalContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal-content',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    return ModalContentComponent;
}());
var ModalFooterComponent = /** @class */ (function () {
    function ModalFooterComponent() {
    }
    ModalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal-footer',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    return ModalFooterComponent;
}());
var ModalComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ModalComponent(cdr) {
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
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = 
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.backdropElement &&
            this.backdropElement.parentNode === document.body) {
            document.body.removeChild(this.backdropElement);
        }
        this.cdr.detectChanges();
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * @param {...?} args
     * @return {?}
     */
    ModalComponent.prototype.open = 
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        this.backdropElement && document.body.appendChild(this.backdropElement);
        window.setTimeout((/**
         * @return {?}
         */
        function () { return _this.modalRoot.nativeElement.focus(); }), 0);
        document.body.className += ' modal-open';
        this.cdr.detectChanges();
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ModalComponent.prototype.close = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        this.backdropElement && document.body.removeChild(this.backdropElement);
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        this.cdr.detectChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.checkClose = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.closeOnOutsideClick === true &&
            this.modalRoot.nativeElement === event.target) {
            this.close();
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * @private
     * @return {?}
     */
    ModalComponent.prototype.createBackDrop = 
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * @private
     * @return {?}
     */
    function () {
        if (!document.getElementById('modal-backdrop')) {
            this.backdropElement = document.createElement('div');
            this.backdropElement.setAttribute('id', 'modal-backdrop');
            this.backdropElement.classList.add('modal-backdrop');
            this.backdropElement.classList.add('fade');
            this.backdropElement.classList.add('in');
            this.backdropElement.classList.add('show');
        }
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal',
                    template: "\n    <div\n      class=\"modal\"\n      tabindex=\"-1\"\n      role=\"dialog\"\n      #modalRoot\n      (keydown.esc)=\"closeOnEscape ? close() : 0\"\n      [ngClass]=\"{ in: isOpened, fade: isOpened, show: isOpened }\"\n      [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n      (mousedown)=\"checkClose($event)\"\n    >\n      <div class=\"modal-dialog\" [ngClass]=\"modalClass\" #modalContent>\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n            <ng-content select=\"modal-header\"></ng-content>\n            <button\n              *ngIf=\"!hideCloseButton\"\n              type=\"button\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              [attr.aria-label]=\"cancelButtonLabel || 'Close'\"\n              (click)=\"close()\"\n            >\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <ng-content select=\"modal-content\"></ng-content>\n          </div>\n          <div class=\"modal-footer\">\n            <ng-content select=\"modal-footer\"></ng-content>\n            <button\n              *ngIf=\"cancelButtonLabel\"\n              type=\"button\"\n              class=\"btn btn-default\"\n              data-dismiss=\"modal\"\n              (click)=\"close()\"\n            >\n              {{ cancelButtonLabel }}\n            </button>\n            <button\n              *ngIf=\"submitButtonLabel\"\n              type=\"button\"\n              class=\"btn btn-primary\"\n              (click)=\"onSubmit.emit(undefined)\"\n            >\n              {{ submitButtonLabel }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return ModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouteModalComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function RouteModalComponent(router, activatedRoute) {
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
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    /**
     * @return {?}
     */
    RouteModalComponent.prototype.ngOnInit = 
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        this.open();
    };
    /**
     * @return {?}
     */
    RouteModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.backdropElement && this.backdropElement.parentNode === document.body) {
            document.body.removeChild(this.backdropElement);
        }
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * @param {...?} args
     * @return {?}
     */
    RouteModalComponent.prototype.open = 
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isOpened)
            return;
        this.isOpened = true;
        this.onOpen.emit(args);
        document.body.appendChild(this.backdropElement);
        window.setTimeout((/**
         * @return {?}
         */
        function () { return _this.modalRoot.nativeElement.focus(); }), 0);
        document.body.className += ' modal-open';
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    RouteModalComponent.prototype.close = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.isOpened)
            return;
        this.isOpened = false;
        this.onClose.emit(args);
        document.body.className = document.body.className.replace(/modal-open\b/, '');
        if (this.cancelUrl) {
            /** @type {?} */
            var navigationExtras = {};
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
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * @param {?} event
     * @return {?}
     */
    RouteModalComponent.prototype.checkClose = 
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.closeOnOutsideClick === true && this.modalRoot.nativeElement === event.target) {
            this.close();
        }
    };
    /**
     * @private
     * @return {?}
     */
    RouteModalComponent.prototype.createBackDrop = /**
     * @private
     * @return {?}
     */
    function () {
        this.backdropElement = document.createElement('div');
        this.backdropElement.classList.add('fade');
        this.backdropElement.classList.add('in');
        this.backdropElement.classList.add('show');
        if (this.backdrop) {
            this.backdropElement.classList.add('modal-backdrop');
        }
    };
    RouteModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'route-modal',
                    template: "\n<div class=\"modal route-modal\"\n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened, show: isOpened}\"\n     [ngStyle]=\"{ display: isOpened ? 'block' : 'none' }\"\n     (click)=\"checkClose($event)\">\n    <div [class]=\"'modal-dialog ' + modalClass\" #modalContent>\n        <div class=\"modal-content\" tabindex=\"0\" *ngIf=\"isOpened\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n                <button\n                  *ngIf=\"!hideCloseButton\"\n                  type=\"button\"\n                  class=\"close\"\n                  data-dismiss=\"modal\"\n                  [attr.aria-label]=\"cancelButtonLabel || 'Close'\"\n                  (click)=\"close()\"\n                >\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button\n                  *ngIf=\"cancelButtonLabel\"\n                  type=\"button\"\n                  class=\"btn btn-default\"\n                  data-dismiss=\"modal\"\n                  (click)=\"close()\"\n                  >\n                    {{ cancelButtonLabel }}\n                  </button>\n                <button\n                  *ngIf=\"submitButtonLabel\"\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                  (click)=\"onSubmit.emit(undefined)\"\n                >\n                    {{ submitButtonLabel }}\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    RouteModalComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
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
    return RouteModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
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
    return ModalModule;
}());

export { ModalComponent as Modal, ModalComponent, ModalContentComponent as ModalContent, ModalContentComponent, ModalFooterComponent as ModalFooter, ModalFooterComponent, ModalHeaderComponent as ModalHeader, ModalHeaderComponent, ModalModule, RouteModalComponent as RouteModal, RouteModalComponent };
//# sourceMappingURL=ngx-modal.js.map
