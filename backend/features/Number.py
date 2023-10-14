import requests
cyan="\033[1;36;40m"
green="\033[1;32;40m"
red="\033[1;31;40m"
Y = '\033[1;33;40m'
def number(phonenum):
    # phonenum = input("Enter Mobile Number with country code >> ")
    url = "https://api.apilayer.com/number_verification/validate?number="+phonenum
    payload = {}
    headers= {
             "apikey": "09Tq7H7XYAfK7E0Sa9reLRmABcDnxoRN"
    }
    resp = requests.request("GET", url, headers=headers, data = payload)
    details = resp.json()
    print('')
    if details['valid'] == True:
        # print(cyan+"Country : "+ details['country_name'])
        # print(cyan+"Location : "+ details['location'])
        # print(cyan+"Carrier : "+ details['carrier'])
        return { 
                'country' : details['country_name'],
                'Location' : details['location'] ,
                'Carrier' : details['carrier']    
               }
    else :
        print(red+"Enter valid phone number")
    return "invalid"
if __name__=="__main__":
    number()
