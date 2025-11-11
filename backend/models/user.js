import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Informe seu nome"],
      maxLength: [50, "O nome não pode ter mais de 50 caracteres"],
    },
    email: {
      type: String,
      required: [true, "Informe seu email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Informe sua senha"],
      minLength: [6, "A senha deve ter no mínimo 6 caracteres"],
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
