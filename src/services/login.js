import { api_AS, api_EAS } from "./api";

const name = "fubica";
const password = "fubica123";

const handleLogin = async (name, password, publickey) => {
  let query = "as/tokens";
  const res = await api_EAS
    .post(query, {
      credentials: {
        username: name,
        password: password,
      },
      publicKey: publickey,
    });

  if (res.status === 201) {
    sessionStorage.setItem("eureca-token", res.data.token);
  } else {
    alert("Usuário ou senha incorretos");
  }
};

const handleSubmit = async () => {
  let query = "publicKey";
  const res = await api_AS.get(query, {});
  if (res) {
    let publickey = res.data.publicKey;
    await handleLogin(name, password, publickey);
  } else {
    alert("Public Key não encontrada");
  }
};

export default handleSubmit;
