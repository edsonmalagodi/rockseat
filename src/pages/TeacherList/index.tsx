import React from 'react';


import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys disponiveis">
            <form id="search-teachers">
                <Input name="subject" label="Materia" />
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