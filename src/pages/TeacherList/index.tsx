import React from 'react';

import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis">
            <form id="search-teachers">
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
              <Input name="weed_day" label="Dia da Semana" />
              <Input name="time" label="Hora" />

            </form>

            </PageHeader>
            <main>
                
            </main>
        </div>
    )
}

export default TeacherList;