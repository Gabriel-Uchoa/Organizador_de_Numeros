export function DivShowSortNumber(props) {

    if (props.result) {
        return (
            <div className="mt-8 mx-8 flex flex-col text-black max-h-40">
                <span>Números Organizados:</span>

                <div className='flex overflow-auto scrollbar py-2 px-4 rounded text-sm bg-gray-50'>
                    <div className="">
                        {props.result}
                    </div>
                </div>
            </div>
        )
    }
    return null
}

