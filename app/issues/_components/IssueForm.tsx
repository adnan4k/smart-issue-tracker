'use client'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { Issue } from '@prisma/client';


const SimpleMDE = dynamic(()=>import('react-simplemde-editor'),{ssr:false})

function IssueForm({issue}:{issue?:Issue}) {
  type IssueFormData = z.infer<typeof createIssueSchema>;

  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema)
  });
  const router = useRouter()
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      const response = await axios.post('/api/issues', data)
      setIsSubmitting(false)
      router.push('/issues')

    } catch (error) {
      setIsSubmitting(false)

      setError('unExpected error')
    }
  })
  return (
    <div className='max-w-xl'>


      <form className=' space-y-3' onSubmit={ onSubmit}>
        <TextField.Root placeholder='Title' {...register('title')} />
        <ErrorMessage >{errors.title?.message}</ErrorMessage>
        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE placeholder='Description'{...field} />} />
        <ErrorMessage >{errors.description?.message}</ErrorMessage>



        <Button disabled={isSubmitting}>Submit New Issue{isSubmitting && <Spinner></Spinner>}</Button>
      </form>

    </div>
  )
}

export default IssueForm