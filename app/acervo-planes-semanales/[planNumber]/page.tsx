import dynamic from "next/dynamic"

const WeeklyPlanForArchive = dynamic(
    () => import("../../components/WeeklyPlan/WeeklyPlanForArchive"),
    {
        ssr: false,
    }
);

export default function WeeklyPlanForArchivePage({params}:
    {params:{planNumber:number}
}) {
    const { planNumber } = params; 
    
    return (
        <>
            <WeeklyPlanForArchive
                weeklyPlanNumber={planNumber}
            />
        </>

    )
}