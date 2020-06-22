import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

// tech used: 
// Axios
// React ChartJS 2
// React CountUp

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData});
        // console.log(data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country});
        // fetch data

        //set the state
    }

    render() {
        const { data, country } = this.state; //destructruing data from this.state.data

        return (
            <div className={styles.container}>
                <h1>COVID-19 TRACKER</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;