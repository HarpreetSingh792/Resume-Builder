import { createContext, useContext } from "react";

export const CVContext = createContext({
    details:[{
        "id":Date.now,
        "name":"Your Name",
        "email":"hs.ishu000@gmail.com",
        "phone":9988223402,
        "address1":"155-A new pawan nagar",
        "address2":"155-A new pawan nagar",
        "city":"Amritsar",
        "state":"Punjab",
        "pincode":143001,
        "objective":"To gain more knowledge",
        experience:[
            {
                "id":Date.now(),
                "job":"Job Title",
                "organization":"Microsoft",
                "startYear":2020,
                "endYear":2023,
                "desc":"Working as a mern stack developer sde1"
            }
        ],
        education:[
            {
                "id":Date.now(),
                "type":"Graduation",
                "university":"GNDU",
                "degreeType":"B.Tech",
                "startYear":2023,
                "endYear":2025
            }
        ],
        skils:[
            {
                "id":Date.now(),
                skill:"Front End Developer"
            }
        ],
    }],

    addDetails:(details,id)=>{},
    deleteDetails:(id)=>{},

})


export const ContextProvider = CVContext.Provider;


export const useProfile = ()=>{
    return useContext(CVContext);
}