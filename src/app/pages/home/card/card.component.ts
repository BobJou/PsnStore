import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() imagem:string = ""
  @Input() gameLabel:string= ""
  @Input() cardPrice: string = ""
  @Input() gameType: string = ""
  ngOnInit(): void {
    ;
  }

}
