import mongoose from "mongoose";

const { Schema, model } = mongoose;

const shopSchema = new Schema({
  name: String,
  thumbIng: String,
  products: [
    {
      name: String,
      img: String,
      price: Number,
      id: String,
      dateAdded: { type: Date, default: Date.now },
    },
  ],
  latitude: Number,
  longitude: Number,
});

const Shop = model("Shop", shopSchema);

export { Shop };
