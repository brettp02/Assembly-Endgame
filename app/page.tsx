import { ComponentExample } from "@/components/component-example";
import Header from "@/components/Header";
import Status from "@/components/Status";

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen max-w-3xl py-12 px-4 mx-auto">
            <Header />
            <Status />
        </main>
    )
}