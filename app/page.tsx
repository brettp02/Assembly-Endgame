'use client'

import { ComponentExample } from "@/components/component-example";
import Header from "@/components/Header";
import Status from "@/components/Status";
import LanguageChip from "@/components/language-chip";
import {languages, alphabet} from "@/lib/languages";
import {useState} from 'react'
import LetterBox from "@/components/letter-box";
import Key from "@/components/Key";
import {Button} from "@/components/ui/button";

export default function Page() {
    // State variables
    const [currentWord, setCurrentWord] = useState("react");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    // Derived Variables
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.toUpperCase().includes(letter)).length;

    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameWon = currentWord
        .toUpperCase()
        .split('')
        .every(letter => guessedLetters.includes(letter));
    const isGameOver = isGameWon || isGameLost;

    function addGuessedLetter(letter: string) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
        )
    }

    return (
        <main className="flex flex-col items-center min-h-screen max-w-3xl py-12 px-4 mx-auto">
            <Header />
            <Status />

            {/*All current programming languages*/}
            <div className={'mt-7 flex flex-wrap justify-center gap-1 max-w-md'}>
                {languages.map((language, index) => {
                    const isLanguageLost = index < wrongGuessCount

                    return <LanguageChip key={language.name}
                                         name={language.name}
                                         color={language.color}
                                         bgColor={language.backgroundColor}
                                         isLost = {isLanguageLost}
                    />
                })}
            </div>

            {/*Where we guess words*/}
            <div className={'flex gap-1 mt-12'}>
                {[...currentWord].map((letter, i) => {
                    const isGuessed = guessedLetters.includes(letter.toUpperCase())
                    return <LetterBox
                        letter={letter}
                        key={i}
                        isGuessed={isGuessed}
                    />
                })}
            </div>

            {/*Keyboard section*/}
            <div className={'mt-18 flex flex-wrap items-center justify-center gap-1'}>
                {alphabet.map((currLetter, i) => {
                    const upperLetter = currLetter.toUpperCase()
                    let status = 'idle'

                    if (guessedLetters.includes(upperLetter) && currentWord.toUpperCase().includes(upperLetter)) {
                        status = 'correct'
                    } else if (guessedLetters.includes(upperLetter)) {
                        status = 'incorrect'
                    }

                    return <Key key={currLetter} letter={upperLetter} addLetter={addGuessedLetter} status={status}/>
                })}
            </div>

            {isGameOver && (
                <Button className={'flex items-center p-4 mt-20 text-2xl cursor-pointer h-12 border-white'}>
                    New Game
                </Button>
            )}

        </main>
    )
}