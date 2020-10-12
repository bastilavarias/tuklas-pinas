import * as dotenv from "dotenv";
dotenv.config();
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { PassportStatic } from "passport";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_OR_KEY,
};

const JWTPassport = (passport: PassportStatic) => {
  passport.use(
    new Strategy(options, async (payload, done) => done(null, payload))
  );
};

export default JWTPassport;
