import { Component, ReactNode } from "react";

type CalculationDisplayParams =
{
    result: Number,
}
export class CalculationDisplay extends Component<CalculationDisplayParams,{}>
{

    render() {
        return <div>{this.props.result}</div>
    }

}