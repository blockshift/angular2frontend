import {Component,OnInit} from '@angular/core';
import { AppService } from '~/./../app/app.service';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {

  constructor(private AppService: AppService) {
  };

ngOnInit(){
        this.getStats();
    };

BlockchainHeight:any;
CurrentDataHash:any;


    getStats(){
        this.AppService.getblockchaininfo().subscribe(data=>{
        	console.log(data);
        	this.BlockchainHeight=data;
        	this.CurrentDataHash=data;

        });
    };


}
