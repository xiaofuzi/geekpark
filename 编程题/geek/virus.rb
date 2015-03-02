 class Virus
 	@@virus_num = 1
 	def virus(x)
 		virus_tmp = x-3
 		#当天数小于４的情况
 		if(virus_tmp<=0)
 			return  1  +  x
 		#当天数大于４的情况
 		else
 			#计算子病毒的分裂情况时会包含自身，所以这里初始值为最后的三天所分裂的子病毒加上母体
 			virus_num = 4
   			while (virus_tmp>0) 
   				
   				virus_children = virus(virus_tmp)
     				virus_num += virus_children
   			 	virus_tmp -=1
   			 	
			end
			return virus_num
		end
	end
end

virus = Virus.new

puts virus.virus(6)
