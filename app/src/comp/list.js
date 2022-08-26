import React from 'react'
import meds from './data.txt'
import Item from './item.js'

// 0 Product name	
// 1 Manufacture
// 2 Content per capsule	
// 3 Active ingredients	
// 4 Soya	
// 5 Milk	
// 6 Type	
// 7 Vegan	
// 8 Vegetarian	
// 9 Pregnancy acceptable	
// 10 Manufacturer recommendation	
// 11 inactive ingredients	
// 12 Daily dosage - adult	
// 13 Dosage - children

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
                    // this.data[index] = `productName="${d[0]}
                    //     manufacturer="${d[1]}
                    //     contentPerCapsule="${d[2]}
                    //     activeIngredients="${d[3]}
                    //     soya="${d[4]}
                    //     milk="${d[5]}
                    //     type="${d[6]}
                    //     vegan="${d[7]}
                    //     vegetarian="${d[8]}
                    //     pregnancyAcceptable="${d[9]}
                    //     manufacturerRecommendation="${d[10]}
                    //     inactiveIngredients="${d[11]}
                    //     dailyDosageAdult="${d[12]}
                    //     dosageChildren="${d[13]}`
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

        return (
            <>
                <style>{style}</style>
                <table>
                    {this.data}
                </table>
            </>
        )
    }
}