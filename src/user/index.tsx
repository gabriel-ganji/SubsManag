import { servicesInfo, user } from "../mocked";
import { UserServicesActive } from "../types";

const combinedServices = user.servsInUse.map((userItem) => {
    
    const matchedService = servicesInfo.find(
        (service) => service.id.includes(userItem.id) && service.plans.signature_options[userItem.plan_signature] !== undefined
    );

    return matchedService ? {
        id: matchedService.id,
        plan_cycle: userItem.plan_cycle,
        name: matchedService.name,
        logo: matchedService.logo,
        date_signature: userItem.date_signature,
        plan_signature: userItem.plan_signature,
        price_signature: matchedService.plans.signature_options[userItem.plan_signature] || 0
    } : null

});

const userServicesActive: UserServicesActive = {
    user,
    servicesInUse: combinedServices,
}

export default userServicesActive;