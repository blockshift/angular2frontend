import {Component,OnInit,ViewChild} from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {

  
  constructor(private AppService: AppService) {
      }
@ViewChild('myModal')
    modal: ModalComponent;
     IsVisible=true;

ngOnInit(){
      var blockheight = this.getStats();
      	};	
   
transactionvalidationcode:any;
transactioncreator:any;
BlockchainHeight:any;
enrollmentnumber:any;
publicblockdata=[];
    getStats(){
        this.AppService.getblockchaininfo().subscribe(data=>{
                var decentralizeddata = JSON.parse(data["_body"]);     
        	console.log(decentralizeddata.height.low);
                this.BlockchainHeight=decentralizeddata.height.low;
                var dummy = this.BlockchainHeight;
        });

               this.getblockdata(this.BlockchainHeight);
};



  displaydetail(transactionid){

     console.log("Transaction id from client side",transactionid);

     this.AppService.getdetails(transactionid).subscribe(data=>{
     
     var intermediatedata = JSON.parse(data["_body"]);
     this.transactionvalidationcode=intermediatedata.validationCode;
     this.transactioncreator=intermediatedata["transactionEnvelope"].payload.header.signature_header["creator"].Mspid;
     this.enrollmentnumber=intermediatedata["transactionEnvelope"].payload.data;
     this.modal.open();
     console.log(intermediatedata);
     console.log(this.enrollmentnumber);



}); 


}; 

   

   getblockdata(blockheight){
             console.log("Print blockheight",blockheight);
             for(var i =1;i<= 5 ; i++ ){
            this.AppService.fetchblock(i).subscribe(data=>{
               console.log("data here",data);
             var blockdatas = JSON.parse(data["_body"]);
             console.log("This is block data",blockdatas); 
             this.publicblockdata.push({blocknumber:blockdatas.header.number.low,transactionid:blockdatas.data["data"][0].payload.header.channel_header.tx_id,timestamp:blockdatas.data["data"][0].payload.header.channel_header.timestamp});			
	     
});
            

};
   
};
}

 

