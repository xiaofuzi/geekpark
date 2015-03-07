 class Virus
 	@@virus_num = 0
       def virusAll(n)
              if (n <= 3)
                  @@virus_num = n + 1 
              else
                  @@virus_num = virusAdd(n) + 2*virusAdd(n-1)+virusAdd(n-2)+virusAdd(n-3)
                  #@@virus_num =  3*virusAdd(n-1)+virusAdd(n-2)+2*virusAdd(n-3)
              end
       end
 	private
      def  virusAdd(n)
            if(n < 4)
                return 1
            else
              return virusAdd(n -1)+virusAdd(n - 3)
            end
       end 
end

virus = Virus.new

puts virus.virusAll(17)
