var umbrella={
    color: "pink",
    isOpen: false,
    open: function(){
        if (umbrella.isOpen===true){
            return "The umbrella is already opened!";
        }
        else{
            umbrella.isOpen=true;
            return "julia opens the umbrella";
        }
    }
}