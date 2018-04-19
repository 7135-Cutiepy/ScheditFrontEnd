import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pref-bar',
  templateUrl: './pref-bar.component.html',
  styleUrls: ['./pref-bar.component.css']
})
export class PrefBarComponent implements OnInit {
    min;
    max;
    pref;
    
    message: any = 0;
    @Input() dataRequested;
    @Output() messageEvent = new EventEmitter<any>();
    
    sendInfo() {
        this.messageEvent.emit(this.message);
    }
    
  ngOnChanges(changes: SimpleChanges){
    this.message = this.getPrefs();
    this.sendInfo();

  }

  constructor() {
    this.min = 0;
    this.max = 21;
    this.pref = 0;
  }

  ngOnInit() {
  }

  setMin(value) {
    this.min = value;
  }
  
  setMax(value) {
    this.max = value;
  }
  
  
  setPref(value) {
    this.pref = value;
  }
  
  public getPrefs() {
    return [this.min, this.max]
  }
}
