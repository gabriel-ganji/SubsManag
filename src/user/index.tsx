import { servicesInfo, user } from "../mocked";

const combinedServices = user.servsInUse.map((userItem) => {
    const matchedService = servicesInfo.find(
        (service) => service.id.includes(userItem.id) && service.plans.signature_options[userItem.plan_signature] !== undefined
    );

    return matchedService ? {
        id: matchedService.id,
        name: matchedService.name,
        plan_signature: userItem.plan_signature,
        date: userItem.date_signature,
        logo: matchedService.logo,
        price: matchedService.plans.signature_options[userItem.plan_signature] || 0
    } : null

});

const userServicesActive = {
    user,
    servicesInUse: combinedServices
}

export default userServicesActive;