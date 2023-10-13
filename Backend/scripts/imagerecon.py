from halo import Halo
import dropbox
import os
import requests
from bs4 import BeautifulSoup
from serpapi import GoogleSearch

spinner = Halo(text=' Scanning', spinner='dots')
cyan="\033[1;36;40m"
green="\033[1;32;40m"
red="\033[1;31;40m"
Y = '\033[1;33;40m'
G = "\033[1;32;40m"  

def recon():
    image=input(cyan+"Enter the image path >> ")
    image_name = os.path.basename(image)
    access_token = 'sl.BnfFX3k0IiJwHEX3EYxagJa5Z8fmtzbvkOvO18E8-IHxPfq8-mhAZLsgIKATW4aTktkGpOyYayJMviRuETPnngsTix2RiS-AVgLtMMT5j1dv9VGn9jdLr57y3cem5u5be_6frzoD0kEhEWQ'
    try:  
        dbx = dropbox.Dropbox(access_token)
        destination_path = '/Osint-X/'+image_name
        with open(image, 'rb') as f:
            dbx.files_upload(f.read(), destination_path, mode=dropbox.files.WriteMode('overwrite'))
        
        shared_url = dbx.sharing_create_shared_link(destination_path).url

        print(f"Uploaded Image URL: {shared_url}")
        spinner.start()   
        # headers = {
        #     'Access-Control-Allow-Origin': '*',
        #     'Access-Control-Allow-Methods': 'GET',
        #     'Access-Control-Allow-Headers': 'Content-Type',
        #     'Access-Control-Max-Age': '3600',
        #     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38'
        # }
        # url='http://www.google.co.in/searchbyimage/upload'
        # secondurl={'encoded_image': (image, open(image, 'rb')), 'image_content': ''}
        # response = requests.post(url, files=secondurl,allow_redirects=False)
        # fetch=response.headers['Location']
        # print(fetch)
        # req=requests.get(fetch,headers=headers)
        socialmedia=["instagram","facebook","twitter","linkedin","github"]
        linklist=[]
        # print(G+"[+] Scan started......")
        # print(G+"Checking whether the image is associated in any social media ")
        # print(G+"Scanning started in Instagram")
        # print(G+"Scanning started in Github")
        # print(G+"Scanning started in Facebook")
        # print(G+"Scanning started in Twitter")
        # print(G+"Scanning started in Linkedin")           
        # if(req.status_code == 200):
        #     soup = BeautifulSoup(req.content,'html.parser')
        #     for g in soup.find_all('div', class_='g'):
        #         anchors = g.find_all('a')
        #         if 'href' in str(anchors[0]):
        #             linklist.append(anchors[0]['href'])
        #             #print(linklist)
        #     c=0
        #     for i in socialmedia:
        #         sm=str(i)
        #         #print(sm)
        #         for j in linklist:
        #             if sm in str(j):
        #                 c=c+1   
        #                 print(cyan+"[+]"+j)
        #     if c == 0:
        #         print(red+"No social Media links associated with this image")    
        print(G + "[+] Scan started...")
        print(G + "Checking whether the image is associated with any social media platforms:")
        params = {
                  "engine": "google_reverse_image",
                  "image_url": shared_url,
                  "api_key": "10289dd7837f0fcbc563d1ecbeb604840e0a1e5d41b14191a1f22c9e648acf86"
                 }    
        search = GoogleSearch(params)
        results = search.get_dict()
        print(results)
        image_results = results.get("image_results", [])

        if image_results:
            for i in socialmedia:
                sm = str(i)
                for j in image_results:
                    if sm in str(j.get("link", "")):
                        print(cyan + "[+]" + j.get("link", ""))
        else:
            print(red + "No social media links associated with this image")    

        spinner.stop()
    except Exception as e:
        print(e)
if __name__ == "__main__":
    recon()
