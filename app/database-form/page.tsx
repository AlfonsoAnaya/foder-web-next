import dynamic from "next/dynamic"

const DatabaseForm = dynamic(
    () => import ("../../components/DatabaseForm/DatabaseForm"),
    {
        ssr:false,
    }
);

function DatabaseFormPage() {

    return (
        <main className="flex flex-col font-sans w-[100%]">
            <DatabaseForm />
        </main>

    )
};

export default DatabaseFormPage