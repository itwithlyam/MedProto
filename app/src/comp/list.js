import React from 'react'
import meds from './data.txt'
import Item from './item.js'

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loading: true }
        this.data = []
    }
    componentDidMount() {
        fetch(meds)
            .then(r => r.text())
            .then(data => {
                data = data.split("\n")
                data.forEach((element, index) => { 
                    this.data[index] = element.split("\t") 
                })
           
        this.data.forEach((e, index) => {
            this.data[index] = <Item productName={e[0]}
                manufacturer={e[1]}
                contentPerCapsule={e[2]}
                activeIngredients={e[3]}
                capsuleIngredients={e[4]}
                soya={e[5]}
                milk={e[6]}
                type={e[7]}
                vegan={e[8]}
                vegetarian={e[9]}
                pregnancyAcceptable={e[10]}
                manufacturerRecommendation={e[11]}
                inactiveIngredients={e[12]}
                dailyDosageAdult={e[13]}
                dosageChildren={e[14]}  /> 
                console.log(this.data[index])

        })

        this.setState({ loading: false })
            })
    }

    render() {
        if (this.state.loading) return <h1>Loading, please wait...</h1>
        
        let style = `table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 12px;
        }`

        /*
        Product name
        Manufacturer
        Content per capsule
        Active ingredients
        Capsule ingredients
        Soya
        Milk
        Type
        Vegan
        Vegetarian
        Pregnancy acceptable
        Manufacturer recommendation
        inactive ingredients
        Daily dosage - adult
        Dosage - children		
        */

        return (
            <>
                <style>{style}</style>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Manufacturer</th>
                        <th>Content per capsule</th>
                        <th>Active ingredients</th>
                        <th>Capsule ingredients</th>
                        <th>Soya</th>
                        <th>Milk</th>
                        <th>Type</th>
                        <th>Vegan</th>
                        <th>Vegetarian</th>
                        <th>Allowed during pregnancy</th>
                        <th>Manufacturer recommendations</th>
                        <th>Inactive ingredients</th>
                        <th>Daily dosage for Adults</th>
                        <th>Daily dosage for Children</th>
                    </tr>
                    {this.data}
                </table>
            </>
        )
    }
}