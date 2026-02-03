'use client'

import {Button} from "@/components/ui/button";
import useSound from 'use-sound'

export default function Key({letter, addLetter}: {letter: string, addLetter: (letter: string) => void}) {
    const [play] = useSound('/typewriter.wav')
    
    function handleClick() {
        play()
        addLetter(letter)
    }
    
    return <Button
        style = {{
            backgroundColor: '#FCBA29'
        }}
        variant={'ghost'}
        className={'text-accent border-white w-15 h-15 text-3xl font-bold cursor-pointer'}
        onClick={handleClick}
    >
        {letter}
    </Button>
}