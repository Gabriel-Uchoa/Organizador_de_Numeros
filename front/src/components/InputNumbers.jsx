import { useEffect, useState } from 'react';
import axios from 'axios';

import { SortAscending, Trash } from "phosphor-react";

import { DivShowSortNumber } from "./DivShowSortNumber";
import { ValidationForms } from "../utils/ValidationForms";
import { CopyToClipBoard } from "./CopyToClipBoard";
import { Button } from "./Button";

export function InputNumbers() {
    const [numbers, setNumbers] = useState('')
    const [result, setResult] = useState('')
    const [inputDisabled, setInputDisabled] = useState(false)

    const URL = "http://localhost:3333/"

    useEffect(() => {
        var input = document.querySelector("#numbers");
        input.disabled = (inputDisabled);
    });

    const handleChangeNumber = (e) => {
        setNumbers(e.target.value)
    }

    function disablesInput() {
        setInputDisabled(!inputDisabled)
    }

    function onClickerTrashBtn() {
        if (inputDisabled) {
            disablesInput()
        }

        setNumbers('')
        setResult('')
    }

    async function hanldeSubmitForms(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        if (!data.numbers) {
            alert("Campo Vazio!")
            return;
        }

        try {
            var formatation = ValidationForms(data.numbers)
            const response = await axios.post(`${URL}`, {
                numbers: formatation
            })
            disablesInput()
            setResult(response.data.resultFinal.join(', '))
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='fixed bg-[#ffffff80] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg xl:w-[480px] shadow-black/25'>
            <DivShowSortNumber result={result} />
            <form onSubmit={hanldeSubmitForms} className='mt-8 flex flex-col gap-2'>

                <div className='flex flex-col text-black mx-8'>
                    <label htmlFor="numbers">Números Desorganizados:</label>
                    <input
                        id='numbers'
                        name='numbers'
                        placeholder='1, 5, 3, 2'
                        pattern="[\d ,]*"
                        value={numbers}
                        onChange={(e) => handleChangeNumber(e)}
                        className='py-3 px-4 rounded text-sm' />
                </div>

                <div className='flex items-center justify-end gap-2 mx-8 mb-8'>
                    <div>
                        <Button type="reset" onClick={onClickerTrashBtn}>
                            <Trash className='w-5 h-6' />
                        </Button>
                    </div>

                    {result
                        ?
                        <div>
                            <CopyToClipBoard TextForCopy={result} />
                        </div>
                        :
                        <div>
                            <Button type='submit'>
                                <SortAscending className='w-5 h-5' />
                                <span>Organizar</span>
                            </Button>
                        </div>
                    }

                </div>
            </form>
        </div>
    )
}