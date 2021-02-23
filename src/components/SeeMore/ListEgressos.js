import React from "react";
import { Table } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import "./styles.css";

const { Column, HeaderCell, Cell } = Table;

function ListEgressos(props) {
  return (
    <div className={"tableEgressos"}>
      <Table
        height={480}
        width={850}
        data={props.listData}
        onRowClick={data => {
          console.log(data);
        }}
      >
        <Column width={450} align='center' fixed>
          <HeaderCell>Nome do Egresso</HeaderCell>
          <Cell dataKey='name' />
        </Column>
        <Column>
          <HeaderCell width={120}>Admissão</HeaderCell>
          <Cell dataKey='admission' />
        </Column>
        <Column>
          <HeaderCell width={120}>Graduação</HeaderCell>
          <Cell dataKey='graduation' />
        </Column>
        <Column width={120} >
          <HeaderCell>Linkedin</HeaderCell>
          <Cell>
            {rowData => {
              return (
                <span>
                  <a target={'_blank'} href={"https://linkedin.com/in/" + rowData.linkedinId}>Link</a>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
}

export default ListEgressos;
