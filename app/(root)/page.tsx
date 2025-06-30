import Hello from "@/app/component/hello";


export default function Home() {
    console.log("What am I doing here? -- SERVER/CLIENT? ");
    return (
        <>
            <h1 className="text-3xl">Welcome to Next.js</h1>
            <Hello />
        </>
    );
}

async function Page(){
    const response = await fetch("http://localhost:3000/api/books");
    const books = await response.json();

    return(
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    );
}
