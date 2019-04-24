const mongoose = require('mongoose');
// require validator, used to check a valid email format input
const validator = require('validator');

// The schema for the attraction that the user wants to save (with their rating and their review of the attraction)
const AttractionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'The name of the attraction must contain at least 2 characters',
        trim: true,
        minlength: 2
    },
    rating: Number,
    review: {
        type: String,
        trim: true,
        maxlength: 200
    }
}, { timestamps: true })

// The location (city) containing the attractions that the user wants to save
const LocationSchema = new mongoose.Schema({
    city: { 
        type: String, 
        required: 'The city name must contain at least 2 characters', 
        trim: true, 
        minlength: 2
    },
    // The state is not required to accommodate for those international cities that do not lie within a state
    // Search of cities within a state will be slightly more difficult because users will not be required to enter the 
    // standard two letter format.
    state: { 
        type: String, 
        trim: true, 
        minlength: 2
    },
    country: { 
        type: String, 
        default: "USA",
        required: 'The country name must contain at least 2 characters', 
        trim: true, 
        minlength: 2 
    },
    locations: [AttractionSchema]
},{ timestamps: true })

const UserSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: 'Your first name must contain at least 2 characters', 
        trim: true, 
        minlength: 2
    },
    last_name: { 
        type: String, 
        required: 'Your last name must contain at least 2 characters', 
        trim: true, 
        minlength: 2
    },
    username: { 
        type: String, 
        required: 'Your username must contain at least 6 characters', 
        trim: true, 
        unique: true, 
        minlength: 6 
    },
    email: {
        type: String,
        unique: true,
        validate: [ validator.isEmail, 'invalid email' ]
    },
    password: {
        type: String,
        required: 'Your password must contain at least 8 characters',
        trim: true,
        minlength: 8
    },
    locations: [LocationSchema]
},{ timestamps: true })

mongoose.model('Attraction', AttractionSchema);
mongoose.model('Location', LocationSchema);
mongoose.model('User', UserSchema); 

/*
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const userSchema = new Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            required: true,
            enum: statesArray
        },
        zip: Number
    }
});
*/