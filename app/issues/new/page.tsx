'use client'
import { Button, Callout,  TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function newIssuePage() {
  interface IssueForm {
    title: String,
    description: String
  }
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter()
  const [error, setError] = useState('');
  return (
    <div className='max-w-xl'>
      {error &&
        <Callout.Root color='red'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      }

      <form className=' space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          const response = await axios.post('/api/issues', data)
          router.push('/issues')

        } catch (error) {
          setError('unExpected error')
        }
      })}>
        <TextField.Root placeholder='Title' {...register('title')} />
        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE placeholder='Description'{...field} />} />


        <Button>Submit New Issue</Button>
      </form>

    </div>
  )
}

export default newIssuePage