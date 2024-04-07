import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
// implements
//   OnInit,
//   OnChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
export class ServerElementComponent {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true })
  header: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  paragraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(
      '-----text content--------',
      this.header.nativeElement.textContent
    );
    console.log(
      '-----paragraph content--------',
      this.paragraph.nativeElement.textContent
    );
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called!  ', changes);
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck callded!');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called!');
  //   console.log(
  //     '-----text content--------',
  //     this.header.nativeElement.textContent
  //   );
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called!');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called!');
  //   console.log(
  //     '-----paragraph content--------',
  //     this.paragraph.nativeElement.textContent
  //   );
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called!');
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy called!');
  // }
}
