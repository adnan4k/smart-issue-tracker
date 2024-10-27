'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function newIssuePage() {
  interface IssueForm{
    title:String,
    description:String
  }
  const {register,control,handleSubmit} = useForm<IssueForm>();
    const router = useRouter()
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{
      const response = await axios.post('/api/issues',data)
      router.push('/issues')
    })}>
        <TextField.Root  placeholder='Title' {...register('title')}/>
        <Controller 
        name='description'
        control={control}
        render={({field})=><SimpleMDE placeholder='Description'{...field} />}/>
        

        <Button>Submit New Issue</Button>
    </form>
  )
}

export default newIssuePage