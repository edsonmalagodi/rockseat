import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
	const schudeluItem = [
		{weed_day: 0, from: '8:00AM', to:'4:00PM'},
		{weed_day: 2, from: '10:00AM', to:'6:00PM'},
]
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrivel que voce quer dar aula"                
                description="o primeiro passo e preencher"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
										<Input name="name" label="Nome Completo"/>
										<Input name="avatar" label="Avatar"/>
										<Input name="whatsapp" label="WhatssApp"/>
										<Textarea name="bio" label="biografia"/>
                </fieldset>

								<fieldset>
                    <legend>Sobre a aula</legend>
										<Select 
											name="subject" 
											label="Materia"
											options={[
												{value: 'Artes', label: 'Artes'},
												{value: 'Biologia', label: 'Biologia'},
												{value: 'Ciencias', label: 'Ciencias'},
												{value: 'ED.Fisica', label: 'ED.Fisica'},
											]}
										/>
										<Input name="cost" label="Custo da sua hora por aula"/>																
                </fieldset>
								<fieldset>
									<legend>Horarios disponiveis
									<button type="button">
											+ Novo Horario
									</button>
									</legend>
									<div className="schedule-item">
									<Select 
										name="week_day" 
										label="Dia da Semana"
										options={[
										{value: '0', label: 'Segunda'},
										{value: '1', label: 'Terca'},
										{value: '2', label: 'Quarta'},
										{value: '3', label: 'Quinta'},
										{value: '4', label: 'Sexta'},
										{value: '5', label: 'Sabado'},
										{value: '6', label: 'Domingo'},
										]}
			/>	
									<Input name="from" label="Das" type="time"/>
									<Input name="to" label="Ate" type="time"/>
								</div>
									
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