import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardText } from "phosphor-react";
import { Button } from "./Button";

export function CopyToClipBoard(props) {

    if (props.TextForCopy) {
        return (
            <div className="flex justify-between">
                <Button type="button">
                    <CopyToClipboard
                        text={props.TextForCopy}
                        onCopy={() => alert("Copiado com sucesso")}>
                        <div className="flex justify-center items-center">
                            <ClipboardText className='w-5 h-6' />
                            <span className="text-sm">Copiar</span>
                        </div>
                    </CopyToClipboard>
                </Button>
            </div>
        )
    }
    return null

}