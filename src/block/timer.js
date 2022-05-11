class Timer{//timer.js 
receiving = 0;
 sending = 0;
 constructor(){
   
  setInterval(function(){console.log(sending);
  sending++;},100);
 }

  /**
  
    if(receiving !==0){
  
      clearInterval(receiving);
      receiving = 0;
    }};
  */





  /**
  receiving = setInterval(function(){
    if (this.state !== 'open') return;
            this.receiveData()
                .then(() => {
                    // start again
                   
                  
                })
                .catch(() => {


                   
                     
                this.receiving(); //add  no stopping when error packet
                    
                    //this.handleDisconnectError(); //add
                });
            },1 )
            */
 }           
  module.exports = Timer;
 