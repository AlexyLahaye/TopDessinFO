import {getSignalementPost} from "../../route/signalement";
import {getTournoiById} from "../../route/tournois";


export async function recupInfoTournois(token , tournoisId) {

    const [status, data] = await getTournoiById(token , tournoisId);

    if(status === 200 ){
        return data.success
    }else{
        return data.error
    }

}