export function Putdata(type, userData){
    let BaseUrl = 'https://api.flippay.co/auth/';

    return new Promise((resolve, reject) =>{
        fetch(BaseUrl+type,{
            method: 'PUT',
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
  