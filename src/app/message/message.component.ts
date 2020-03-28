import { Component, OnInit } from '@angular/core';
import { MeassageService } from '../meassage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MeassageService) { }

  ngOnInit(): void {
  }

}
