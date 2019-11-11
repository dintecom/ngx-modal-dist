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
        this.cdr.detectChanges();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vZGFsLyIsInNvdXJjZXMiOlsibGliL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFTRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFOakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUFTRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7QUE0REQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUEwRHpCLFlBQTZCLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBakQ1QyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUdyQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFNM0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFheEIsV0FBTSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2pDLFlBQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7UUFNbkMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7SUFNRCxXQUFXO1FBQ1Qs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcURUO2FBQ0Y7Ozs7WUFuRkMsaUJBQWlCOzs7eUJBeUZoQixLQUFLOzRCQUdMLEtBQUs7a0NBR0wsS0FBSztvQkFHTCxLQUFLOzhCQUdMLEtBQUs7Z0NBR0wsS0FBSztnQ0FHTCxLQUFLO3FCQU9MLE1BQU07c0JBR04sTUFBTTt1QkFHTixNQUFNO3dCQWFOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBNUN4QyxvQ0FDMEI7O0lBRTFCLHVDQUM0Qjs7SUFFNUIsNkNBQ2tDOztJQUVsQywrQkFDcUI7O0lBRXJCLHlDQUMrQjs7SUFFL0IsMkNBQ2lDOztJQUVqQywyQ0FDaUM7O0lBTWpDLGdDQUN3Qzs7SUFFeEMsaUNBQ3lDOztJQUV6QyxrQ0FDMEM7O0lBTTFDLGtDQUF3Qjs7SUFNeEIsbUNBQzZCOzs7OztJQUU3Qix5Q0FBcUM7Ozs7O0lBTXpCLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRlbnRDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb290ZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibW9kYWxcIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICNtb2RhbFJvb3RcbiAgICAgIChrZXlkb3duLmVzYyk9XCJjbG9zZU9uRXNjYXBlID8gY2xvc2UoKSA6IDBcIlxuICAgICAgW25nQ2xhc3NdPVwieyBpbjogaXNPcGVuZWQsIGZhZGU6IGlzT3BlbmVkLCBzaG93OiBpc09wZW5lZCB9XCJcbiAgICAgIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaXNPcGVuZWQgPyAnYmxvY2snIDogJ25vbmUnIH1cIlxuICAgICAgKG1vdXNlZG93bik9XCJjaGVja0Nsb3NlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiBbbmdDbGFzc109XCJtb2RhbENsYXNzXCIgI21vZGFsQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImlzT3BlbmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlQ2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJjYW5jZWxCdXR0b25MYWJlbCB8fCAnQ2xvc2UnXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cImNhbmNlbEJ1dHRvbkxhYmVsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGNhbmNlbEJ1dHRvbkxhYmVsIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJzdWJtaXRCdXR0b25MYWJlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdC5lbWl0KHVuZGVmaW5lZClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBzdWJtaXRCdXR0b25MYWJlbCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElucHV0c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgQElucHV0KClcbiAgcHVibGljIG1vZGFsQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoaWRlQ2xvc2VCdXR0b24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3VibWl0QnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE91dHB1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHVibGljIHByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHB1YmxpYyBpc09wZW5lZCA9IGZhbHNlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBAVmlld0NoaWxkKCdtb2RhbFJvb3QnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgbW9kYWxSb290OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENvbnN0cnVjdG9yXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmNyZWF0ZUJhY2tEcm9wKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAvbW9kYWwtb3BlblxcYi8sXG4gICAgICAnJ1xuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHlcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFB1YmxpYyBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuZWQpIHJldHVybjtcblxuICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMub25PcGVuLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5tb2RhbFJvb3QubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSAnIG1vZGFsLW9wZW4nO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNsb3NlKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbmVkKSByZXR1cm47XG5cbiAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoYXJncyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiYgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgL21vZGFsLW9wZW5cXGIvLFxuICAgICAgJydcbiAgICApO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPT09IHRydWUgJiZcbiAgICAgIHRoaXMubW9kYWxSb290Lm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGNyZWF0ZUJhY2tEcm9wKCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJhY2tkcm9wJykpIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWJhY2tkcm9wJyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1iYWNrZHJvcCcpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==