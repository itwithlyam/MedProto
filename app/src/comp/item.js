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
        let allergens = ""
        if (this.props.soya === "Soya") {
            allergens += "Soya"
            if (this.props.milk === "Milk") {
                allergens += ", Milk"
            }
        } else if (this.props.milk === "Milk") {
            allergens += "Milk"
        } else {
            allergens += "None"
        }

        let diet = ""
        if (this.props.vegan !== "N") {
            diet += "Vegan"
            if (this.props.vegetarian === "Y") {
                diet += ", Vegetarian"
            }
        } else if (this.props.vegetarian === "Y") {
            diet += "Vegetarian"
        } else {
            diet += "None"
        }

        let preg = ""
        if (this.props.pregnancyAcceptable === "Y") preg = "Yes"
        else if (this.props.pregnancyAcceptable === "N") preg = "No"
        else if (this.props.pregnancyAcceptable === "N/A") preg = "N/A"

        return (
            <>
                <tr>
                    <td>{this.props.productName}</td>
                    <td>{this.props.manufacturer}</td>
                    <td>{this.props.contentPerCapsule}</td>
                    <td>{this.props.activeIngredients} {this.props.inactiveIngredients === "N/A" ? "" : ", " + this.props.inactiveIngredients} {this.props.capsuleIngredients === "N/A" ? "" : ", " + this.props.capsuleIngredients}</td>
                    <td>{allergens}</td>
                    <td>{diet}</td>
                    <td>{this.props.type}</td>
                    <td>{preg}</td>
                    <td>{this.props.manufacturerRecommendation}</td>
                    <td>{this.props.dailyDosageAdult}</td>
                    <td>{this.props.dosageChildren}</td>
                </tr>
            </>
        )
    }
}