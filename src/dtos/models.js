export class OrderDTO {
    constructor(data) {
        this.id = data.id;
        this.status = data.status;
        this.customer_id = data.customer_id;
        this.address = data.address;
        this.description = data.description;
    }
}

export class AlternateOrderDTO {
    constructor(data) {
        this.id = data.id;
        this.lattitude = data.lattitude;
        this.longtitude = data.langtitude;
        this.room_number = data.room;
    }
}

export class AlternateOrderDTO {
    constructor(data) {
        this.id = data.id;
        this.lattitude = data.lattitude;
        this.longtitude = data.langtitude;
        this.room_number = data.room;
    }
}

export class CustomerCleaningOrderDTO {
    constructor(data) {
        this.id = data.id;
        this.passport = data.passport;
        this.hotelId = data.hotelId;
        this.roomId = data.roomId;
    }
}

export class StatusDTO {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
    }
}

export class CustomerDTO {
    constructor(data){
        this.id = data.id;
        this.phone = data.phone;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }
}
