import { z } from "zod";

export const registrationResolver = z.object({
    name: z.string().nonempty("Name is required"),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty("Email is required"),
    streetAddress: z.string().nonempty("Street address is required"),
    city: z.string().nonempty("City is required"),
    state: z
      .string()
  
      .nonempty("State is required"),
    zip: z
      .string()
      .regex(/^\d{4}$/, "Zip code must be 5 digits")
      .nonempty("Zip code is required"),
    phone: z
      .string()
      .regex(/^\d+$/, "Phone number must be digits only")
      .nonempty("Phone number is required"),
    password: z
      .string()
      .nonempty("Password is required"),
      profileImage: z
      .string()
      .nonempty("profileImage is required"),
  });

  export const personalInfoResolver = z.object({
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty("Email is required"),
    firstName: z.string().nonempty("First Name is required"),
    address: z.string().nonempty("Address is required"),
    city: z.string().nonempty("City is required"),
    zip: z.string().nonempty("Zip Code is required"),
  });

  export const roomResolver = z.object({
    name: z.string({ required_error: "Room name is required" }),
    image: z.string({ required_error: "image name is required" }),
    capacity: z.string({ required_error: "Capacity must be at least 1" }),
    pricePerSlot: z.string({ required_error: "Price per slot must be positive" }),
    roomNo: z.string({ required_error: "Room type is required" }),
    floorNo: z.string({ required_error: "Room type is required" }),
    amenities: z.array(
      z.string({ required_error: "Please select at least one amenity" })
    ),
  });

  export const slotResolver = z.object({
    room: z.string({ required_error: "Room ID is required" }),
    date: z.string({ required_error: "Date is required" }),
    startTime: z.string({ required_error: "Start time is required" }),
    endTime: z.string({ required_error: "End time is required" }),
    isBooked: z.boolean().optional(),
  });
  