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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vZGFsLyIsInNvdXJjZXMiOlsibGliL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO0lBTW1DLENBQUM7O2dCQU5uQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7SUFDa0MsMkJBQUM7Q0FBQSxBQU5wQyxJQU1vQztTQUF2QixvQkFBb0I7QUFFakM7SUFBQTtJQU1vQyxDQUFDOztnQkFOcEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7O0lBQ21DLDRCQUFDO0NBQUEsQUFOckMsSUFNcUM7U0FBeEIscUJBQXFCO0FBRWxDO0lBQUE7SUFNbUMsQ0FBQzs7Z0JBTm5DLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOztJQUNrQywyQkFBQztDQUFBLEFBTnBDLElBTW9DO1NBQXZCLG9CQUFvQjtBQUVqQztJQStHRSw0RUFBNEU7SUFDNUUsY0FBYztJQUNkLDRFQUE0RTtJQUU1RSx3QkFBNkIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqRDVDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBR3JCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQU0zQixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQWF4QixXQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHakMsWUFBTyxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxD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QUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOztnQkExTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsKzBEQXFEVDtpQkFDRjs7OztnQkFuRkMsaUJBQWlCOzs7NkJBeUZoQixLQUFLO2dDQUdMLEtBQUs7c0NBR0wsS0FBSzt3QkFHTCxLQUFLO2tDQUdMLEtBQUs7b0NBR0wsS0FBSztvQ0FHTCxLQUFLO3lCQU9MLE1BQU07MEJBR04sTUFBTTsyQkFHTixNQUFNOzRCQWFOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWlGMUMscUJBQUM7Q0FBQSxBQTNMRCxJQTJMQztTQWxJWSxjQUFjOzs7SUFLekIsb0NBQzBCOztJQUUxQix1Q0FDNEI7O0lBRTVCLDZDQUNrQzs7SUFFbEMsK0JBQ3FCOztJQUVyQix5Q0FDK0I7O0lBRS9CLDJDQUNpQzs7SUFFakMsMkNBQ2lDOztJQU1qQyxnQ0FDd0M7O0lBRXhDLGlDQUN5Qzs7SUFFekMsa0NBQzBDOztJQU0xQyxrQ0FBd0I7O0lBTXhCLG1DQUM2Qjs7Ozs7SUFFN0IseUNBQXFDOzs7OztJQU16Qiw2QkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlckNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbC1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb250ZW50Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm1vZGFsXCJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAjbW9kYWxSb290XG4gICAgICAoa2V5ZG93bi5lc2MpPVwiY2xvc2VPbkVzY2FwZSA/IGNsb3NlKCkgOiAwXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgaW46IGlzT3BlbmVkLCBmYWRlOiBpc09wZW5lZCwgc2hvdzogaXNPcGVuZWQgfVwiXG4gICAgICBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGlzT3BlbmVkID8gJ2Jsb2NrJyA6ICdub25lJyB9XCJcbiAgICAgIChtb3VzZWRvd24pPVwiY2hlY2tDbG9zZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgW25nQ2xhc3NdPVwibW9kYWxDbGFzc1wiICNtb2RhbENvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgdGFiaW5kZXg9XCIwXCIgKm5nSWY9XCJpc09wZW5lZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oND5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCIhaGlkZUNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIlxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiY2FuY2VsQnV0dG9uTGFiZWwgfHwgJ0Nsb3NlJ1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtb2RhbC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJjYW5jZWxCdXR0b25MYWJlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBjYW5jZWxCdXR0b25MYWJlbCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICpuZ0lmPVwic3VibWl0QnV0dG9uTGFiZWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQuZW1pdCh1bmRlZmluZWQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgc3VibWl0QnV0dG9uTGFiZWwgfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJbnB1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb2RhbENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjbG9zZU9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaGlkZUNsb3NlQnV0dG9uID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNhbmNlbEJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN1Ym1pdEJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBPdXRwdXRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFB1YmxpYyBwcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwdWJsaWMgaXNPcGVuZWQgPSBmYWxzZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgQFZpZXdDaGlsZCgnbW9kYWxSb290JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIG1vZGFsUm9vdDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGJhY2tkcm9wRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDb25zdHJ1Y3RvclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5jcmVhdGVCYWNrRHJvcCgpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGUgTWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgL21vZGFsLW9wZW5cXGIvLFxuICAgICAgJydcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ICYmXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5XG4gICAgKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFB1YmxpYyBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQpIHJldHVybjtcblxuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMub25PcGVuLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5tb2RhbFJvb3QubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSAnIG1vZGFsLW9wZW4nO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNsb3NlKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbmVkKSByZXR1cm47XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgL21vZGFsLW9wZW5cXGIvLFxuICAgICAgJydcbiAgICApO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPT09IHRydWUgJiZcbiAgICAgIHRoaXMubW9kYWxSb290Lm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGNyZWF0ZUJhY2tEcm9wKCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJhY2tkcm9wJykpIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWJhY2tkcm9wJyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1iYWNrZHJvcCcpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==