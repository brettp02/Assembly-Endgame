'use client'

import {Button} from "@/components/ui/button";
import useSound from 'use-sound'

export default function Key({letter, addLetter, status}: {letter: string, addLetter: (letter: string) => void, status: string}) {
    const [defaultSound] = useSound('/typewriter.wav')
    const [correctSound] = useSound('/correct-sound.wav')
    const [errorSound] = useSound('/error-sound.wav')

    const bgCol = status === 'idle' ? '#FCBA29' :
                  status === 'correct' ? '#10A95B' :
                  status === 'incorrect' ? '#EC5D49' : '#FCBA29'
    
    function handleClick() {
        defaultSound()
        addLetter(letter)
    }
    
    return <Button
        style = {{
            backgroundColor: bgCol
        }}
        variant={'ghost'}
        className={'text-accent border-white w-15 h-15 text-3xl font-bold cursor-pointer'}
        onClick={handleClick}
    >
        {letter}
    </Button>
}