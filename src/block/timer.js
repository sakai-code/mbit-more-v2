//timer.js 
var receiving = 0;
var sending = 0;
 this.dataReceiving = function(e){



  if(receiving !==0){

    clearInterval(receiving);
    receiving = 0;
  }
  receiving = setInterval(function(){
    if (this.state !== 'open') return;
            this.receiveData()
                .then(() => {
                    // start again
                   
                  
                })
                .catch(() => {


                   
                     
                this.dataReceiving(); //add  no stopping when error packet
                    
                    //this.handleDisconnectError(); //add
                });
            },1 )
 }