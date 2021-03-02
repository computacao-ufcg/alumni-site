import React, { useState, useEffect } from "react";
import { api_AS, api_EAS } from "../../services/api";
import handleSubmit from "../../services/login";
import ListEgressos from "./ListEgressos";
import { Pagination } from "rsuite";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import MyLoading from "../MyLoading";

function SeeMore() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [admission, setAdmission] = useState("");
  const [graduation, setGraduation] = useState("");
  const [nameAlumnus, setNameAlumnus] = useState("");

  const [searchType, setSearchType] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(true);

  useEffect(() => {
    handleSubmit();
    handleProfile(page);
  }, []);

  const handleProfile = async (page, name, admission, graduation) => {
    setLoading(true);
    let query = `match/search/${page}?admission=${admission}&graduation=${graduation}&name=${nameAlumnus}`;
    const res = await api_AS.get(query, {
      headers: { "Authentication-Token": localStorage.getItem("eureca-token") },
    });

    if (res.status === 200) {
      setData(res.data);
      setLoading(false);
      setSearch(false);
    } else {
      console.error("error: response error");
    }
  };

  const handlePage = eventKey => {
    setPage(eventKey - 1);
    handleProfile(eventKey - 1, nameAlumnus, admission, graduation);
  };

  const handleSearch = () => {
    const $iptName = document.getElementById("ipt-name");
    const $iptAdmission = document.getElementById("ipt-admission");
    const $iptGraduation = document.getElementById("ipt-graduation");
    setNameAlumnus($iptName.value);
    setAdmission($iptAdmission.value);
    setGraduation($iptGraduation.value);
    handleProfile(page, $iptName.value, $iptAdmission.value, $iptGraduation.value);
  }

  return (
    <React.Fragment>
      <div className="main-seemore">
        {/* <div className="main-content-seemore"> */}
          <div className="main-container-seemore">
            <div className="container-title-seemore">
              <h1>VER MAIS</h1>
            </div>

            <div className="seemore-input-boxes">
              <div className="seemore-input-box" onClick={() => setSearchType("name")}>
                <div>
                  <FiSearch size={25} />
                </div>
                <input id="ipt-name" type="text" placeholder="Buscar por nome do egresso" />
              </div>

              <div className="seemore-input-box" onClick={() => setSearchType("admission")}>
                <div>
                  <FiSearch size={25} />
                </div>
                <input id="ipt-admission" type="text" placeholder="Buscar por período de admissão" />
              </div>

              <div className="seemore-input-box" onClick={() => setSearchType("graduation")}>
                <div>
                  <FiSearch size={25} />
                </div>
                <input id="ipt-graduation" type="text" placeholder="Buscar por período de graduação" />
              </div>
              <button onClick={handleSearch}>Buscar</button>
            </div>

            {
              search ? <React.Fragment /> :

              loading ? <MyLoading /> :
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

            }
          </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}

export default SeeMore;
