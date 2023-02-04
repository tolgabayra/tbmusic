import { TextInput, MultiSelect, Button, Textarea } from '@mantine/core';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { mainAxios } from '../utils/appAxios';



export default function Home() {
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [selected, setSelected] = useState<Array<string>>([])
    const [selected2, setSelected2] = useState<Array<any>>([])



    useEffect(() => {
        console.log(selected);
    }, [selected])



    useEffect(() => {
        console.log(selected2)
    }, [selected2])

    // Suggest Request
    const submitRequest = () => {
        mainAxios.post
    }


    return (
        <>
            {
                isLoading ? <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                    <div className="bg-gray-100 flex rounded-xl shadow-lg max-w-4xl p-5 items-center">
                        <div className="md:w-1/2 px-8 md:px-16">
                            <h2 className="font-bold text-xl text-[#002D74]">Welcome The Emonitonal Music App</h2>
                            <p className="text-xs mt-4 text-[#002D74]">You can start by answering the following questions.</p>

                            <form className="flex flex-col gap-4">
                                <TextInput
                                    label="Enter your name"
                                    className='mt-4'
                                    placeholder="Your email"
                                />
                                <div className="relative">
                                    <MultiSelect
                                        className=' cursor-pointer hover:cursor-pointer'
                                        data={['Happy', 'Energetic', 'Sad', 'Calm', 'Melancolic', 'Study']}
                                        label="Your mood"
                                        placeholder="Pick all that you like"
                                        searchable
                                        nothingFound="Nothing found"
                                        maxSelectedValues={5}
                                        value={selected}
                                        onChange={setSelected}
                                    />
                                </div>
                                <div className="relative">
                                    <MultiSelect
                                        className=' cursor-pointer hover:cursor-pointer'
                                        data={['1990-2000', '2000-2010', '2010+']}
                                        label="Year"
                                        placeholder="Pick a year"
                                        searchable
                                        nothingFound="Nothing found"
                                        maxSelectedValues={1}
                                        value={selected2}
                                        onChange={setSelected2}
                                    />
                                </div>
                                <Textarea
                                    placeholder="Example: Right now i need to focus to work."
                                    label="Can you tell us what you're thinking and feeling right now?"
                                />
                                <Button variant='outline'>
                                    Suggest music
                                </Button>
                            </form>



                            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                                <a href="#">Forgot your password?</a>
                            </div>

                            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                                <p>Don't have an account?</p>
                                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
                            </div>
                        </div>

                        <div className="md:block hidden w-1/2">
                            <img className="rounded-xl" src="https://images.unsplash.com/photo-1588693951525-7b0be0fc710f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                        </div>
                    </div>

                </section>
                    :

                    <Loading />
            }

        </>
    )
}