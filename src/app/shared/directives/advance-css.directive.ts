import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceCss]'
})
export class AdvanceCssDirective implements OnInit {

  @Input()  hoverColor : string = '';
  @HostBinding('style.backgroundColor') bgColor : string = "yellow"; 

  constructor(private eleRef: ElementRef, private rendrer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.eleRef.nativeElement);
    console.log(this.rendrer);
    // this.rendrer.setStyle(this.eleRef.nativeElement, "background-color", "orange");
    this.rendrer.setStyle(this.eleRef.nativeElement, "color", "blue");
    this.rendrer.setStyle(this.eleRef.nativeElement, "padding", "30px");
    
    // this.rendrer.addClass(this.eleRef.nativeElement, "alert");
    // this.rendrer.addClass(this.eleRef.nativeElement, "alert-danger");
  }

  @HostListener('mouseover') zaq(){
    // this.rendrer.setStyle(this.eleRef.nativeElement, "background-color", this.hoverColor);    
    // this.bgColor = this.hoverColor;
    this.bgColor = 'violet'
    this.rendrer.setStyle(this.eleRef.nativeElement,"color", "red");
    this.rendrer.setStyle(this.eleRef.nativeElement, "border-radius", "30px");
    this.rendrer.setStyle(this.eleRef.nativeElement, "outline", "7px solid blue")
  }

  @HostListener('mouseout') fd(){
    this.rendrer.setStyle(this.eleRef.nativeElement, "background-color", 'green');
    this.rendrer.setStyle(this.eleRef.nativeElement, "color", "orange")
    this.rendrer.setStyle(this.eleRef.nativeElement, "border-radius", "70px");
    this.rendrer.setStyle(this.eleRef.nativeElement, "outline", "22px solid purple")
  }



}
