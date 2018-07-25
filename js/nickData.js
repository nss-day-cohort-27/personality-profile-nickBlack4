function makeNickData() {
    const localStorageKey = "personalityProfileStorage";

    // initialize the database in memory as an object 
    const PersonalityProfileDB = {};

    // General Profile Section: Three statements that you agree with. Three statements that you don't agree with, and why.
    PersonalityProfileDB.general = {
        agree: [
            "Too Altruistic",
            "Impractical",
            "Seek and Value Harmony"
        ],
        disagree: [

            [
                ["Difficult to get to know"],
                ["I think I overshare if anything and am emotionally forthcoming"]
            ],

            [
                ["Dislike dealing with data"],
                ["I think I'm able to balance emotion with facts"]
            ],

            [
                ["Dedicated and Hard-Working"],
                ["I think I have given up plenty of times"]
            ]

        ]
    };

    // People Like Me Section: 4 people that share your personality type.
    PersonalityProfileDB.peopleLikeMe = ["Bjork", "Shakespeare", "Alicia Keys", "Frodo Baggins"];

    //     Comunication Section:
    // How would I communicate best with my little sib.
    // How would I like my instructors to communicate with me.
    // How would I like my teammates to communicate with me

    PersonalityProfileDB.communication = {
        sib: "talking directly, slack",
        instructors: "talking directly, email, slack",
        teammates: "talking directly"
    };

    // I needed to put saveDatabase in here so it had access to localStorage variable
    const saveDatabase = function (databaseObject) {
        // convert the object into a string.
        const stringifiedDatabase = JSON.stringify(databaseObject);
        
        // create a key in local storage, and store the string version
        // of your inventory database as the value
    
        localStorage.setItem(localStorageKey, stringifiedDatabase);
    }


    // Persist the database to localStorage
    saveDatabase(PersonalityProfileDB, "PersonalityProfile");
}

