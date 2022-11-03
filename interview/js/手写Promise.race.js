Promise.race = function(args){
    return new Promise((this.resolve,this.reject)=>{
        for(let i=0;i<args.length;i++){
            Promise.resolve(args[i]).then(this.resolve,this.reject)
        }
    })
}