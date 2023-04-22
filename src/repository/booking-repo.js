const {Booking}=require("../models/index");
const { ValidationError, AppError } = require("../utils/errors");
const {StatusCodes}=require('http-status-codes');
class BookingRepo
{
    async create(data)
    {
        try{
            const booking =await Booking.create(data);

            return booking;
        }
        catch
        {
            if(error.name=="SequelizeValidationError"){
                throw new ValidationError(error)
            }
            throw new AppError(
                'Repo Error',
                "can't create Booking",
                "There was some issue create the booking ,please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
                )
            
        }
    }
}
module.exports =BookingRepo;
