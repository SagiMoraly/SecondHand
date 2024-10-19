import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit{
  @Output() changePageEmitter: EventEmitter<number> = new EventEmitter()
  @Input() length!: number
  @Input() pageSize!: number

  showMin = false
  showMax = false

  maxPage = 1
  minPage = 1
  currentPage = 1
  offSet = 3
  pagesDisplay:number[] = []

  ngOnInit(): void {
    if(this.length != 0){
      this.maxPage = (this.length / this.pageSize)
    }
    this.pagesDisplay = this.getPagesArray()
  }

  changePage(numPage: number){
    if(numPage > this.maxPage || numPage < this.minPage)return;
    this.currentPage = numPage
    this.pagesDisplay = this.getPagesArray()
    this.changePageEmitter.emit(numPage)
  }

  getPagesArray(): number[]{
    const arr = []
    for (let i = this.currentPage - this.offSet; i < this.currentPage + this.offSet + 1; i++) {
      if(i >= this.minPage && i <= this.maxPage)
        arr.push(i)      
    }
    this.showMin = arr.includes(this.minPage) ? false : true
    this.showMax = arr.includes(this.maxPage) ? false : true

    return arr
  }
}