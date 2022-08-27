import React from 'react'

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


export default class Med extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <>
                <tr>
                    <td>{this.props.productName}</td>
                    <td>{this.props.manufacturer}</td>
                    <td>{this.props.contentPerCapsule}</td>
                    <td>{this.props.activeIngredients}</td>
                    <td>{this.props.capsuleIngredients}</td>
                    <td>{this.props.soya === "Soya" ? "Yes" : "No"}</td>
                    <td>{this.props.milk === "Milk" ? "Yes" : "No"}</td>
                    <td>{this.props.type}</td>
                    <td>{this.props.vegan}</td>
                    <td>{this.props.vegetarian}</td>
                    <td>{this.props.pregnancyAcceptable}</td>
                    <td>{this.props.manufacturerRecommendation}</td>
                    <td>{this.props.inactiveIngredients}</td>
                    <td>{this.props.dailyDosageAdult}</td>
                    <td>{this.props.dosageChildren}</td>
                </tr>
            </>
        )
    }
}