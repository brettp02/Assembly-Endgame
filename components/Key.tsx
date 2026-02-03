import {Button} from "@/components/ui/button";
import {JSX} from "react";
import useSound from 'use-sound'


export default function Key({letter}: {letter: string}) {
    const [play] = useSound('/typewriter.wav')
    return <Button
        style = {{
        backgroundColor: '#FCBA29'
    }}
        variant={'ghost'}
        className={'text-accent border-white w-15 h-15 text-3xl font-bold cursor-pointer'}
        onClick={play}
    >



        {letter}
    </Button>
}