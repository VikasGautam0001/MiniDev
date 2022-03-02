
import './css/Question.css'
import QuestionDescription from './QuestionComponent/QuestionDescription'
import QuestionHeading from './QuestionComponent/QuestionHeading'
import QuestionInput from './QuestionComponent/QuestionInput'
import QuestionOutput from './QuestionComponent/QuestionOutput'

let questionsList = [
    {
        "Heading":"Table Decorations",
        "Description":"You have r red, g green and b blue balloons. To decorate a single table for the banquet you need exactly three balloons. Three balloons attached to some table shouldn't have the same color. What maximum number t of tables can be decorated if we know number of balloons of each color? Your task is to write a program that for given values r, g and b will find the maximum number t of tables, that can be decorated in the required manner.",
        "Input":"The single line contains three integers r, g and b (0 ≤ r, g, b ≤ 2·109) — the number of red, green and blue baloons respectively. The numbers are separated by exactly one space.",
        "Output":"Print a single integer t — the maximum number of tables that can be decorated in the required manner.",
    },
    {
        "Heading":"Nested Ranges Count",
        "Description":"Given n ranges, your task is to count for each range how many other ranges it contains and how many other ranges contain it.Range [a,b] contains range [c,d] if a≤c and d≤b.",
        "Input":"The first input line has an integer n: the number of ranges.After this, there are n lines that describe the ranges. Each line has two integers x and y: the range is [x,y].You may assume that no range appears more than once in the input.",
        "Output":"First print a line that describes for each range (in the input order) how many other ranges it contains.Then print a line that describes for each range (in the input order) how many other ranges contain it."
    }
]

let questionNumber=0;

const Question = () => {
    return (
        <>
        <h3 className='header'>Question</h3>
        <div className='question'>
            <QuestionHeading Heading= {questionsList[questionNumber].Heading} />
            <QuestionDescription Description={questionsList[questionNumber].Description}/>
            <QuestionInput Input={questionsList[questionNumber].Input}/>
            <QuestionOutput Output={questionsList[questionNumber].Output}/>
        </div>
        </>
    )
}

export default Question