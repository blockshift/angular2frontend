import {Component,OnInit} from '@angular/core';
import { AppService } from '~/./../app/app.service';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {

  
  constructor(private AppService: AppService) {
      }


ngOnInit(){
      var blockheight = this.getStats();
      	};	
   
private blockdata = [];
BlockchainHeight:any;

    getStats(){
        this.AppService.getblockchaininfo().subscribe(data=>{
                var decentralizeddata = JSON.parse(data["_body"]);     
        	console.log(decentralizeddata.height.low);
                this.BlockchainHeight=decentralizeddata.height.low;
                var dummy = this.BlockchainHeight;
        });

               this.getblockdata(this.BlockchainHeight);
};
   getblockdata(blockheight){
             console.log("Print blockheight",blockheight);
             for(var i =1;i< 3 ; i++ ){
            this.AppService.fetchblock(i).subscribe(data=>{
               console.log("data here",data);
             var blockdata = JSON.parse(data["_body"]);
              
             this.blockdata.push(blockdata.header.data_hash);

             console.log("This is block data",this.blockdata);

});


};
};
}

 

