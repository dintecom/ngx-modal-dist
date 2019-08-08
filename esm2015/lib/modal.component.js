/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
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
    constructor() {
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
ModalComponent.ctorParameters = () => [];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vZGFsLyIsInNvdXJjZXMiOlsibGliL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU0sT0FBTyxvQkFBb0I7OztZQU5oQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7R0FFVDthQUNGOztBQVNELE1BQU0sT0FBTyxxQkFBcUI7OztZQU5qQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7R0FFVDthQUNGOztBQVNELE1BQU0sT0FBTyxvQkFBb0I7OztZQU5oQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7R0FFVDthQUNGOztBQTRERCxNQUFNLE9BQU8sY0FBYzs7OztJQTBEekI7UUFqRE8sa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFHckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBTTNCLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7O1FBYXhCLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdqQyxZQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHbEMsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1FBTW5DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFnQnRCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBTUQsV0FBVztRQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxD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QWFOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBNUN4QyxvQ0FDMEI7O0lBRTFCLHVDQUM0Qjs7SUFFNUIsNkNBQ2tDOztJQUVsQywrQkFDcUI7O0lBRXJCLHlDQUMrQjs7SUFFL0IsMkNBQ2lDOztJQUVqQywyQ0FDaUM7O0lBTWpDLGdDQUN3Qzs7SUFFeEMsaUNBQ3lDOztJQUV6QyxrQ0FDMEM7O0lBTTFDLGtDQUF3Qjs7SUFNeEIsbUNBQzZCOzs7OztJQUU3Qix5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vZGFsLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRlbnRDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb290ZXJDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibW9kYWxcIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICNtb2RhbFJvb3RcbiAgICAgIChrZXlkb3duLmVzYyk9XCJjbG9zZU9uRXNjYXBlID8gY2xvc2UoKSA6IDBcIlxuICAgICAgW25nQ2xhc3NdPVwieyBpbjogaXNPcGVuZWQsIGZhZGU6IGlzT3BlbmVkLCBzaG93OiBpc09wZW5lZCB9XCJcbiAgICAgIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaXNPcGVuZWQgPyAnYmxvY2snIDogJ25vbmUnIH1cIlxuICAgICAgKG1vdXNlZG93bik9XCJjaGVja0Nsb3NlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiBbbmdDbGFzc109XCJtb2RhbENsYXNzXCIgI21vZGFsQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImlzT3BlbmVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlQ2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJjYW5jZWxCdXR0b25MYWJlbCB8fCAnQ2xvc2UnXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cImNhbmNlbEJ1dHRvbkxhYmVsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGNhbmNlbEJ1dHRvbkxhYmVsIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJzdWJtaXRCdXR0b25MYWJlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdC5lbWl0KHVuZGVmaW5lZClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBzdWJtaXRCdXR0b25MYWJlbCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElucHV0c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgQElucHV0KClcbiAgcHVibGljIG1vZGFsQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2xvc2VPbkVzY2FwZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoaWRlQ2xvc2VCdXR0b24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuY2VsQnV0dG9uTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3VibWl0QnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE91dHB1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHVibGljIHByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHB1YmxpYyBpc09wZW5lZCA9IGZhbHNlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBAVmlld0NoaWxkKCdtb2RhbFJvb3QnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgbW9kYWxSb290OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgYmFja2Ryb3BFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENvbnN0cnVjdG9yXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZUJhY2tEcm9wKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXG4gICAgICAvbW9kYWwtb3BlblxcYi8sXG4gICAgICAnJ1xuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHlcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHVibGljIE1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIG9wZW4oLi4uYXJnczogYW55W10pIHtcbiAgICBpZiAodGhpcy5pc09wZW5lZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5vbk9wZW4uZW1pdChhcmdzKTtcbiAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCAmJiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm1vZGFsUm9vdC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgbW9kYWwtb3Blbic7XG4gIH1cblxuICBjbG9zZSguLi5hcmdzOiBhbnlbXSkge1xuICAgIGlmICghdGhpcy5pc09wZW5lZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMub25DbG9zZS5lbWl0KGFyZ3MpO1xuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ICYmIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgIC9tb2RhbC1vcGVuXFxiLyxcbiAgICAgICcnXG4gICAgKTtcbiAgfVxuXG4gIGNoZWNrQ2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPT09IHRydWUgJiZcbiAgICAgIHRoaXMubW9kYWxSb290Lm5hdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUHJpdmF0ZSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGNyZWF0ZUJhY2tEcm9wKCkge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJhY2tkcm9wJykpIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWJhY2tkcm9wJyk7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1iYWNrZHJvcCcpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==