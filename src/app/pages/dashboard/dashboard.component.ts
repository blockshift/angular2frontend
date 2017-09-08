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
firstpartofCurrentDataHash:any;
secondpartofCurrentDataHash:any;
    getStats(){
        this.AppService.getblockchaininfo().subscribe(data=>{
                var decentralizeddata = JSON.parse(data["_body"]);     
        	console.log(decentralizeddata.height.low);
                var currentblockhash = decentralizeddata.currentBlockHash.buffer.data.toString('hex');
		console.log(currentblockhash);	        
        	this.BlockchainHeight=decentralizeddata.height.low;
                var wholeblockhash=currentblockhash.replace(/,/g, '');
		var firstpartofblockhash=wholeblockhash.substring(0,100);
		var secondpartofblockhash=wholeblockhash.substring(101,163);
		console.log(secondpartofblockhash);
		this.firstpartofCurrentDataHash=firstpartofblockhash;
		this.secondpartofCurrentDataHash=secondpartofblockhash;	
        });
    };


}
