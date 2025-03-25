import passport from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyFunctionWithRequestAndParams,
} from "passport-google-oauth2";
import { Request } from "express";
import dotenv from "dotenv";
dotenv.config();

const verifyCallback: VerifyFunctionWithRequestAndParams = (
  request,
  accessToken,
  refreshToken,
  params,
  profile,
  done
) => {
  return done(null, profile);
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:5000/auth/google/callback",
      passReqToCallback: true,
    },
    verifyCallback
  )
);

passport.serializeUser(function (user: Express.User, done) {
  done(null, user);
});

passport.deserializeUser(function (user: Express.User, done) {
  done(null, user);
});
