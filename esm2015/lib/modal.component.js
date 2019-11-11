/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
export class ModalHeaderComponent {
}
ModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal-header',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
export class ModalContentComponent {
}
ModalContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal-content',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
export class ModalFooterComponent {
}
ModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'modal-footer',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
export class ModalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vZGFsLyIsInNvdXJjZXMiOlsibGliL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFTRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFOakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFTRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUE0REQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUEwRHpCLFlBQTZCLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakQ1QyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUdyQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFNM0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFheEIsV0FBTSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2pDLFlBQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7UUFNbkMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7SUFNRCxXQUFXO1FBQ1Qs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Ozs7Ozs7Ozs7OztHQXFEVDthQUNGOzs7O1lBbkZDLGlCQUFpQjs7O3lCQXlGaEIsS0FBSzs0QkFHTCxLQUFLO2tDQUdMLEtBQUs7b0JBR0wsS0FBSzs4QkFHTCxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSztxQkFPTCxNQUFNO3NCQUdOLE1BQU07dUJBR04sTUFBTTt3QkFhTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTVDeEMsb0NBQzBCOztJQUUxQix1Q0FDNEI7O0lBRTVCLDZDQUNrQzs7SUFFbEMsK0JBQ3FCOztJQUVyQix5Q0FDK0I7O0lBRS9CLDJDQUNpQzs7SUFFakMsMkNBQ2lDOztJQU1qQyxnQ0FDd0M7O0lBRXhDLGlDQUN5Qzs7SUFFekMsa0NBQzBDOztJQU0xQyxrQ0FBd0I7O0lBTXhCLG1DQUM2Qjs7Ozs7SUFFN0IseUNBQXFDOzs7OztJQU16Qiw2QkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlckNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb2RhbC1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb250ZW50Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm1vZGFsXCJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAjbW9kYWxSb290XG4gICAgICAoa2V5ZG93bi5lc2MpPVwiY2xvc2VPbkVzY2FwZSA/IGNsb3NlKCkgOiAwXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgaW46IGlzT3BlbmVkLCBmYWRlOiBpc09wZW5lZCwgc2hvdzogaXNPcGVuZWQgfVwiXG4gICAgICBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGlzT3BlbmVkID8gJ2Jsb2NrJyA6ICdub25lJyB9XCJcbiAgICAgIChtb3VzZWRvd24pPVwiY2hlY2tDbG9zZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgW25nQ2xhc3NdPVwibW9kYWxDbGFzc1wiICNtb2RhbENvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgdGFiaW5kZXg9XCIwXCIgKm5nSWY9XCJpc09wZW5lZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oND5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCIhaGlkZUNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIlxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiY2FuY2VsQnV0dG9uTGFiZWwgfHwgJ0Nsb3NlJ1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtb2RhbC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJjYW5jZWxCdXR0b25MYWJlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBjYW5jZWxCdXR0b25MYWJlbCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICpuZ0lmPVwic3VibWl0QnV0dG9uTGFiZWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQuZW1pdCh1bmRlZmluZWQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgc3VibWl0QnV0dG9uTGFiZWwgfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJbnB1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb2RhbENsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjbG9zZU9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaGlkZUNsb3NlQnV0dG9uID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNhbmNlbEJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN1Ym1pdEJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBPdXRwdXRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFB1YmxpYyBwcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwdWJsaWMgaXNPcGVuZWQgPSBmYWxzZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgQFZpZXdDaGlsZCgnbW9kYWxSb290JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIG1vZGFsUm9vdDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGJhY2tkcm9wRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDb25zdHJ1Y3RvclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5jcmVhdGVCYWNrRHJvcCgpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGUgTWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgL21vZGFsLW9wZW5cXGIvLFxuICAgICAgJydcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ICYmXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5XG4gICAgKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFB1YmxpYyBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQpIHJldHVybjtcblxuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMub25PcGVuLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5tb2RhbFJvb3QubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSAnIG1vZGFsLW9wZW4nO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNsb3NlKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbmVkKSByZXR1cm47XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgL21vZGFsLW9wZW5cXGIvLFxuICAgICAgJydcbiAgICApO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPT09IHRydWUgJiZcbiAgICAgIHRoaXMubW9kYWxSb290Lm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGNyZWF0ZUJhY2tEcm9wKCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJhY2tkcm9wJykpIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWJhY2tkcm9wJyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1iYWNrZHJvcCcpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==