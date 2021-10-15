/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class RegisteredUser {
    constructor(services= []) {
        this.services = services;
    }

    getTotal() {
        let total = 0;

        this.services.forEach(service, index => {
            total += service.getFinalPrice();
            //Creamos getFinalPrice para comunicarse con Service
        })

        return total;
    }
}

class Service {
    getFinalPrice() {
        return MultimediaContent.getPremium() + this.getPrice();
        //Creamos getPrice para que cada servicio tenga su función 
        //y así si se añaden más servicios no afecte a la función principal         
    }    
}

class StreamingService extends Service {
    getPrice() {
        return this.getStreamingPrice;
    }
}

class DownloadService extends Service {
    getPrice() {
        return this.getDownloadPrice;
    }
}

class MultimediaContent {
    getPremium() {
        if (PremiumContent.additionalFee === null) return 0;
        //Para asegurarnos que los contenidos no premium tienen valor.
        return PremiumContent.additionalFee;
    }
}
