import React from "react"



export default function Panel() {
    const innerDivStyle = "bg-green-500 rounded flex justify-center items-center text-white text-2xl font-bold"
    const contents = ["Panel1", "Panel2", "Panel3", "Panel4"]
    return (
        <div className="bg-red-500 grid grid-cols-2  gap-4 p-4 mt-6 h-96">
            {contents.map((content) => {
                return <div className={innerDivStyle}>{content}</div>
            })}
        </div>
    )
}