import { environment } from "environments/environment";

export const ApiConstant = {
    room: environment.mainUrl + "/room",
    seat: environment.mainUrl + "/seat",
    account: environment.mainUrl + "/account",
    row: environment.mainUrl + "/row",
    cloudinary: environment.mainUrl + '/image',
    movie: environment.mainUrl + "/movie",
    nation: environment.mainUrl + "/national",
    categories: environment.mainUrl + "/categories",
    showtime: environment.mainUrl + "/showtime",
    bill: environment.mainUrl + "/bill",
    ticket: environment.mainUrl + "/ticket",
    fare: environment.mainUrl + "/fare",
    public: environment.mainUrl + "/v1",
};