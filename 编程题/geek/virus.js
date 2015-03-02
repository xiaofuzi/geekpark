function virus(n){
    var virus_num = 1,virus_tmp = n - 3;
    if(virus_tmp <=0 )
      { 
      	return n + virus_num ;
      }
    else
      {  
      	virus_num = 4;
      	while(virus_tmp > 0)
      	{
      		virus_num += virus(virus_tmp);
      		virus_tmp -=1;
      	};
      	return virus_num;
      };
}
