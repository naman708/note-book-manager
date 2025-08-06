
import { useState } from "react";

function NoteBookCard(props) {
  const [form,setForm]=useState({
    id: Date.now(),
    title:'',
    description:''
  });
      const changeHandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});

      }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(form);
        props.onSubmit(form);
       
        

    }



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
            <div className="flex flex-col gap-4">
                <label htmlFor="note" className="text-sm font-medium text-gray-700">Note Title</label>
                <input
                    type="text"
                    id="note"
                    name="title"
                    value={form.title}
                    onChange={changeHandler}
                    placeholder="Enter note title"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                <label htmlFor="paragraph" className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="paragraph"
                    name="description"
                    value={form.description}
                    onChange={changeHandler}
                    placeholder="Enter description"
                    rows="4"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>

                <button
                    onClick={submitHandler}
                    className="bg-amber-500 text-white font-medium py-2 px-4 rounded-md hover:bg-amber-600 transition-all duration-200"
                >
                    Submit
                </button>

               
                
            </div>
        </div>
    );
}

export default NoteBookCard;
