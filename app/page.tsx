'use client'

import { ComponentExample } from "@/components/component-example";
import Header from "@/components/Header";
import Status from "@/components/Status";
import LanguageChip from "@/components/language-chip";
import {languages} from "@/lib/languages";
import {useState} from 'react'

export default function Page() {
    const [currentWord, setCurrentWord] = useState("react");

    return (
        <main className="flex flex-col items-center min-h-screen max-w-3xl py-12 px-4 mx-auto">
            <Header />
            <Status />
            <div className={'mt-7 flex flex-wrap justify-center gap-1 max-w-md'}>
                {languages.map(language => {
                    return <LanguageChip key={language.name} name={language.name} color={language.color} bgColor={language.backgroundColor}/>
                })}
            </div>
        </main>
    )
}