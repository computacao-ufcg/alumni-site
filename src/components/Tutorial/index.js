import React from "react";

import "./styles.css";

import AddSectionImage from "../../assets/add-section.png";
import AcademicEducationImage from "../../assets/academic-education.png";
import ProfessionalExperienceImage from "../../assets/professional-experience.png";
import ExperienceFormImage from "../../assets/experience-form.png";

function Tutorial() {
  return (
    <div className='main-content'>
      <h1>Como faço para meus dados aparecerem no sistema Alumni@UFCG?</h1>
      <p className='paragraph'>
        Para isso, basta que você seja egresso do Curso de Ciência da Computação
        da UFCG (ou do antigo Campus II da UFPB para aqueles formados antes de 2002)
        e tenha uma conta cadastrada no LinkedIn. Caso não tenha, você pode se
        cadastrar através do seguinte{" "}
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
        Uma vez que você tenha uma conta no LinkedIn, basta incluir em seu perfil
        a informação que você é egresso do curso, como explicado a seguir.
        Uma vez que você tenha feito <i>login</i> no seu perfil, selecione as opções:{" "}
        <b>Histórico profissional</b> {">"} <b>Formação acadêmica</b>. Como
        mostrado na imagem abaixo.
      </p>
      <img src={AddSectionImage} alt='' />
      <img src={ProfessionalExperienceImage} className='small-image' alt='' />

      <p className='paragraph'>
        Após isso, você deve selecionar a opção <b>Formação Acadêmica</b> e
        preencher os campos solicitados de acordo com o seus curso, como exibido
        na imagem abaixo.
      </p>
      <img src={AcademicEducationImage} alt='' width='500' height='500' />

      <p className='paragraph'>
        Após salvar a formação acadêmica, volte à página de perfil e
        selecione a opcão:
        <b> Adicionar seção do perfil</b>. Escolha as opções:{" "}
        <b>Histórico profissional</b> {">"} <b>Experiência de trabalho</b>. Preencha
        as informações sobre o seu histórico de experiência de trabalho, como exibido
        na imagem abaixo.
      </p>
      <img src={ExperienceFormImage} alt='' />

      <p className='paragraph'>
        Salve as alterações após o preenchimento das informações e, pra finalizar,
        solicite a sua participação no{" "}
                <a
                  href='https://www.linkedin.com/groups/1097807/'
                  target='_blank'
                  rel='noreferrer'
                >
                  grupo de egressos
                </a>
                 do Curso de Ciência da Computação da UFCG.
      </p>
    </div>
  );
}

export default Tutorial;
