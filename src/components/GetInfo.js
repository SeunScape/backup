export function GetInfo(type, userData){
    let BaseUrl = 'https://api.flippay.co/';

    return new Promise((resolve, reject) =>{
        fetch(BaseUrl+type,{
            method: 'GET',
            body: JSON.stringify(userData),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            
        })
        .then((response) => response.json())
        .then((responseJson)=> {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    });
  }
  