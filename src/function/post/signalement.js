import {signalCom} from "../../route/signalement";
import UIkit from "uikit";

export async function reportCom(token, userId, comId) {
    const [status, data] = await signalCom(token, userId, comId);

    if (status === 200) {
        UIkit.notification({
            message: 'Le commentaire à été signalé.',
            status: 'success',
            pos: 'top-center',
            timeout: 3000
        });
    } else {
        UIkit.notification({
            message: 'Erreur lors du signalement du commentaire.',
            status: 'danger',
            pos: 'top-center',
            timeout: 3000
        });
    }
}
