import bcrypt from "bcryptjs";

const utilityService = {
  hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(
      parseInt(<string>process.env.BCRYPT_SALT_ROUNDS)
    );
    return bcrypt.hashSync(password, salt);
  },
};

export default utilityService;
