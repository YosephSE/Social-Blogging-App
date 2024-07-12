export default function Author (props){
    return(
        <div className="flex gap-3 px-2 py-4 mx-2 h-36 rounded-xl items-center bg-white hover:shadow-xl hover:border-[0.5px] hover:border-black">
            <img src={props.img} alt="" className="w-24 h-24 rounded-[50%]"/>
            <div>
                <h2 className="text-lg font-semibold leading-6">{props.name}</h2>
                <p className="text-[#696565] text-base leading-6">{
                    props.post? 
                    `${props.post} ${props.post === 1? "post": "posts"}`
                    :"No posts"
                }</p>
            </div>
        </div>
    )
}