import React from "react";

import "./styles.css";

import AddSectionImage from "../../assets/add-section.png";
import AcademicEducationImage from "../../assets/academic-education.png";
import ProfessionalExperienceImage from "../../assets/professional-experience.png";
import ExperienceFormImage from "../../assets/experience-form.png";

function Tutorial() {
  return (
    <div className='main-content'>
      <h1>Como posso me cadastrar no sistema Alumni@UFCG?</h1>
      <p className='paragraph'>
        Para se cadastrar no Alumni, é necessário que o aluno egresso tenha uma
        conta cadastrada no Linkedln. Caso não tenha, pode se cadastrar através
        do seguinte{" "}
        <a
          href='https://www.linkedin.com/signup/'
          target='_blank'
          rel='noreferrer'
        >
          link
        </a>
        .
      </p>
      <p className='paragraph'>
        Após a criação da conta do Linkedln (caso o aluno egresso não a tenha),
        uma vez logado e na página de perfil. Selecione as opções:{" "}
        <b>Histórico profissional</b> {">"} <b>Formação acadêmica</b>. Como
        mostrado na imagem abaixo.
      </p>
      <img src={AddSectionImage} alt='' />
      <img src={ProfessionalExperienceImage} className='small-image' alt='' />

      <p className='paragraph'>
        Após isso, o usuário seleciona o opcção: <b>Formação Acadêmica</b> e
        preenche os campos solicitados de acordo com o seus curso. Como exibido
        na imagem abaixo.
      </p>
      <img src={AcademicEducationImage} alt='' width='500' height='500' />

      <p className='paragraph'>
        Após salvar a formação acadêmica, volte novamente à página de perfil,
        selecione a opcão:
        <b> Adicionar seção do perfil</b>, e escolha as opções:{" "}
        <b>Histórico profissional</b> {">"} <b>Experiência de trabalho</b>. Após
        isso, o aluno egresso preencherá informações sobre o seu trabalho atual
        ou experiências, como exibido na imagem abaixo.
      </p>
      <img src={ExperienceFormImage} alt='' />

      <p className='paragraph'>
        Salve as alterações após o preenchimento das informações e tudo pronto.
      </p>
    </div>
  );
}

export default Tutorial;
