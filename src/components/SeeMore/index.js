import React, { useState, useEffect } from "react";
import { api_AS } from "../../services/api";
import handleSubmit from "../../services/login";
import ListEgressos from "./ListEgressos";
import { Pagination } from "rsuite";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import MyLoading from "../MyLoading";
import NoDataFound from "../NoDataFound";

function SeeMore() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const [admission, setAdmission] = useState("");
  const [graduation, setGraduation] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(true);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleProfile = async (page, name, admission, graduation) => {
    setLoading(true);

    let query = `match/search/${page}?admission=${admission}&graduation=${graduation}&name=${name}`;
    const res = await api_AS.get(query, {
      headers: {
        "Authentication-Token": sessionStorage.getItem("eureca-token"),
      },
    });

    if (res.status === 200) {
      setData(res.data.content);
      setLoading(false);
      setSearch(false);
    } else {
      console.error("error: response error");
    }
  };

  const handlePage = eventKey => {
    setPage(eventKey - 1);
    handleProfile(eventKey - 1, name, admission, graduation);
  };

  const handleSearch = () => {
    const $iptName = document.getElementById("ipt-name");
    const $iptAdmission = document.getElementById("ipt-admission");
    const $iptGraduation = document.getElementById("ipt-graduation");
    setName($iptName.value);
    setAdmission($iptAdmission.value);
    setGraduation($iptGraduation.value);
    handleProfile(
      page,
      $iptName.value,
      $iptAdmission.value,
      $iptGraduation.value
    );
  };

  return (
    <React.Fragment>
      <div className='main-seemore'>
        <div className='main-container-seemore'>
          <div className='main-seemore-group'>
            <div className='seemore-input-boxes'>
              <div className='seemore-input-box'>
                <div>
                  <FiSearch size={25} />
                </div>
                <input
                  id='ipt-name'
                  type='text'
                  placeholder='Buscar por nome do egresso'
                />
              </div>

              <div className='seemore-input-box'>
                <div>
                  <FiSearch size={25} />
                </div>
                <input
                  id='ipt-admission'
                  type='text'
                  placeholder='Buscar por período de admissão'
                />
              </div>

              <div className='seemore-input-box'>
                <div>
                  <FiSearch size={25} />
                </div>
                <input
                  id='ipt-graduation'
                  type='text'
                  placeholder='Buscar por período de graduação'
                />
              </div>
            </div>
            <button onClick={handleSearch}>Buscar</button>
          </div>

          {search ? (
            <React.Fragment />
          ) : loading ? (
            <MyLoading />
          ) : data.length === 0 ? (
            <NoDataFound msg='Nenhum dado encontrado.' />
          ) : (
            <div className={"listEgressos"}>
              <ListEgressos listData={data} />
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
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SeeMore;
