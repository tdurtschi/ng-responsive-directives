import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
	selector: '[mobile]'
})
export class DesktopDirective implements OnInit {
	ngOnInit(): void {
		this.elRef.nativeElement.classList.add("d-sm-none")
		this.elRef.nativeElement.classList.add("d-block")
	}

	constructor(
		private elRef: ElementRef
	) {
	}
}
