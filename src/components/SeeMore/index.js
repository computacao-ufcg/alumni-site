import React, { useState, useEffect } from "react";
import { api_AS, api_EAS } from "../../services/api";
import ListEgressos from "./ListEgressos";
import { Pagination } from "rsuite";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

function SeeMore() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [name, setName] = useState("fubica");
  const [password, setPassword] = useState("fubica123");
  const [admission, setAdmission] = useState("");
  const [graduation, setGraduation] = useState("");
  const [nameAlumnus, setNameAlumnus] = useState("");

  useEffect(() => {
    handleSubmit();
    handleProfile(page);
  }, []);

  const handleSubmit = async () => {
    let query = "publicKey";
    const res = await api_AS.get(query, {});
    if (res) {
      let publickey = res.data.publicKey;
      handleLogin(name, password, publickey);
    } else {
      alert("Public Key não encontrada");
    }
  };

  const handleLogin = async (name, password, publickey) => {
    let query = "as/tokens";
    const res = await api_EAS
      .post(query, {
        credentials: {
          username: name,
          password: password,
        },
        publicKey: publickey,
      })
      .then(res => {
        localStorage.setItem("eureca-token", res.data.token);
      })
      .catch(err => {
        alert("Usuário ou senha incorretos");
      });
  };

  const handleProfile = async page => {
    let query = "match/search/" + page + `?admission=${admission}&graduation=${graduation}&name=${nameAlumnus}`;
    const res = await api_AS.get(query, {
      headers: { "Authentication-Token": localStorage.getItem("eureca-token") },
    });

    if (res.status === 200) {
      setData(res.data);
    } else {
      console.error("error: response error");
    }
  };

  const handlePage = eventKey => {
    setPage(eventKey - 1);
    console.log(eventKey);
    handleProfile(eventKey - 1);
  };

  return (
    <React.Fragment>
      <div className='main-seemore'>
        <div className='main-content-seemore'>
          <div className='main-container-seemore'>
            <div className='container-title-seemore'>
              <h1>VER MAIS</h1>
            </div>

            <div className='seemore-input-box'>
              <div>
                <FiSearch size={25} />
              </div>
              <input type='text' placeholder='Buscar por período' />
            </div>

            <div className={"listEgressos"}>
              <ListEgressos listData={data.content ? data.content : []} />
              <Pagination
                pages={data.totalPages ? data.totalPages : 0}
                maxButtons={5}
                onSelect={handlePage}
                activePage={page + 1}
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SeeMore;
