import React from "react";

import "./styles.css";

import AddSectionImage from "../../assets/add-section.png";
import AcademicEducationImage from "../../assets/academic-education.png";
import ProfessionalExperienceImage from "../../assets/add-section.png";
import ExperienceFormImage from "../../assets/experience-form.png";

function Tutorial() {
  return (
    <div className='main-content'>
      <h1>Como posso me cadastrar no sistema Alumni@UFCG?</h1>
      <p>
        Para se cadastrar no Alumni, é necessário que o aluno egresso tenha uma
        conta cadastrada no Linkedln. Caso não tenha, pode se cadastrar através
        do seguinte <a href='https://www.linkedin.com/signup/'>link</a>.
      </p>
      <p>Após a criação da conta do Linkedln (caso o aluno egresso não a tenha), 
        uma vez logado e na página de perfil. Selecione as opções: <b>Histórico profissional</b> {">"} <b>
          Formação acadêmica</b>.
        Como mostrado na imagem abaixo.
      </p>
      <img src={ AddSectionImage } alt=""/>

      <p>
        Após isso, o usuário seleciona o opcção: <b>Formação Acadêmica</b> e preenche os campos
        solicitados de acordo com o seus curso. Como exibido na imagem abaixo.
      </p>
      <img src={ AcademicEducationImage } alt="" width="500" height="500" />

      <p>Após salvar a formação acadêmica, volte novamente à página de perfil, selecione a opcão: 
        <b> Adicionar seção do perfil</b>, e escolha as opções: <b>Histórico profissional</b> {">"} <b>
          Experiência de trabalho</b>. Após isso, o aluno egresso preencherá informações sobre o
          seu trabalho atual ou experiências, como exibido na imagem abaixo.
      </p>
      <img src={ ExperienceFormImage } alt=""/>

      <p>Salve as alterações após o preenchimento das informações e tudo pronto.</p>
    </div>
  );
}

export default Tutorial;
