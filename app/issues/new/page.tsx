'use client'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';


function newIssuePage() {
  type IssueForm = z.infer<typeof createIssueSchema>;

  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const router = useRouter()
  const [error, setError] = useState('');
  return (
    <div className='max-w-xl'>


      <form className=' space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          const response = await axios.post('/api/issues', data)
          router.push('/issues')

        } catch (error) {
          setError('unExpected error')
        }
      })}>
        <TextField.Root placeholder='Title' {...register('title')} />
        <ErrorMessage >{errors.title?.message}</ErrorMessage>
        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE placeholder='Description'{...field} />} />
        <ErrorMessage >{errors.description?.message}</ErrorMessage>



        <Button>Submit New Issue</Button>
      </form>

    </div>
  )
}

export default newIssuePage