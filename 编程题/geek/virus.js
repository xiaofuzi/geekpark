function virusAdd(n){
        if( n < 4){
          return 1;
        }else{
          return  virusAdd(n -1)+virusAdd(n - 3);
        }
}

function virusAll(n){
  if (n <= 3)
              return virus_num = n + 1; 
              else{
                return virusAdd(n) + 2*virusAdd(n-1)+virusAdd(n-2)+virusAdd(n-3);
              }
}