import React, {Component} from 'react';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.OnChangeUsername = this.OnChangeUsername.bind(this);
        this.OnChangeDescription = this.OnChangeDescription.bind(this);
        this.OnChangeDuration = this.OnChangeDuration.bind(this);
        this.OnChangeDate = this.OnChangeDate.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
        this.state = {
            username : '',
            description : '',
            duration : 0,
            date : new Date(),
            users :[],
        }
    }
    componentDidMount(){
        this.setState({
            users : ['test user'],
            username : 'test user'
        })
    }
    OnChangeUsername(e){
        this.setState({
            username : e.target.value
        });
    }
    OnChangeDescription(e){
        this.setState({
            description : e.target.value
        });
    }
    OnChangeDuration(e){
        this.setState({
            duration : e.target.value
        });
    }
    OnChangeDate(date){
        this.setState({
            date : date
        });
    }
    OnSubmit(e){
        e.preventDefault();

        const exercise = {
            username : this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            date : this.state.date
        }

        console.log(exercise);

        window.location = '/';
    }
    render() {
        return (
            <div>
                <p>You are on the Create Exercise component!</p>
            </div>
        );
    }
}