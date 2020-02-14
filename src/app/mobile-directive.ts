import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[desktop]'
})
export class MobileDirective implements OnInit {
	ngOnInit(): void {
		this.elRef.nativeElement.classList.add("d-none")
		this.elRef.nativeElement.classList.add("d-sm-block")
	}

	constructor(
		private elRef: ElementRef
	) { }
}