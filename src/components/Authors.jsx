import Author from "./Author";

export default function Authors({data}){
    let count = 0
    const user = data.users.map( user => {
        data.posts.forEach(post => {
            user.name === post.name && count++
        })
        return (
        <Author
            key = {user.name}
            name = {user.name}
            img={user.profilePicture} 
            post= {count}
        />
        )
    })
    return(
        <div className="bg-[#cccccc] grid gap-4 py-4">
            {user}
        </div>
    )
}