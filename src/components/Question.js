
import './css/Question.css'

const Question = () => {
    return (
        <>
        <h3 className='header'>Question</h3>
        <div className='question'>
            <h2>Table Decorations</h2>
            <p>
                You have r red, g green and b blue balloons. To decorate a single table for the banquet you need exactly three balloons. Three balloons attached to some table shouldn't have the same color. What maximum number t of tables can be decorated if we know number of balloons of each color? Your task is to write a program that for given values r, g and b will find the maximum number t of tables, that can be decorated in the required manner.
            </p>
            <h3>Input</h3>
            <p>
                The single line contains three integers r, g and b (0 ≤ r, g, b ≤ 2·109) — the number of red, green and blue baloons respectively. The numbers are separated by exactly one space.
            </p>
            <h3>Ouput</h3>
            <p>
                Print a single integer t — the maximum number of tables that can be decorated in the required manner.
            </p>
            <h3>Examples</h3>
            <h4>Input</h4>
            <p>5 4 3</p>
            <h4>Output</h4>
            <p>4</p>
        </div>
        </>
    )
}

export default Question