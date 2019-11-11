/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
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
export { ModalHeaderComponent };
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
export { ModalContentComponent };
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
export { ModalFooterComponent };
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
export { ModalComponent };
if (false) {
    /** @type {?} */
    ModalComponent.prototype.modalClass;
    /** @type {?} */
    ModalComponent.prototype.closeOnEscape;
    /** @type {?} */
    ModalComponent.prototype.closeOnOutsideClick;
    /** @type {?} */
    ModalComponent.prototype.title;
    /** @type {?} */
    ModalComponent.prototype.hideCloseButton;
    /** @type {?} */
    ModalComponent.prototype.cancelButtonLabel;
    /** @type {?} */
    ModalComponent.prototype.submitButtonLabel;
    /** @type {?} */
    ModalComponent.prototype.onOpen;
    /** @type {?} */
    ModalComponent.prototype.onClose;
    /** @type {?} */
    ModalComponent.prototype.onSubmit;
    /** @type {?} */
    ModalComponent.prototype.isOpened;
    /** @type {?} */
    ModalComponent.prototype.modalRoot;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.backdropElement;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vZGFsLyIsInNvdXJjZXMiOlsibGliL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO0lBTW1DLENBQUM7O2dCQU5uQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7SUFDa0MsMkJBQUM7Q0FBQSxBQU5wQyxJQU1vQztTQUF2QixvQkFBb0I7QUFFakM7SUFBQTtJQU1vQyxDQUFDOztnQkFOcEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7O0lBQ21DLDRCQUFDO0NBQUEsQUFOckMsSUFNcUM7U0FBeEIscUJBQXFCO0FBRWxDO0lBQUE7SUFNbUMsQ0FBQzs7Z0JBTm5DLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOztJQUNrQywyQkFBQztDQUFBLEFBTnBDLElBTW9DO1NBQXZCLG9CQUFvQjtBQUVqQztJQStHRSw0RUFBNEU7SUFDNUUsY0FBYztJQUNkLDRFQUE0RTtJQUU1RSx3QkFBNkIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqRDVDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBR3JCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQU0zQixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQWF4QixXQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHakMsWUFBTyxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2xDLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztRQU1uQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBZ0J0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSxvQkFBb0I7SUFDcEIsNEVBQTRFOzs7Ozs7O0lBRTVFLG9DQUFXOzs7Ozs7O0lBQVg7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ3ZELGNBQWMsRUFDZCxFQUFFLENBQ0gsQ0FBQztRQUNGLElBQ0UsSUFBSSxDQUFDLGVBQWU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLElBQUksRUFDakQ7WUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0RUFBNEU7SUFDNUUsaUJBQWlCO0lBQ2pCLDRFQUE0RTs7Ozs7Ozs7SUFFNUUsNkJBQUk7Ozs7Ozs7O0lBQUo7UUFBQSxpQkFTQztRQVRJLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQXBDLENBQW9DLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCw4QkFBSzs7OztJQUFMO1FBQU0sY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4RSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ3ZELGNBQWMsRUFDZCxFQUFFLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsS0FBaUI7UUFDMUIsSUFDRSxJQUFJLENBQUMsbUJBQW1CLEtBQUssSUFBSTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUM3QztZQUNBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEIsNEVBQTRFOzs7Ozs7OztJQUVwRSx1Q0FBYzs7Ozs7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7O2dCQTNMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSwrMERBcURUO2lCQUNGOzs7O2dCQW5GQyxpQkFBaUI7Ozs2QkF5RmhCLEtBQUs7Z0NBR0wsS0FBSztzQ0FHTCxLQUFLO3dCQUdMLEtBQUs7a0NBR0wsS0FBSztvQ0FHTCxLQUFLO29DQUdMLEtBQUs7eUJBT0wsTUFBTTswQkFHTixNQUFNOzJCQUdOLE1BQU07NEJBYU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBa0YxQyxxQkFBQztDQUFBLEFBNUxELElBNExDO1NBbklZLGNBQWM7OztJQUt6QixvQ0FDMEI7O0lBRTFCLHVDQUM0Qjs7SUFFNUIsNkNBQ2tDOztJQUVsQywrQkFDcUI7O0lBRXJCLHlDQUMrQjs7SUFFL0IsMkNBQ2lDOztJQUVqQywyQ0FDaUM7O0lBTWpDLGdDQUN3Qzs7SUFFeEMsaUNBQ3lDOztJQUV6QyxrQ0FDMEM7O0lBTTFDLGtDQUF3Qjs7SUFNeEIsbUNBQzZCOzs7OztJQUU3Qix5Q0FBcUM7Ozs7O0lBTXpCLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRlbnRDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb290ZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibW9kYWxcIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICNtb2RhbFJvb3RcbiAgICAgIChrZXlkb3duLmVzYyk9XCJjbG9zZU9uRXNjYXBlID8gY2xvc2UoKSA6IDBcIlxuICAgICAgW25nQ2xhc3NdPVwieyBpbjogaXNPcGVuZWQsIGZhZGU6IGlzT3BlbmVkLCBzaG93OiBpc09wZW5lZCB9XCJcbiAgICAgIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaXNPcGVuZWQgPyAnYmxvY2snIDogJ25vbmUnIH1cIlxuICAgICAgKG1vdXNlZG93bik9XCJjaGVja0Nsb3NlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiBbbmdDbGFzc109XCJtb2RhbENsYXNzXCIgI21vZGFsQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImlzT3BlbmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlQ2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJjYW5jZWxCdXR0b25MYWJlbCB8fCAnQ2xvc2UnXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cImNhbmNlbEJ1dHRvbkxhYmVsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGNhbmNlbEJ1dHRvbkxhYmVsIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJzdWJtaXRCdXR0b25MYWJlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdC5lbWl0KHVuZGVmaW5lZClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBzdWJtaXRCdXR0b25MYWJlbCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElucHV0c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgQElucHV0KClcbiAgcHVibGljIG1vZGFsQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoaWRlQ2xvc2VCdXR0b24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3VibWl0QnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE91dHB1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHVibGljIHByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHB1YmxpYyBpc09wZW5lZCA9IGZhbHNlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBAVmlld0NoaWxkKCdtb2RhbFJvb3QnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgbW9kYWxSb290OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENvbnN0cnVjdG9yXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNyZWF0ZUJhY2tEcm9wKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAvbW9kYWwtb3BlblxcYi8sXG4gICAgICAnJ1xuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHlcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFB1YmxpYyBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQpIHJldHVybjtcblxuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMub25PcGVuLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5tb2RhbFJvb3QubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSAnIG1vZGFsLW9wZW4nO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNsb3NlKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbmVkKSByZXR1cm47XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgL21vZGFsLW9wZW5cXGIvLFxuICAgICAgJydcbiAgICApO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPT09IHRydWUgJiZcbiAgICAgIHRoaXMubW9kYWxSb290Lm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGNyZWF0ZUJhY2tEcm9wKCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJhY2tkcm9wJykpIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWJhY2tkcm9wJyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1iYWNrZHJvcCcpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==