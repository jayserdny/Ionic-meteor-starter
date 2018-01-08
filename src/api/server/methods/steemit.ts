Meteor.methods({


    /**
     * 
     * Method to determine the cuteness level of a name
     * 
     * @param {string} name: name of the user
     * @returns {string}
     */
    cutenessLevel(name: string): string {

        if (name.length < 4) {
            return name.concat(", you are so ugly!");
        }

        else if (name.length >= 4 && name.length < 6) {
            return name.concat(", you are okay!");
        }

        else if (name.length >= 6) {
            return name.concat(", DAMN! You're my crush!!");
        }

    }
})