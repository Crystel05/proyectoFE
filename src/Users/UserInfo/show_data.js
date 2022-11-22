import React from "react";
import { MEMBERSHIPS, MYITINERARY, PROFILE, RESERVATIONS } from "../../Util/constants";
import MemershipSection from "./memberships_user";
import MyItinerarySection from "./my_itinerary";
import ProfileSection from "./profile";
import ReservationsSection from "./reservations_user";

export default function ShowUserInfoAction({ action }){
    switch(action){
        case PROFILE:
            return(
                <ProfileSection />
            )
        case MYITINERARY:
            return(
                <MyItinerarySection />
            )
        case MEMBERSHIPS:
            return(
                <MemershipSection />
            )
        case RESERVATIONS: 
            return(
                <ReservationsSection />
            )
    }
}