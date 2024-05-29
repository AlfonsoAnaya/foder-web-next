'use client'
import { useState, useEffect } from "react"
import { fetchData, postData } from "@/lib/crudService"
import '../../styles/buttons.css'

interface Selection {
    id: number
    user_id: number
    custom_plan_id: number
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
}

function CustomPlanList() {
    const [data, setData] = useState<Selection[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getCustomPlans();
    }, []);

    async function getCustomPlans() {
        setIsLoading(true);
        try {
            const data = await fetchData('custom-plan-selection');
            setData(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false)
        }
    };

    async function saveCustomPlan() {
        const data = {
                "user_id": 5,
                "custom_plan_id": 5,
                "monday": 5,
                "tuesday": 5,
                "wednesday": 5,
                "thursday": 5,
                "friday": 5,
                "saturday": 5,
                "sunday": 5
        }
        try {
            const response = await postData('custom-plan-selection', data);
            console.log('Response:', response);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    async function deleteCustomSelection(id: number) {
        try {
            const response = await fetch(`http://localhost:8000/api/custom-plan-selection/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // If the server responds with a 204 No Content, there's no need to parse the response
            if (response.status !== 204) {
                const jsonResponse = await response.json();
            } else {
                console.log('Resource deleted successfully');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <div className="font-sans leading-8  recipe-method flex flex-col gap-4 justify-center items-center text-[18px]">
            <h3 className="font-[600] mb-[.5rem] underline 
            text-[1.1rem] md:text-[1.5rem] 
            mt-2 md:mt-0">Planes customizados</h3>
            {
                isLoading ?
                    <p>Loading...</p>
                    : ''
            }
            {
                data.length > 0 ?
                    data.map((selection: any, i: number) => {
                        return (
                            <p key={`selection ${i}`}>
                                El usuario con id {selection.user_id} seleccionó las recetas con ids:
                                monday: {selection.monday},
                                tuesday: {selection.tuesday},
                                wednesday: {selection.wednesday},
                                thursday: {selection.thursday},
                                friday: {selection.friday},
                                saturday: {selection.saturday},
                                sunday: {selection.sunday}.
                            </p>
                        )
                    })

                    : ''
            }
            <button
                onClick={saveCustomPlan}
                className="btn-primary border-[3px] border-secondary rounded-full"
            >
                Create Selection
            </button>
            <button
                onClick={() => deleteCustomSelection(7)}
                className="btn-primary border-[3px] border-secondary rounded-full"
            >
                Delete Selection
            </button>
        </div>
    )
}

export default CustomPlanList