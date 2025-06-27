// app/global-error.tsx

"use client"; // Error boundaries must be Client Components

export default function GlobalError({
                                        error,
                                    }: {
    error: Error & { digest?: string };
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body>
                <h2>Global Error</h2>
            </body>
        </html>
    );
}
