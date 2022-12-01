import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entity";
import { Contatos } from "../../entities/contatos.entity";

const contatosCreateService = async ({
  id,
  name,
  email,
  telefone,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(Contatos);

  const clienteRepository = AppDataSource.getRepository(Cliente);

  const clienteFilter = await clienteRepository.findOneBy({
    id: id,
  });

  const user = new Contatos();
  user.name = name;
  user.clientee = clienteFilter;
  user.email = email;
  user.telefone = telefone;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default contatosCreateService;
