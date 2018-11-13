import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import * as faker from 'faker';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'hcl-ers-comments',
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('500ms cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(300, animateChild()))
      ]),
    ])
  ],
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title>Breed <b> {{label | titlecase}} </b></mat-card-title>
      <mat-card-subtitle>Comments</mat-card-subtitle>
    </mat-card-header>
    <mat-list [@list] role="list">
      <ng-template  let-item let-i="index" let-last="last" ngFor [ngForOf]="[0,1,2,3,4,5,6,7,8,9]">
        <mat-list-item [@items] role="listitem">
          <img matListAvatar src="http://lorempixel.com/40/40/people/{{i}}" />
          <h3 matLine class="cursor-pointer"> {{getName(i)}} </h3>
          <p matLine>
              <span class="text-wrap">
              {{getComment(i)}}
              </span>
            </p>
        </mat-list-item>
        <mat-divider *ngIf="!last" [inset]="true"></mat-divider>
      </ng-template>
    </mat-list>
  </mat-card>
  
  `,
  styles: [
    `
      button {
        border: solid 3px;
        padding: 8px 10px;
        background: #bada55;
        font-size: 20px;
      }
    `
  ]
  // encapsulation: ViewEncapsulation.Native
})
export class CommentsComponent implements OnInit {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;
  public names: Array<string> = new Array<string>();
  public comments: Array<string> = new Array<string>();
  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
  

  constructor() {}

  ngOnInit() {
    for(let i=0;i<10;i++) {
      this.names.push(this.getRandomName());
      this.comments.push(this.getRandomComment());
    }
  }

  public getName(i: number){
    return this.names[i];
  }

  public getComment(i: number) {
    return this.comments[i];
  }

  private getRandomName() {
    return faker.fake("{{name.suffix}} {{name.lastName}}, {{name.firstName}}")
  }

  private getRandomComment() {
    return faker.fake("{{lorem.paragraph}}");
  }
}
