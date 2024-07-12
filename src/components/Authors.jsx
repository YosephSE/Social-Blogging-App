import Author from "./Author";
import personData from "../data";

export default function Authors(){
    const person = personData.people.map(data => (
        <Author
            key = {data.fullName}
            name = {data.fullName}
            img={data.url} 
            post= {data.post}
        />
    ))
    return(
        <div className="bg-[#cccccc] grid gap-4 py-4">
            {person}
        </div>
    )
}