import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-textarea-wrap',
  templateUrl: './textarea-wrap.component.html',
  styleUrls: ['./textarea-wrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaWrapComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}
