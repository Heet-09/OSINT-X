from socialrecon import reconinput
from webvuln import Webvuln
cyan="\033[1;36;40m"
green="\033[1;32;40m"
red="\033[1;31;40m"
Y = '\033[1;33;40m' 
def Main(a):
    if(a==1):
        reconinput()
    elif(a==2):
        Webvuln()
        

if __name__=="__main__":
    print(cyan+"""
    
|||||||||||    $$$$$$$    ||||||||||||     $$    $$    ||||||||||||         $$       $$
||       ||    $$              ||          $$$   $$         ||                $$   $$
||       ||    $$$$$$$         ||          $$ $$ $$         ||        |||       $$$      
||       ||         $$         ||          $$   $$$         ||                $$   $$
|||||||||||    $$$$$$$    ||||||||||||     $$    $$         ||              $$       $$ 
    """)

    print(green+"""
                Available Modules 
           
           1.Information gathering,
           
    """) 
    print(Y+"Note : In Information gathering type 'tools' to find tools.")
    # print(Y+"Note : In Web vulnerability scanning type 'help' to find tools.")
    a=int(input("Module >> "))
    Main(a)
    