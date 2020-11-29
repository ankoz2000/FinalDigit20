import React from 'react';
import style from '../styles/main.js'
//  import ReactDOM from 'react-dom';

class SkillsForm extends React.Component {
    handleSubmit = this.handleSubmit.bind(this);
    handleDelete = this.handleDelete.bind(this);

    state = {
        fieldValue: '',
        fieldsCount: 0,
        fields: [],
        skills: [],
    };

    handleSubmit(event) {
        const skill = event.target[0].value;
        console.log("Skill добавлен: ", skill);
        this.setState({
            skills: [...this.state.skills, skill],
        });
        this.setState({
            fields: [...this.state.fields, this.addField(skill)]
        });
        event.target[0].value = '';
        event.preventDefault();
      }
    addField(skill) {
        this.setState({
            fieldsCount: this.state.fieldsCount + 1
        });
        
        return (
            <div id={this.state.fieldsCount} className={style.place}>
                <span>{skill}</span>
                <button className="delete" type="submit" onClick={this.handleDelete}><img src='../images/image.png' width="3px" height="3px" alt=""></img></button>
            </div>
        );
    }

    handleDelete(event) {
        const parent = event.target.parentNode;
        const id = parent.id;
        console.log("Clickable-Elem ID: ", id);
        console.log("skills-state before: ", this.state.skills);
        if (this.state.skills.length > 0) {
        const skill = this.state.skills.filter((el) => {
            console.log(parseInt(this.state.skills.indexOf(el)) !== parseInt(id));
            return (parseInt(this.state.skills.indexOf(el)) !== parseInt(id));
        });
        console.log("skills-state after: ", skill);
        this.setState({
            skills: this.state.skills
        });
    } else {
        this.setState({
            skills: []
        });
    }
        this.setState({
            fields: []
        });
        this.setState({
            fieldsCount: 0
        });
        this.state.skills.forEach(elem => {
            console.log("ELEM: ", elem);
            this.setState({
                fields: [...this.state.fields, this.addField(elem)]
            });
        });
    event.preventDefault();
    }
    render() {
        let fields = []
        this.state.skills.forEach((elem) => {
            fields.push(this.state.fields);
        })

        return (
            <form onSubmit={this.handleSubmit}>
            <div class="form-group">
            <label for="exampleInputEmail1">Ввод ключевых слов</label>
            <input type="found" class="form-control" id="exampleInputFound" padding="20px" aria-describedby="foundHelp" />
                <small id="foundHelp" class="form-text text-muted">Введите значение.</small>
            </div>
            <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">чекбокс</label>
            </div>
            <div id="skills" style={style.place}>
                {fields}
            </div>
            <button type="submit" class="btn btn-primary">Найти</button>
            </form>
            );
        }
    }

export default SkillsForm; 
