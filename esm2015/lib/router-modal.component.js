/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export class RouteModalComponent {
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
if (false) {
    /** @type {?} */
    RouteModalComponent.prototype.cancelUrl;
    /** @type {?} */
    RouteModalComponent.prototype.cancelUrlExtras;
    /** @type {?} */
    RouteModalComponent.prototype.modalClass;
    /** @type {?} */
    RouteModalComponent.prototype.closeOnEscape;
    /** @type {?} */
    RouteModalComponent.prototype.closeOnOutsideClick;
    /** @type {?} */
    RouteModalComponent.prototype.title;
    /** @type {?} */
    RouteModalComponent.prototype.hideCloseButton;
    /** @type {?} */
    RouteModalComponent.prototype.cancelButtonLabel;
    /** @type {?} */
    RouteModalComponent.prototype.submitButtonLabel;
    /** @type {?} */
    RouteModalComponent.prototype.backdrop;
    /** @type {?} */
    RouteModalComponent.prototype.onOpen;
    /** @type {?} */
    RouteModalComponent.prototype.onClose;
    /** @type {?} */
    RouteModalComponent.prototype.onSubmit;
    /** @type {?} */
    RouteModalComponent.prototype.modalRoot;
    /** @type {?} */
    RouteModalComponent.prototype.isOpened;
    /**
     * @type {?}
     * @private
     */
    RouteModalComponent.prototype.backdropElement;
    /**
     * @type {?}
     * @private
     */
    RouteModalComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RouteModalComponent.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tb2RhbC8iLCJzb3VyY2VzIjpbImxpYi9yb3V0ZXItbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUF5RHpELE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBZ0U1QixZQUFvQixNQUFjLEVBQ2QsY0FBOEI7UUFEOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpEM0Msa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFHckIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBTTNCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBU3hCLGFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7UUFPaEIsV0FBTSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2pDLFlBQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFTbkMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVVwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7OztJQU1ELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQzNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7Ozs7Ozs7O0lBTUQsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNmLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFOUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDWixnQkFBZ0IsR0FBcUIsRUFBRztZQUM1QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7b0JBQy9CLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2lCQUNyRDtnQkFDRCxnQkFBZ0IsR0FBRyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNyRjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7Ozs7Ozs7O0lBTU0sVUFBVSxDQUFDLEtBQWlCO1FBQy9CLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDOzs7WUFoTUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1EYjthQUNBOzs7O1lBeERRLE1BQU07WUFBRSxjQUFjOzs7d0JBK0QxQixLQUFLOzhCQUdMLEtBQUs7eUJBR0wsS0FBSzs0QkFHTCxLQUFLO2tDQUdMLEtBQUs7b0JBR0wsS0FBSzs4QkFHTCxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSzt1QkFHTCxLQUFLO3FCQU9MLE1BQU07c0JBR04sTUFBTTt1QkFHTixNQUFNO3dCQU9OLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBL0N4Qyx3Q0FDd0I7O0lBRXhCLDhDQUNpRTs7SUFFakUseUNBQzBCOztJQUUxQiw0Q0FDNEI7O0lBRTVCLGtEQUNrQzs7SUFFbEMsb0NBQ3FCOztJQUVyQiw4Q0FDK0I7O0lBRS9CLGdEQUNpQzs7SUFFakMsZ0RBQ2lDOztJQUVqQyx1Q0FDdUI7O0lBTXZCLHFDQUN3Qzs7SUFFeEMsc0NBQ3lDOztJQUV6Qyx1Q0FDMEM7O0lBTTFDLHdDQUM2Qjs7SUFFN0IsdUNBQXdCOzs7OztJQUV4Qiw4Q0FBcUM7Ozs7O0lBTXpCLHFDQUFzQjs7Ozs7SUFDdEIsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm91dGUtbW9kYWwnLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwibW9kYWwgcm91dGUtbW9kYWxcIlxuICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICNtb2RhbFJvb3RcbiAgICAgKGtleWRvd24uZXNjKT1cImNsb3NlT25Fc2NhcGUgPyBjbG9zZSgpIDogMFwiXG4gICAgIFtuZ0NsYXNzXT1cInsgaW46IGlzT3BlbmVkLCBmYWRlOiBpc09wZW5lZCwgc2hvdzogaXNPcGVuZWR9XCJcbiAgICAgW25nU3R5bGVdPVwieyBkaXNwbGF5OiBpc09wZW5lZCA/ICdibG9jaycgOiAnbm9uZScgfVwiXG4gICAgIChjbGljayk9XCJjaGVja0Nsb3NlKCRldmVudClcIj5cbiAgICA8ZGl2IFtjbGFzc109XCInbW9kYWwtZGlhbG9nICcgKyBtb2RhbENsYXNzXCIgI21vZGFsQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImlzT3BlbmVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm1vZGFsLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlQ2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiY2FuY2VsQnV0dG9uTGFiZWwgfHwgJ0Nsb3NlJ1wiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJtb2RhbC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibW9kYWwtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2FuY2VsQnV0dG9uTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7IGNhbmNlbEJ1dHRvbkxhYmVsIH19XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cInN1Ym1pdEJ1dHRvbkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0LmVtaXQodW5kZWZpbmVkKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyBzdWJtaXRCdXR0b25MYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSW5wdXRzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2FuY2VsVXJsOiBhbnlbXTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNhbmNlbFVybEV4dHJhczogeyByZWxhdGl2ZTogYm9vbGVhbiB9ICYgTmF2aWdhdGlvbkV4dHJhcztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vZGFsQ2xhc3M6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2xvc2VPbk91dHNpZGVDbGljayA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGlkZUNsb3NlQnV0dG9uID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5jZWxCdXR0b25MYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3VibWl0QnV0dG9uTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGJhY2tkcm9wID0gdHJ1ZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPdXRwdXRzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIEBWaWV3Q2hpbGQoJ21vZGFsUm9vdCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIG1vZGFsUm9vdDogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBpc09wZW5lZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBiYWNrZHJvcEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbnN0cnVjdG9yXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tEcm9wKCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIExpZmVjeWNsZSBNZXRob2RzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL21vZGFsLW9wZW5cXGIvLCAnJyk7XG4gICAgICAgIGlmICh0aGlzLmJhY2tkcm9wRWxlbWVudCAmJiB0aGlzLmJhY2tkcm9wRWxlbWVudC5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQdWJsaWMgTWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIG9wZW4oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmlzT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbk9wZW4uZW1pdChhcmdzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMubW9kYWxSb290Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgbW9kYWwtb3Blbic7XG4gICAgfVxuXG4gICAgY2xvc2UoLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbmVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdChhcmdzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKC9tb2RhbC1vcGVuXFxiLywgJycpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbmNlbFVybCkge1xuICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7IH07XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5jZWxVcmxFeHRyYXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5jZWxVcmxFeHRyYXMucmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkV4dHJhcy5yZWxhdGl2ZVRvID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkV4dHJhcyA9IChPYmplY3QgYXMgYW55KS5hc3NpZ24obmF2aWdhdGlvbkV4dHJhcywgdGhpcy5jYW5jZWxVcmxFeHRyYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodGhpcy5jYW5jZWxVcmwsIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHB1YmxpYyBjaGVja0Nsb3NlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgPT09IHRydWUgJiYgdGhpcy5tb2RhbFJvb3QubmF0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJhY2tEcm9wKCkge1xuICAgICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luJyk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgaWYgKHRoaXMuYmFja2Ryb3ApIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tkcm9wJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=