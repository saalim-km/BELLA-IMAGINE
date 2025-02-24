// After booking a photographer
Show a Confirmation or Thank You Page

Immediately display a page confirming the successful booking.
Summarize key details: photographer’s name, date, chosen time slot, and total amount paid.
Include a “Go to My Bookings” button for easy reference later.
Send a Confirmation Email/SMS

Automatically send a confirmation message with the same booking details.
Include a calendar invite link (if possible) so clients can add the session to their personal calendar.
“My Bookings” or Dashboard Access

Provide a dashboard where clients can view upcoming sessions, make changes, or cancel/reschedule if allowed.
Keep all their bookings in one place for easy management.
Communication & References

Enable an in-platform chat or messaging feature so the client can discuss shoot details with the photographer.
Let the client upload any reference photos, mood boards, or specific requests.
Follow-Up or Reminder

Send automated reminders via email/SMS a few days or hours before the session.
Reminders can include location details, what to bring, or how to prepare.
Review & Feedback (Post-Shoot)

After the session, prompt clients to leave a review or rating for the photographer.
This helps build trust and credibility on the platform.




// cancelling booking in client side
Automatic Cancellation & Refund (Policy-Driven)
Client Cancels → The system automatically checks if the client meets the cancellation policy (e.g., more than 24 hours in advance).
Instant Refund → If the policy allows, the refund is processed immediately, no photographer approval needed.
Photographer Notification → The photographer receives a notification/email with the cancellation details and the reason.





// update vendor schema
add -> pro : true || false



///base url
/
/vendor
/admin




// vendor schema
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  duration: {
    type: Number, // e.g., 5 (hours)
    required: true
  },
  pricePerHour: {
    type: Number, // e.g., 1000 (INR/hour)
    required: true
  }
});

function serviceArrayLimit(val) {
  // Ensure the vendor can only add up to 3 services
  return val.length <= 3;
}

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  languages: {
    type: [String], // e.g., ["English", "Hindi"]
    default: []
  },
  role: {
    type: String,
    enum: ['client', 'vendor', 'admin'],
    default: 'client'
  },
  profile: {
    type: String // store URL/path to uploaded photo
  },
  description: {
    type: String
  },
  category: {
    type: String // e.g., "Wedding", "Portrait", etc.
  },
  isBlocked : {
   type : Boolean,
   required : true
  },
  services: {
    type: [ServiceSchema],
    validate: [serviceArrayLimit, 'Cannot add more than 3 services.']
  }
}, { timestamps: true });

module.exports = mongoose.model('Vendor', VendorSchema);




// REVIEWS FOR VENDORS
const ReviewSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', ReviewSchema);


// fetching photos by tags
Photo.find({ tags: { $all: ["wedding", "outdoor"] } })


// Find photos that have at least one of the specified tags
Photo.find({ tags: { $in: ["wedding", "outdoor"] } })


// Indexing
If you expect many queries by tags, consider creating an index on tags for faster lookups:
PhotoSchema.index({ tags: 1 });




// photos schema
const PhotoSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// FUNCTION FOR CHECKING THE PHOTO COUNTER GOES HIGHER THAN 15









// client schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profile : {
   type : String,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  role: {
    type: String,
    enum: ['client', 'vendor', 'admin'],
    default: 'client'
  },
  isBlocked : {
    type : Boolean,
    required : true
  },
  // Array of vendor IDs that the user has saved
  savedPhotographers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor'
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);









// 	CRON JOB FOR REMINDER BEFOR THE SESSION 24 HOURS
	
// reminderCron.js or server.js
const cron = require('node-cron');
const Booking = require('./models/Booking');
const Notification = require('./models/Notification');
const moment = require('moment'); // optional, for easier date handling

// Run every hour (or every 30 mins) to check for upcoming sessions
cron.schedule('0 * * * *', async () => {
  console.log('Running reminder check...');

  try {
    // Find bookings that start ~24 hours from now
    const now = new Date();
    const in24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    // Example: find all bookings with date/time around in24Hours
    const upcomingBookings = await Booking.find({
      status: 'confirmed',
      date: { 
        $gte: new Date(in24Hours.getTime() - 30 * 60 * 1000), // 30-min window
        $lte: new Date(in24Hours.getTime() + 30 * 60 * 1000)
      }
    });

    // For each booking, create a notification for the client
    for (let booking of upcomingBookings) {
      await Notification.create({
        userId: booking.clientId,
        message: `Reminder: Your session is in 24 hours (${moment(booking.date).format('LLLL')}).`,
        type: 'reminder'
      });
    }
  } catch (error) {
    console.error('Error in reminder cron:', error);
  }
});



// BOOKING SCHEMA
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // The date/time of the booking (start time or day)
  date: {
    type: Date,
    required: true
  },
  // The chosen session slot (e.g., "6 hours", "8 hours")
  sessionSlot: {
    type: String,
    required: true
  },
  // The total cost (e.g., price per hour * hours)
  totalPrice: {
    type: Number,
    required: true
  },
  // Current status of the booking
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'canceled'],
    default: 'pending'
  },
  // Required shoot location	
  location: {
    type: String,
    required: true
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', BookingSchema);





// CATEGORY SCHEMA
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Category', CategorySchema);


















