export function Button(props) {
    return (
        <button
            {...props}
            type={props.type}
            className='bg-[#1E1E1E] hover:bg-[#2e2e2e] py-2 px-6 rounded-xl font-semibold flex items-center gap-2'
        />
    )
}