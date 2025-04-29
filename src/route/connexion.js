import {route} from './route';

export async function inscriptionRoute( email, pseudo, mdp) {
    try{
        return fetch(route +"users/crea", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
                "pseudo": pseudo,
                "mdp":  mdp
            })
        })
            // la on transforme en json
            .then(

                async res =>{
                    const mess = await res.json();
                    return [res.status, mess]
                }
            )
            .then(data => {
                 console.log(data);
                return data;
            });

    }
    catch(error){
        return "j'ai une erreur" +  error
    }

}