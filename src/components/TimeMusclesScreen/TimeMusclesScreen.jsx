import React, { Component } from "react";

import Loading from "../Loading";


class TimeMuscleScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			chest : false,
			back : false,
			biceps : false,
			triceps : false,
			shoulders : false,
			legs : false,
			timeForWorkout : 0,
			goal: "",
		} 

		this.handleMuscleChange = this.handleMuscleChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleGoalChange = this.handleGoalChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		
	}//end of constructor

	handleTimeChange(e) {
		this.setState({ timeForWorkout : +e.currentTarget.value })

	};


	handleMuscleChange(e) {
		switch (e.currentTarget.id) {
			case "Back" : 
			this.setState({ back : !this.state.back })
			break;
			case "Shoulders" : 
			this.setState({ shoulders : !this.state.shoulders })
			break;
			case "Biceps" : 
			this.setState({ biceps : !this.state.biceps })
			break;
			case "Triceps" : 
			this.setState({ triceps : !this.state.triceps })
			break;
			case "Chest" : 
			this.setState({ chest : !this.state.chest })
			break;
			case "Legs" : 
			this.setState({ legs : !this.state.legs })
			break;
			default :
			return null;
		}
	}

	handleGoalChange(e) {
		this.setState({ goal : e.currentTarget.value })
	}

	handleClick(){
		this.props.handleLoad();
		this.props.onSubmit(this.state);
	}


	render() {

		return (

			<React.Fragment>
				<Loading>

					<h1 className="timemusclescreen__title">Workout with Julie</h1>

					<form className="timemusclescreen__form">


						<div className="timemusclescreen__time">

						<h3>Workout Time</h3>

							<input className="timemusclescreen_mins" onChange={ this.handleTimeChange } type="number" name="time" id="time"/>
						</div>

					<div className="timemusclescreen_divide"></div>	

					<h3 className="timemusclescreen__goal">What is your goal for this workout?</h3>
						<div className="timemusclescreen__radio">
							<input onChange={ this.handleGoalChange } id="strength" type="radio" name="goal" value="strength" />

							<label>Strength</label>
						
							<input onChange={ this.handleGoalChange } id="size" type="radio" name="goal" value="size" />
							<label>Size</label>
						
							<input onChange={ this.handleGoalChange } id="endurance" type="radio" name="goal" value="endurance" />

							<label className="timemusclescreen__endurance">Endurance</label>
						</div>


						<h3 className="timemusclescreen__areas">Which areas would you like to work out?</h3>

						<div className="timemusclescreen__checkbox">
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Back" checked={this.state.back} />
							<label htmlFor="Back">Back</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Shoulders" checked={this.state.shoulders} />
							<label htmlFor="Shoulders">Shoulders</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Biceps" checked={this.state.biceps} />
							<label htmlFor="Biceps">Biceps</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Triceps" checked={this.state.triceps} />
							<label htmlFor="Triceps">Triceps</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup" id="Chest" checked={this.state.chest} />
							<label htmlFor="Chest">Chest</label>
							<input onChange={ this.handleMuscleChange } type="checkbox" name="MuscleGroup"  id="Legs" checked={this.state.legs} />
							<label htmlFor="Legs">Legs</label>

						</div>
					</form>
        
					<button onClick={ this.handleClick }>Submit</button>
				</Loading>
			</React.Fragment>
		)
	}
	//submit button

} 

export default TimeMuscleScreen;
