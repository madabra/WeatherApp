import React from "react";



class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Введите свой город"></input>
                <button>Получить погоду</button>
            </form>
        )
    }
}

export default Form;