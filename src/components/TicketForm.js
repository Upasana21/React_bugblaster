import React, { useState } from 'react';

export default function TicketForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();


    }

    return (
        <form onSubmit={handleSubmit} className='ticket-form'>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <fieldset className='priority-fieldset'>
                <legend>Priority</legend>
                {
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input type="radio" value={value} checked={priority === value}
                                onChange={(e) => setPriority(e.target.value)} className='priority-input'></input>
                            {label}
                        </label>
                    ))
                }
            </fieldset>
            <button type="submit" className='button'>Submit</button>
        </form>
    );
}
