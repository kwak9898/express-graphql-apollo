import { User } from "./entity/User";
import { dataSourceConfig } from "./data-source";

export const UserQueries = {
  users: async () => {
    const Users = await dataSourceConfig.getRepository(User);
    return await Users.find();
  },
  user: async ({ id }: Partial<Pick<User, "id">>) => {
    const Users = await dataSourceConfig.getRepository(User);
    const user = await Users.findOneBy({ id });

    if (user) {
      throw Error("NOT FOUND USER");
    }

    return user;
  },
};
