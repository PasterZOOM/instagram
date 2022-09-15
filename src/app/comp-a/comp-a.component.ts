import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from 'src/app/services/beauty-logger.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  value$ = new Observable()

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  addValueHandle() {
    this.valueService.add()
    this.beautyLoggerService.log('add value', 'success')
  }
}
