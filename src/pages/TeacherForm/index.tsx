import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';

function TeacherForm(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrivel que voce quer dar aula"                
                description="o primeiro passo e preencher"
            />;

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
										<Input name="name" label="Nome Completo"/>
										<Input name="avatar" label="Avatar"/>
										<Input name="whatsapp" label="WhatssApp"/>
                </fieldset>

								<fieldset>
                    <legend>Sobre a aula</legend>
										<Input name="subject" label="Materia"/>
										<Input name="cost" label="Custo da sua hora por aula"/>
										
                </fieldset>

								<footer>
									<p>
										Importante!!! <br/>
										Preencha todos os dados
									</p>
									<button type="button">
										Salvar cadastro
									</button>
								</footer>
            </main>
        </div>
    )
}

export default TeacherForm;